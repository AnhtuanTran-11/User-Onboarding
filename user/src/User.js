import React from "react";

function User({ details }) {

if (!details) {
    return <h3>Working fetching your friends details...</h3>;
}

return (
    <div>
        <h2>{details.name}</h2>
        <p>Email: {details.email}</p>
        <p>Password: Not shown</p>
    </div>
    );
}

export default User;
