const { callEndpoint1, callEndpoint2, callEndpoint3 } = require('./endpoints');
const { handleHttpRequest, parseAndFormatResponse } = require('./utils');

// Main function to call the 3 random endpoints and handle their responses
async function main() {
  try {
    // Call Endpoint 1 and handle the response
    const response1 = await callEndpoint1();
    const formattedResponse1 = parseAndFormatResponse(response1);
    console.log('Response from Endpoint 1:', formattedResponse1);

    // Call Endpoint 2 and handle the response
    const response2 = await callEndpoint2();
    const formattedResponse2 = parseAndFormatResponse(response2);
    console.log('Response from Endpoint 2:', formattedResponse2);

    // Call Endpoint 3 and handle the response
    const response3 = await callEndpoint3();
    const formattedResponse3 = parseAndFormatResponse(response3);
    console.log('Response from Endpoint 3:', formattedResponse3);
  } catch (error) {
    // Handle any errors that occur during the API calls
    console.error('Error:', error);
  }
}

// Execute the main function
main();
