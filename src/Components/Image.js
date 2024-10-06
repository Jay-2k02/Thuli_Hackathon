import React, { useContext, useState } from 'react';
import DataContext from '../Context/DataContext';
import './Image.css';
import ImageCard from './ImageCard';
import axios from 'axios';

function Image() {
    const { images, username, saved, setSaved } = useContext(DataContext);
    const [savedImages, setSavedImages] = useState({}); // Track save status for each image by ID

    const saveImage = async (image) => {
        const newUser = { 
            username: username, 
            image_id: image.id, 
            image_urls: image.urls.small, 
            image_alt: image.alt_description 
        };

        try {
            // Send the save request to the backend
            const response = await axios.post('http://localhost:3500/users', newUser);
            // Update the saved images state
            setSaved((prev) => [...prev, response.data]);
            setSavedImages((prev) => ({ ...prev, [image.id]: true })); // Set the saved status for this specific image
        } catch (err) {
            console.log('Error saving image:', err.response.data); // Improved error logging
        }
    };

    return (
        <div className="image-gallery">
            {images.map((image) => (
                <ImageCard
                    key={image.id}
                    image={image}
                    onSave={() => saveImage(image)}
                    isSaved={!!savedImages[image.id]} // Check if this specific image is saved
                />
            ))}
        </div>
    );
}

export default Image;
