import './App.css';
import DataContext, { DataProvider } from './Context/DataContext'; // Ensure DataProvider is imported
import { useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ProtectedRoute from './Components/ProtectedRoute';
import SavedImages from './Pages/SavedImages';

function App() {
  return (
    <DataProvider>
      <Main /> {/* Main component will have access to DataContext */}
    </DataProvider>
  );
}

const Main = () => {
  const { images } = useContext(DataContext); // Access context values here

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Saved" element={
          <ProtectedRoute>
            <SavedImages />
          </ProtectedRoute>
          } /> 
        <Route exact path="/Home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
          } />
      </Routes>
    </div>
    
  );
};

export default App;
