import React, { useContext, useState } from 'react';
import './Signup.css'; // Optional: Create a CSS file for styling
import axios from 'axios';
import DataContext from '../Context/DataContext';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {users, setUsers} = useContext(DataContext);
    const navigate = useNavigate();


    const handleSignup = (event) => {
        event.preventDefault();

        if (!username || !password) {
            setError('Please fill in all fields.');
            return;
        }

        // Placeholder for successful signup
        const user = users.find(
            (user) => user.username === username && user.password === password
        );
        
        if (user) {
            setError('User already exists')
            setUsername('')
            setPassword('')
            return    
        }
        addUSer ();
        setError(''); // Clear any previous errors
        navigate('/');
    };

    const addUSer = async () => {
        const newUser = { username: username, password: password};
        try {
            const response = await axios.post ('http://localhost:3500/login', newUser);
            const allUsers = [...users, response.data];
            setUsers(allUsers);
        }
        catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/');
        console.log ("Login clicked")
    }

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit">Sign Up</button> 
                <p></p>
                {error === 'User already exists' ? <button type="submit" onClick={handleLogin}>Login</button> : <></>}
            </form>
        </div>
    );
};

export default Signup;
