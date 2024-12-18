const axios = require('axios');

// Function to handle HTTP requests
async function handleHttpRequest(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error making HTTP request:', error);
    throw error;
  }
}

// Function to parse and format the responses from the endpoints
function parseAndFormatResponse(response) {
  // Assuming the response is a JSON object
  return JSON.stringify(response, null, 2);
}

module.exports = {
  handleHttpRequest,
  parseAndFormatResponse,
};
