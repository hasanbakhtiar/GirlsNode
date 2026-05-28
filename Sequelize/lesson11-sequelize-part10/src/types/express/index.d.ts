declare global {
  namespace Express {
    interface User {
      id: number;
      role: "user" | "admin";
    }
  }
}

export {};
