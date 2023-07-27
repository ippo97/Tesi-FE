export class AuthToken {
  token: string;
  type: string;
  expires_in: number;
  // Altre proprietà del token

  constructor(token: string, type: string, expires_in: number) {
    this.token = token;
    this.type = type;
    this.expires_in = expires_in;
  }
}
