export interface UserAttributes {
  id: number;
  fullname: string;
  password: string;
  email: string;
  phone: string | null;
  role: "user" | "admin";
  refreshToken: string | null;
}