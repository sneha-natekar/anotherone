const axios = require('axios');

const endpoint1 = 'https://api.example.com/endpoint1';
const endpoint2 = 'https://api.example.com/endpoint2';
const endpoint3 = 'https://api.example.com/endpoint3';

async function callEndpoint1() {
  try {
    const response = await axios.get(endpoint1);
    return response.data;
  } catch (error) {
    console.error('Error calling Endpoint 1:', error);
    throw error;
  }
}

async function callEndpoint2() {
  try {
    const response = await axios.get(endpoint2);
    return response.data;
  } catch (error) {
    console.error('Error calling Endpoint 2:', error);
    throw error;
  }
}

async function callEndpoint3() {
  try {
    const response = await axios.get(endpoint3);
    return response.data;
  } catch (error) {
    console.error('Error calling Endpoint 3:', error);
    throw error;
  }
}

module.exports = {
  callEndpoint1,
  callEndpoint2,
  callEndpoint3,
};
