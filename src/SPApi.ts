import axios, { AxiosInstance } from "axios";
import { CredentialManager, Credentials } from "./CredentialManager";

export interface ApiConfig {
    timeout: number,
    sandbox: boolean
}

export class SPApi {
    private manager: CredentialManager
    private apiConn: AxiosInstance

    private buildAxios (config: ApiConfig): AxiosInstance{
        return axios.create()
    }

    constructor (credentials: Credentials, config: ApiConfig) {
        this.manager = new CredentialManager(credentials)
        this.apiConn = this.buildAxios(config)
    }
}