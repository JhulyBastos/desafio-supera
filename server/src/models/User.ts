export interface User {
  id?: string;
  name: string;
  email: string;
  profile: "admin" | "user";
  age: number;
}
