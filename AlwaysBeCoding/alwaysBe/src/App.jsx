// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import PreviewList from './PreviewList';

const planetsPerPage = 4; // Change this value to set the number of planets per page

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredPlanet, setFeaturedPlanet] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Function to fetch data from the API based on the search term
    const fetchData = async () => {
      setLoading(true);
      let apiUrl = 'https://swapi.dev/api/planets/';
      if (searchTerm) {
        apiUrl += `?search=${searchTerm}`;
      }

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Assuming the API returns an array of objects, set the fetched data in the state
        setData(data.results);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, [searchTerm]);

  const [newPlanetData, setNewPlanetData] = useState({
    name: '',
    climate: '',
    population: '',
    terrain: '',
    gravity:'',
    // Add more fields here as needed
  });


    // Event handler for handling form input change
    const handleInputChange = event => {
      const { name, value } = event.target;
      setNewPlanetData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    // Event handler for adding a new planet
    const handleAddPlanet = event => {
      event.preventDefault();
      // Assuming the API returns an array of objects, append the new planet to the current data
      setData(prevData => [...prevData, newPlanetData]);
      // Clear the form data after adding the new planet
      setNewPlanetData({
        name: '',
        climate: '',
        population: '',
        terrain:'',
        gravity:'',
        // Add more fields here as needed
      });
    };


  // Event handler for when a planet is clicked in the PreviewList
  const handleItemClick = planet => {
    // Update the featuredPlanet state with the clicked planet
    setFeaturedPlanet(planet);
  };

  // Event handler for going back to the preview list
  const handleGoBack = () => {
    // Set the featuredPlanet state back to null to show the preview list
    setFeaturedPlanet(null);
  };

  // Event handler for deleting a planet from the preview list
  const handleDeletePlanet = planet => {
    const updatedData = data.filter(item => item !== planet);
    setData(updatedData);
    handleGoBack(); // Go back to the preview list after deletion
  };

  // Event handler for navigating to the next page
  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  // Event handler for navigating to the previous page
  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  // Event handler for resetting the entire page to its initial state
  const handleResetAll = () => {
    setSearchTerm('');
    setFeaturedPlanet(null);
    fetchData(); // Fetch the original preview list again from the API
  };
  

  // Fetch data from the API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://swapi.dev/api/planets/');
      const data = await response.json();
      // Assuming the API returns an array of objects, set the fetched data in the state
      setData(data.results);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };
  

  // Calculate the range of planets to display based on the current page
  const startIndex = (currentPage - 1) * planetsPerPage;
  const endIndex = startIndex + planetsPerPage;

  return (
    <>
      <Header onSearch={setSearchTerm} onResetAll={handleResetAll} />
      <div>
        {loading ? ( // Show loading message while data is being fetched
          <p>Loading...</p>
        ) : featuredPlanet ? (
          // Display detailed information of the featured planet
          <div>
            <h2>{featuredPlanet.name}</h2>
            <p>Climate: {featuredPlanet.climate}</p>
            <p>Population: {featuredPlanet.population}</p>
            <p>Terrain: {featuredPlanet.terrain}</p>
            <p>Gravity: {featuredPlanet.gravity}</p>
            <button onClick={handleGoBack}>Back</button>
            <button onClick={() => handleDeletePlanet(featuredPlanet)}>
              Delete
            </button>
          </div>
        ) : (
          // Display the preview list
          <div>
            <h2>Star Wars Planets</h2>
            {data.length > 0 ? (
              <PreviewList
                items={data.slice(startIndex, endIndex)}
                onItemClick={handleItemClick}
              />
            ) : (
              <p>No data available.</p>
            )}
            <div>
              {/* Show navigation buttons */}
              {currentPage > 1 && (
                <button onClick={handlePrevPage}>Previous</button>
              )}
              {endIndex < data.length && (
                <button onClick={handleNextPage}>Next</button>
              )}
            </div>
          </div>
        )}
      </div>

       {/* Display the form to add a new planet */}
       <div>
          <h2>Add New Planet</h2>
          <form onSubmit={handleAddPlanet}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={newPlanetData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Climate:
              <input
                type="text"
                name="climate"
                value={newPlanetData.climate}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Population:
              <input
                type="text"
                name="population"
                value={newPlanetData.population}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Terrain:
              <input
                type="text"
                name="terrain"
                value={newPlanetData.terrain}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Gravity:
              <input
                type="text"
                name="gravity"
                value={newPlanetData.gravity}
                onChange={handleInputChange}
              />
            </label>
            {/* Add more input fields for other details of the new planet */}
            <button type="submit">Add Planet</button>
          </form>
        </div>
       
    </>
  );
}

export default App;
