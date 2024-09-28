export interface User {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  profile: "admin" | "user";
  age?: number;
}
