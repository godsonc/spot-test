import http from "./links";

export const fetchAllCompetitions = async () => {
  const res = await http.get("/competitions/");
  return res.competitions;
};
