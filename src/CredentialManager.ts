export interface Credentials {
    APP_CLIENT_ID: string,
    APP_CLIENT_SECRET: string,
    AWS_ACCESS_KEY_ID: string,
    AWS_SECRET_ACCESS_KEY: string,
    AWS_SELLING_PARTNER_ROLE?: string,
    AWS_SESSION_TOKEN?: string
}

export class CredentialManager {
    private authenticate () {

    }
    
    constructor (credentials: Credentials) {

    }
}