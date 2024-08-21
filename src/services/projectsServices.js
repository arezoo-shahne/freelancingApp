import http from "./httpService";

export const getOwnerProjectsApi = () => {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
};

export const removeOwnerProjectApi = (id) => {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
};

export const createOwnerProjectApi = (data) => {
  return http.post("/project/add", data).then(({ data }) => data.data);
};

export const editOwnerProjectApi = ({ id, newProject }) => {
  return http
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
};
