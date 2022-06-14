import axios from "../axios/links";

export const fetchAllCompetitions = async () => {
  try {
    const url = "/competitions";
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// export const getBookShelf = async () => {
//   try {
//     const url = "/bookshelf";
//     const res = await axios.get(url);
//     return res;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getAgentType = async () => {
//   try {
//     const url = "/agent_type";
//     const res = await axios.get(url);
//     return res;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getPerson = async () => {
//   try {
//     const url = "/person";
//     const res = await axios.get(url);
//     return res;
//   } catch (error) {
//     throw error;
//   }
// };
