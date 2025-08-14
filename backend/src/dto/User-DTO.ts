export interface Payload{
  id: number;
  email: string;
}

export class UserResponse {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}