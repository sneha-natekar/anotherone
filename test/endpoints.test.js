const { callEndpoint1, callEndpoint2, callEndpoint3 } = require('../src/endpoints');
const axios = require('axios');

jest.mock('axios');

describe('Endpoints', () => {
  describe('callEndpoint1', () => {
    it('should return data from endpoint 1', async () => {
      const mockData = { data: 'response from endpoint 1' };
      axios.get.mockResolvedValue(mockData);

      const result = await callEndpoint1();
      expect(result).toEqual(mockData.data);
    });

    it('should throw an error if endpoint 1 fails', async () => {
      const mockError = new Error('Endpoint 1 error');
      axios.get.mockRejectedValue(mockError);

      await expect(callEndpoint1()).rejects.toThrow('Endpoint 1 error');
    });
  });

  describe('callEndpoint2', () => {
    it('should return data from endpoint 2', async () => {
      const mockData = { data: 'response from endpoint 2' };
      axios.get.mockResolvedValue(mockData);

      const result = await callEndpoint2();
      expect(result).toEqual(mockData.data);
    });

    it('should throw an error if endpoint 2 fails', async () => {
      const mockError = new Error('Endpoint 2 error');
      axios.get.mockRejectedValue(mockError);

      await expect(callEndpoint2()).rejects.toThrow('Endpoint 2 error');
    });
  });

  describe('callEndpoint3', () => {
    it('should return data from endpoint 3', async () => {
      const mockData = { data: 'response from endpoint 3' };
      axios.get.mockResolvedValue(mockData);

      const result = await callEndpoint3();
      expect(result).toEqual(mockData.data);
    });

    it('should throw an error if endpoint 3 fails', async () => {
      const mockError = new Error('Endpoint 3 error');
      axios.get.mockRejectedValue(mockError);

      await expect(callEndpoint3()).rejects.toThrow('Endpoint 3 error');
    });
  });
});
