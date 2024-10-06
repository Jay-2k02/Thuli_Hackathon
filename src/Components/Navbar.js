import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../Context/DataContext';
import './Navbar.css'; // Optional CSS for styling

const NavBar = () => {
    const { setIsAuthenticated, setImages, setSearchImage } = useContext(DataContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuthenticated(false); // Reset authentication status
        setImages ([]);
        setSearchImage ('');
        localStorage.removeItem('isAuthenticated'); // Clear session if needed
        navigate('/'); // Redirect to login page
    };

    const handleSaved = () => {
        navigate('/Saved');
    }

    return (
        <nav className="navbar">
            <h1>Thuli Image Searcher</h1>
            <ul>
                <li><button onClick={handleSaved}>Saved</button></li>
                <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
            </ul>
        </nav>
    );
};

export default NavBar;
