import axios from 'axios';

const REACT_APP_OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const client = axios.create({
  headers: {
    Authorization: "Bearer " + REACT_APP_OPENAI_API_KEY
  },
});

export const fetchOpenAIData = async (message) => {
  try {
    const result = await client.post('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003',
      prompt: message,
      max_tokens: 1000,
    });

    return JSON.parse(result.data.choices[0].text);
  } catch (err) {
    console.log(err);
    throw err; // Re-throw the error to be caught in the calling function
  }
}
