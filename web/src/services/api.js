import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const createSession = async (email, password) => {
  return api.post("/sessions", { email, password });
};

export const getRepositories = async (userId, query) => {
  let url = `/users/${userId}/repositories/`;

  if (query !== "") {
    url += `?q=${query}`;
  }
  return api.get(url);
};

export const createRepository = async ( novoProjeto, userId ) => {
  const url = `/users/${userId}/repositories`;

  return api
    .post(url, novoProjeto)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const destroyRepository = async (userId, id) => {
  const url = `/users/${userId}/repositories/${id}`;

  return api.delete(url);
};
