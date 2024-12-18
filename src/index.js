const { callEndpoint1, callEndpoint2, callEndpoint3 } = require('./endpoints');
const { handleHttpRequest, parseAndFormatResponse } = require('./utils');

async function main() {
  try {
    const response1 = await callEndpoint1();
    const formattedResponse1 = parseAndFormatResponse(response1);
    console.log('Response from Endpoint 1:', formattedResponse1);

    const response2 = await callEndpoint2();
    const formattedResponse2 = parseAndFormatResponse(response2);
    console.log('Response from Endpoint 2:', formattedResponse2);

    const response3 = await callEndpoint3();
    const formattedResponse3 = parseAndFormatResponse(response3);
    console.log('Response from Endpoint 3:', formattedResponse3);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
