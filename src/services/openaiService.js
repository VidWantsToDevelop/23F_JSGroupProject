import axios from 'axios';

const REACT_APP_OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const client = axios.create({
  headers: {
    Authorization: "Bearer " + REACT_APP_OPENAI_API_KEY
  },
});

export const fetchOpenAIData = async (ingredients) => {

  const prompt = `Find one recipes (under 75 words each) and put them together into one JSON file without the array, that can be made with the ingredients (don't have to contain all ingredients): ${ingredients};\n
  USE THIS JSON FORMAT:\n

  {
      "recipe1": {
          "name": "",
          "ingredients": ["", "", "", ""],
          "steps": ""
      },
      "recipe2": {
          "name": "",
          "ingredients": ["", "", "", ""],
          "steps": ""
      }
  }
  \n
  DON'T PUT ANY TEXT, USE ONLY JSON RESPONCE.`;

  try {
    const result = await client.post('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 1000,
    });
    console.log(result.data.choices[0].text)
    return JSON.parse(result.data.choices[0].text);
  } catch (err) {
    console.log(err);
    throw err; // Re-throw the error to be caught in the calling function
  }
}
