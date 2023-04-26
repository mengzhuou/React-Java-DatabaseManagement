import tough from 'tough-cookie';
import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';

const jar = new tough.CookieJar();
const client = wrapper(axios.create({ jar }));

const host = 'http://localhost:8080';
const apiPath = '/api/v1';

// Define functions for making API requests

export async function getAirlineAll() {
  const response = await client.get(`${host}${apiPath}/getAirlineAll`, {
    withCredentials: true,
  });
  return response.data;
}

export async function addAirplane(airplane) {
  try {
    const response = await client.post(`${host}${apiPath}/addAirplane`, airplane, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add airplane');
  }
}


export async function addAirport(airport) {
  try {
    const response = await client.post(`${host}${apiPath}/addAirport`, airport, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add airport');
  }
}