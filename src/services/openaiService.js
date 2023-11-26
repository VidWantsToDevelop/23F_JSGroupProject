import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const OPENAI_API_BASE_URL = 'https://api.openai.com/v1';
const REACT_APP_OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const openaiService = axios.create({
  baseURL: OPENAI_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${REACT_APP_OPENAI_API_KEY}`,
    'Content-Type': 'text/plain',
  },
});

export const fetchOpenAIData = async (prompt) => {
  try {
    const response = await openaiService.post('/completions', {
      model: 'text-davinci-003',
      prompt: "Find not simplified recipes recipes and put them into JSON format that can be made with the ingredients (don't have to contain all ingredients): " + prompt + ";  with fields: \"name\" - String, \"ingredients\" - array,  \"steps\" - String. Don't put other text, you can post only JSON",
      max_tokens: 100,
    });
    console.log(response.data.choices[0].text);
    return JSON.parse(response.data.choices[0].text);
  } catch (error) {
    throw error;
  }
};