import http from "./http";

export const fetchAllDev = async () => {
  const res = await http.get("/computer-software-development");
  return res.data;
};
