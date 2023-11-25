import axios from 'axios';

const OPENAI_API_BASE_URL = 'https://api.openai.com/v1';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openaiService = axios.create({
  baseURL: OPENAI_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'text/plain',
  },
});

export const fetchOpenAIData = async (prompt) => {
  try {
    const response = await openaiService.post('/completions', {
      model: 'gpt-3.5-turbo-1106',
      prompt: "Find not simplified recipes recipes and put them into JSON format that can be made with the ingredients (don't have to contain all ingredients): " + prompt + ";  with fields: \"name\" - String, \"ingredients\" - array,  \"steps\" - String. Don't put other text, you can post only JSON",
      max_tokens: 100,
    });

    return JSON.parse(response.data.choices[0].text);
  } catch (error) {
    throw error;
  }
};