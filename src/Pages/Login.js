import React, { useContext, useEffect, useState } from 'react';
import './Login.css'; // Optional: Create a CSS file for styling
import axios from 'axios';
import DataContext from '../Context/DataContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setIsAuthenticated, users, setUsers, username, setUsername } = useContext(DataContext);
    const navigate = useNavigate();

    useEffect(() => {
        setIsAuthenticated(false)
        const fetchLogin = async () => {
            try {
                const response = await axios.get (`http://localhost:3500/login`);
                setUsers(response.data);
            }
            catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                }
                else
                {
                    console.log(`Error: ${err.message}`);
                }
            }
        }
        fetchLogin();
    },[])

    const handleLogin = (event) => {
        event.preventDefault();

        const user = users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            console.log(`Login successful`, user);
            setUsername(user.username);
            setIsAuthenticated(true);
            navigate('/Home');
            setError('');
        }
        else {
            setError(`Invalid username or password`);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <br />
            </p>
            <button onClick={() => navigate('/Signup')}>Sign Up</button>
        </div>
    );
};

export default Login;
