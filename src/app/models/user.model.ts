// Model to define User details
export interface User {
    login: string,
    id: number,
    avatar_url: string,
    url: string,
    repos_url: string,
    followers: number,
    following: number
}