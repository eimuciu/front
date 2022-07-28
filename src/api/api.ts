import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:3001';

async function getQuestions() {
  try {
    const res: AxiosResponse = await axios.get(`${BASE_URL}/questions`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export { getQuestions };
