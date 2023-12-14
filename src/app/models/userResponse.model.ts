import { User } from "./user.model";

// Model to define the response from the api
export interface UserResponse {
    incomplete_results: boolean,
    total_count: number,
    items: User[]
}