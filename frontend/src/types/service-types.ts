import type { AxiosResponse } from "axios"

export type ServiceFunction<Response, Params = undefined> = (
    params?: Params
  ) => Promise<AxiosResponse<Response>>
  
  export interface ErrorResponse {
    code: string
    message: string
    status: string
  }