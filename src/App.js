import React, { useState } from 'react';
import LandingPage from './LandingPage';
import LoadingScreen from './LoadingScreen';
import ResultsPage from './ResultsPage';
import './App.css'; // Optional: Import your global styles if you have any

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [genre, setGenre] = useState('');

    const handleConnect = () => {
        setIsLoading(true);
        // Simulate an API call to connect to Spotify
        setTimeout(() => {
            // Mock data for genre
            setGenre('Goth'); // Example genre
            setIsLoading(false);
        }, 9000); // Simulate loading time (9 seconds)
    };

    return (
        <div className="App">
            {isLoading ? (
                <LoadingScreen />
            ) : genre ? (
                <ResultsPage genre={genre} />
            ) : (
                <LandingPage onConnect={handleConnect} />
            )}
        </div>
    );
}

export default App;