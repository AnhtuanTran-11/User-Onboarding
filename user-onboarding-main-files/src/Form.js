import React from "react";

export default function Form(props) {
    const { values, update, submit, disabled, errors } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };
    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        update(name, valueToUse);
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h1>Add a user</h1>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>

                <label>
                    Name
        <input
                        type="text"
                        name="name"
                        onChange={onChange}
                        value={values.name}
                        placeholder="Type a name"
                        maxLength="30"
                    />
                </label>
                <label>
                    Email
        <input
                        type="text"
                        name="email"
                        onChange={onChange}
                        value={values.email}
                        placeholder="Type an email"
                        maxLength="30"
                    />
                </label>
                <label>
                    Password
        <input
                        type="text"
                        name="password"
                        onChange={onChange}
                        value={values.password}
                        placeholder="Type a password"
                        maxLength="30"
                    />
                </label>
                <label>
                    Terms of Service
        <input
                        type="checkbox"
                        name="terms"
                        checked={values.terms}
                        onChange={onChange}
                    />
                </label>
                <button id='submitBtn' disabled={disabled}>Submit</button>
            </div>
        </form>
    );
}
