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

async function getAnswers(qId: string) {
  try {
    const res: AxiosResponse = await axios.get(
      `${BASE_URL}/questions/${qId}/answers`,
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

async function loginUser(credentials: { email: string; password: string }) {
  try {
    const res: AxiosResponse = await axios.post(
      `${BASE_URL}/user/login`,
      credentials,
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

async function registerUser(credentials: { email: string; password: string }) {
  try {
    const res: AxiosResponse = await axios.post(
      `${BASE_URL}/user/register`,
      credentials,
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export { getQuestions, getAnswers, loginUser, registerUser };
