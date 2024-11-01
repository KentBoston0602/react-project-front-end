import React, { useState } from 'react';
import LandingPage from './LandingPage';
import LoadingScreen from './LoadingScreen';
import ResultsPage from './ResultsPage';
import './App.css'; // Optional: Import your global styles if you have any

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [genre, setGenre] = useState('');
    const [outfit, setOutfit] = useState('');

    const handleConnect = () => {
        setIsLoading(true);
        // Simulate an API call to connect to Spotify
        // This is where you would typically initiate the OAuth process
        setTimeout(() => {
            // Mock data for genre and outfit
            setGenre('Goth'); // Example genre
            setOutfit('Black leather jacket, ripped jeans, and combat boots.'); // Example outfit
            setIsLoading(false);
        }, 9000); // Simulate loading time (9 seconds)
    };

    return (
        <div className="App">
            {isLoading ? (
                <LoadingScreen />
            ) : genre ? (
                <ResultsPage genre={genre} outfit={outfit} onRefresh={() => window.location.reload()} />
            ) : (
                <LandingPage onConnect={handleConnect} />
            )}
        </div>
    );
}

export default App;
