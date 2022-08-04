import { Authority } from "../authority/authority";

export interface Category {
  categoryId: number,
  name: string,
  descripcion: string,
  created: Date,
  enabled: boolean,
  archived: boolean,

  activityId: number,
  authorities: Authority[]

}
