export interface LoginRequest {
    username: string
    password: string
    grant_type: string
    client_id: string
    client_secret: string
}

export interface LoginResponse {
    access_token: string
    token_type: string
    expires_in: number
    scope: string
    full_name: string
    user_id: number
    jti: string
}