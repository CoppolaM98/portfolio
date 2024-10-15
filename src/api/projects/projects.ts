import { axiosInstance, AxiosWrappedApiCall } from "api/axios";
import { ProjectData } from "models/ProjectData";

export const getProjectsList: AxiosWrappedApiCall<ProjectData[]> = (config) => {
  return axiosInstance.get(`/mockApi/projects/projects.json`, config).then((response) => response.data);
}

export const getProjectById: AxiosWrappedApiCall<ProjectData, [id: string]> = (id, config) => {
  //return axiosInstance.get(`/mockApi/projects/${id}`).then((response) => response.data);
  // the following code simulates a BE call
  return axiosInstance.get(`/mockApi/projects/projects.json`, config).then((response) => {
    const project = (response.data as ProjectData[]).find(d => d.id === id);
    if (project) return (project)
    return Promise.reject("no project")
  });
}