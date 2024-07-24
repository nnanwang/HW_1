import React, { useState } from 'react';

export default function NewUser() {
    const [userData, setUserData] = useState({
        name: '',
        email: ''
    });

    // Handle input changes
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting user data:', userData);
        // Add your submission logic here, such as sending data to a backend server
    };

    return (
        <div>
            <h2>Register New User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={userData.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={userData.email} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

  