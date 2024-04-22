export class Course {

  constructor(public _id: number, public _name: string, public _duration:string , public _fees:number) { }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get duration(): string {
    return this._duration;
  }

  set duration(value: string) {
    this._duration = value;
  }

  get fees(): number {
    return this._fees;
  }

  set fees(value: number) {
    this._fees = value;
  }
}
