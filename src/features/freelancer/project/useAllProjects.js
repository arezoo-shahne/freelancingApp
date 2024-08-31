import { useQuery } from "@tanstack/react-query";
import { getAllProjectsApi } from "../../../services/projectsServices";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useAllProjects() {
  const { search } = useLocation();
  console.log(search);
  const queryObject = queryString.parse(search);
  const { data, isLoading } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getAllProjectsApi(search),
  });
  const { projects } = data || {};
  return { isLoading, projects };
}
