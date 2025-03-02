/// <reference types="vite/client" />
declare interface User {
  userId: number,
  name: string,
  email: string,
  photoUrl?: string,
}

declare interface Product {
  productId:number,
  name:string,
  description:string,
  quantity:1,
  photoUrl?:string,
  owner: User
}