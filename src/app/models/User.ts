export class User {
  id: number;
  name: string;
  surname: string;
  email: string;
  emailNotification: boolean;

  constructor() {
    this.id = 0;
    this.name = "";
    this.surname = "";
    this.email = "";
    this.emailNotification = false;
  }
}
