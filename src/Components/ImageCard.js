import React, { useState, useEffect } from 'react';

const ImageCard = ({ image, onSave, isSaved }) => {
    const [saved, setSaved] = useState(isSaved); // Use prop to determine saved state

    // Update local state when the parent prop `isSaved` changes
    useEffect(() => {
        setSaved(isSaved);
    }, [isSaved]);

    const handleSave = async () => {
        await onSave(image); // Call the save function passed from parent
        setSaved(true); // Update local state to indicate the image is saved
    };

    return (
        <div className="image-card">
            <img src={image.urls.small} alt={image.alt_description} />
            <button 
                className="save-button" 
                onClick={handleSave} 
                disabled={saved} // Disable button if image is already saved
            >
                {saved ? 'Saved' : 'Save'} {/* Display Saved if already saved */}
            </button>
        </div>
    );
};

export default ImageCard;
