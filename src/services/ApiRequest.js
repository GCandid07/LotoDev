import axios from "axios";

const TOKEN = 'vSJlVBhbtF5CTgc'

const BASE_URL = async(CHOICE) => {
  return `https://apiloterias.com.br/app/resultado?loteria=${CHOICE}&token=${TOKEN}`;
};

export const GET = async(choice) => {
  try {
    const {data} = await axios.get(await BASE_URL(choice));

    return data
  } catch (error) {
    const { message } = error.response.data;
    alert(message);
  };
};
