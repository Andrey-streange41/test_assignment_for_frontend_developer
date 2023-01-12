export enum PositionType {
  Lawyer="Lawyer",
  "Content manager"="Content manager",
  "Security"="Security",
  "Designer"="Designer",
}

export interface IUser {
  photo:  string;
  phone: string;
  email: string;
  name: string;
  position: PositionType;
  id: number;
  position_id: number;
  registration_timestamp: number;
}
