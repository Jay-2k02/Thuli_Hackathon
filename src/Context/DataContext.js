import { createContext, useState } from "react";
import api from "../Api/Axiosapi"

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [searchImage, setSearchImage] = useState('');
    const [images, setImages] = useState([]);
    const accessKey = 'mdfIFkMy8gQoq1JGmur9pMmF3jxpQwjB_vWNRTxdOdY';
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [saved, setSaved] = useState([]);

    
    
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        if (searchImage) {
            onSearchSubmit(); // Call the search function when form is submitted
        }
    };

    const onSearchSubmit = async () => {
        
        try {
            const response = await api.get(`/photos?query=${searchImage}&per_page=30&client_id=${accessKey}`);

            setImages(response.data.results);  // Store the images in state after the API call
        } catch (err) {
            console.log(err.response ? err.response.data : err.message); // Improved error handling
        }
    };

    return (
        <DataContext.Provider value={{
            searchImage, 
            setSearchImage, 
            handleFormSubmit, // Function to handle form submission
            images, // Images fetched from API
            isAuthenticated,
            setIsAuthenticated,
            users,
            setUsers,
            setImages,
            username,
            setUsername,
            saved,
            setSaved
        }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
