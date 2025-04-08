import axios from "axios";

// const baseURL = 'https://sandbox.api.service.nhs.uk/nhs-website-content/medicines/';
// const baseURL = 'https://sandbox.api.service.nhs.uk/nhs-website-content/medicines/zopiclone/';
const baseURL = 'https://sandbox.api.service.nhs.uk/hello-world';

const apiKey = 'O4LCacTlgyZncNJuQttvrQEkhe3lwpse';

// axios.get(`${baseURL}`, {
//   headers: {
//     apikey: apiKey
//   }
// })
// .then(response => console.log(response.data))
// .catch(error => console.error('Error:', error));

export const getGeneralContent = async () => {
    try {
      // const response = await axios.get(`${baseURL}/medications`);
      const response = await axios.get(`${baseURL}`,
       {
        headers: {
          apikey: apiKey
        }
      }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching general content:", error);
      throw error;
    }
};

export  const searchContent = async (searchTerm: string, category: string) => {
    try {
      const response = await axios.get(`${baseURL}/search?term=${searchTerm}&category=${category}`);
      return response.data;
    } catch (error) {
      console.error("Error searching content:", error);
      throw error;
    }
};