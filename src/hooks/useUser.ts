import { useQuery } from "@tanstack/react-query";
import type { IUser } from "../types/Iuser";
interface IResponseApi {
  users: IUser[];
  isLoading: boolean;
  error: string;
  isError: boolean;
}
export const useUser = () => {
  const response = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data: IResponseApi = await res.json();
    return data.users;
  };
  const { data, isLoading, error, isError } = useQuery({ queryKey: ["users"], queryFn: response });
  return { data, isLoading, error, isError };
};
