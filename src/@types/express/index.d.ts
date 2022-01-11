//Sobrescrecer o Request para adicionar o user
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
