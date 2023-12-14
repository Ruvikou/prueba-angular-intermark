import { User } from "./user.model";

export interface UserResponse {
    incomplete_results: boolean,
    total_count: number,
    items: User[]
}