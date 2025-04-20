const img = document.querySelector('img');

function fetchDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Check if the API returned a successful status
      if (data.status !== 'success') {
        throw new Error('API did not return a success status.');
      }
      img.src = data.message; // The image URL is in the 'message' property
      img.alt = "Random dog image"; // Update alt text
    })
    .catch(error => {
      console.error('Error fetching dog image:', error);
      // Optionally, display an error message to the user or a placeholder image
      img.alt = "Could not load dog image";
      // img.src = 'path/to/placeholder.jpg'; // Example placeholder
    });
}

// Fetch an image when the page loads
fetchDogImage(); 