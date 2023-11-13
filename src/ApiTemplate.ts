import { AxiosInstance } from "axios";

export abstract class ApiTemplate {
    private axiosInstance: AxiosInstance

    constructor (axiosInstance: AxiosInstance){
        this.axiosInstance = axiosInstance
    }
}