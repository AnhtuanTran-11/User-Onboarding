import './App.css';
import Form from './Form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';
import User from './User';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: '',
};
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}
const initialUsers = [];
const initialDisabled = true;


export default function App() {
// States
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  
 // Helpers
  
    const postNewUser = (newUser) => {
      axios
      .post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch(err => {
        console.log(err);
      });
    }
  
  // Event handlers

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]:"",
        })
      })
        .catch((err) => {
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0],
          });
        });
  
      setFormValues({
        ...formValues,
        [name]: value
      });
  };
  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.terms,
  }
postNewUser(newUser);
}
// Side effects

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);


  return (
    <div>
      <Form values={formValues} update={inputChange} submit={submitForm} disabled={disabled} errors={formErrors} />
      {
        users.map(user => {
          return (
            <User details={user} />
          )
        })
      }
      
      
    </div>
  )
  }