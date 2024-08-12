import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/authServices";

export default function useUser(){
    return useQuery({
        queryKey:["get-user"],
        queryFn:getUsers,
        retry:false,
        refetchOnReconnect:true,
    })
}