import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../Context/DataContext';
import './Image.css'; // Reusing styles from Image.css
import ImageCard from '../Components/ImageCard'; // Ensure correct path
import axios from 'axios';
import NavBar from './Navbar'; // Import the NavBar component

function SavedImages() {
    const { username } = useContext(DataContext); // Get the current username from context
    const [savedImages, setSavedImages] = useState([]);

    useEffect(() => {
        const fetchSavedImages = async () => {
            try {
                // Fetch all users' data
                const allUsersResponse = await axios.get('http://localhost:3500/users');
                console.log("All Users Data:", allUsersResponse.data);

                // Find all users based on the username
                const currentUserArray = allUsersResponse.data.filter(user => user.username === username);
                console.log("Current User Array:", currentUserArray);

                if (currentUserArray.length > 0) {
                    // Map over each user to collect their saved images
                    const images = currentUserArray.map(user => ({
                        id: user.image_id, // Unique ID for the image
                        urls: { small: user.image_urls }, // URL of the image
                        alt_description: user.image_alt // Alt description of the image
                    }));

                    console.log("Mapped Saved Images:", images);
                    setSavedImages(images);
                } else {
                    console.log("No saved images found for this user.");
                }
            } catch (err) {
                console.error("Error fetching saved images:", err);
            }
        };

        fetchSavedImages();
    }, [username]);

    return (
        <>
            {/* Include the NavBar component at the top */}
            <NavBar />
            
            {/* Display the saved images gallery */}
            <div className="image-gallery">
                {savedImages.length > 0 ? (
                    savedImages.map((image) => (
                        <ImageCard 
                            key={image.id} 
                            image={image}  // Pass the image data to ImageCard
                            isSaved={true} // Indicates that these are saved images
                        />
                    ))
                ) : (
                    <p>No saved images found.</p>
                )}
            </div>
        </>
    );
}

export default SavedImages;
