export class User {
  private _fireId: string;
  private _lastName: string;
  private _firstName: string;
  private _birthDay: string;

  constructor(
    fireId: string,
    lastName: string,
    firstName: string,
    birthDay: string
  ) {
    this._fireId = fireId;
    this._lastName = lastName;
    this._firstName = firstName;
    this._birthDay = birthDay;
  }

  get fireId(): string {
    return this.fireId;
  }

  get lastName(): string {
    return this.lastName;
  }

  get firstName(): string {
    return this.firstName;
  }

  get birthDay(): string {
    return this.birthDay;
  }
}
