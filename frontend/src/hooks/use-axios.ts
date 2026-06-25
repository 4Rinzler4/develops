import { useCallback, useState } from "react";
import { AxiosError } from "axios";
import type { ErrorResponse, ServiceFunction } from "../types/service-types";

export interface UseAxiosProps<Response, Params = undefined> {
  service: ServiceFunction<Response, Params>;
  defaultResponse: Response;
  fetchOnMount?: boolean;
  transform?: (params: Response) => Response;
  onResponse?: (responseData: Response) => void;
  onResponseError?: (error: ErrorResponse) => void;
}

interface UseAxiosReturn<Response, Params> {
  response: Response;
  error: ErrorResponse | null;
  loading: boolean;
  fetchData: (params?: Params) => Promise<void>;
}

const useAxios = <Response, Params = undefined>({
  service,
  defaultResponse,
  onResponse,
}: UseAxiosProps<Response, Params>): UseAxiosReturn<Response, Params> => {
  const [response, setResponse] = useState<Response>(defaultResponse);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async (params?: Params) => {
    try {
      setLoading(true);
  
      const res = await service(params);
      const responseData = res.data;
  
      setResponse(responseData);
      setError(null);
  
      onResponse?.(responseData);
    } catch (e) {
      const error = e as AxiosError<ErrorResponse>;
  
      if (error.response) {
        setError(error.response.data);
      }
    } finally {
      setLoading(false);
    }
  }, [service, onResponse]);

  return { response, error, loading, fetchData };
};

export default useAxios;
