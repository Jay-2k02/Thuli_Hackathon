# Image Search Application

## Project Overview

This application is a user-friendly image search platform that allows users to search for beautiful images using the Unsplash API. Users can create an account, log in, search for images, and save their favorite images to their profile. The key features of this app include user authentication (login, signup, logout), image searching, and the ability to save images for personalized collections.

## Features

### 1. **User Authentication**
   - **Login**: Registered users can log in with their email and password. The login form ensures secure authentication, allowing users to access their personal image collections.
   - **Signup**: New users can create an account by providing their details such as email, username, and password. Upon successful signup, they can start using the image search features immediately.
   - **Logout**: Users can securely log out from their account, which ensures that their session data is cleared and no unauthorized access can occur.

### 2. **Image Search Functionality**
   - **Search for Images**: Users can search for high-quality images using keywords or phrases. The search functionality is powered by the Unsplash API, providing access to a vast library of images. Users can enter their desired search term in the search bar, and the app displays a grid of relevant images.
   - **Real-time Search**: The search results are fetched from the Unsplash API and updated in real-time, providing a smooth user experience.

### 3. **Saving Images**
   - **Save Images to Profile**: Users have the ability to save their favorite images to their profile. This allows them to create a personalized collection of images that they can revisit at any time.
   - **View Saved Images**: A dedicated section in the user profile allows users to view all the images they have saved. This makes it easy for users to manage their favorite images.
   - **Remove Saved Images**: Users can remove images from their saved collection if they no longer want to keep them.

### 4. **Integration with Unsplash API**
   - The application uses the **Unsplash API** to search and retrieve images based on user queries. Each search returns a set of high-quality images related to the search term.
   - **API Integration**: The app makes use of `axios` to send HTTP requests to the Unsplash API. This allows for seamless retrieval of data and efficient handling of API responses.
   - **Secure API Requests**: API keys are handled securely, ensuring that requests to the Unsplash API are authenticated and follow the platform's usage policies.

## How It Works

1. **User Registration & Login**: 
   - New users sign up with their details, while existing users can log in to access their account.
   - After successful login, users are redirected to the home page where they can start searching for images.

2. **Search for Images**: 
   - Users enter keywords in the search bar to find images related to their interests.
   - The app sends a request to the Unsplash API with the search term and displays the results in a grid format.

3. **Save & Manage Images**: 
   - Users can save images they like by clicking the "Save" button.
   - Saved images are stored in the user's profile and can be accessed anytime.
   - Users can also remove images from their saved collection if needed.

4. **Logout/Signout**:
   - Users can log out of their account, ending their session securely.
   - This ensures that user data is protected and only accessible when logged in.

## Technologies Used
   - **React**: For building the user interface and managing the state with `useContext` and `useState`.
   - **Axios**: For making HTTP requests to the Unsplash API.
   - **Unsplash API**: Provides access to a vast library of images that are displayed based on user queries.
   - **CSS**: For styling the components and providing a user-friendly interface.
   - **React Router**: For managing navigation and routing between different pages.

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
