export interface User {
  id:number;
  name:string;
  email:string;
  password:string;
  active:boolean;
  confirmed_at:Date;
}