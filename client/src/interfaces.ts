import { ReactNode } from "react";
// SERVER INTERFACES

// generic server response
interface IServerResponse {
  status: number
  data: any
  message: string
}

// "data" of .get("/items/:id", getOneItem)
interface IServerGetOneItemData {
  _id: number
  name: string
  price: string
  body_location: string
  category: string
  imageSrc: string
  numInStock: number
  companyId: number
}

// response of .get("/items/:id", getOneItem)
interface IServerGetOneItemResponse extends IServerResponse {
  data: IServerGetOneItemData
}

// response of .get("/items", getAllItems)
interface IServerGetAllItemsResponse extends IServerResponse {
  data: IServerGetOneItemData[]
}

//special cart object containing only the information needed to send to server, for the PUT request to /items/buy
interface ICartObjForServer {
  itemId: number
  quantity: number //TODO
}

// body content of request to .put("/items/buy", buyItems)
interface IServerBuyItemsRequest {
  _id: string
  cart: ICartObjForServer[]
}

// response of .put("/items/buy", buyItems)
interface IServerBuyItemsResponse extends IServerResponse {
  data: IServerBuyItemsRequest
}

// "data" of .get("/companies/:id", getOneCompany)
interface IServerGetOneCompanyData {
  _id: number
  name: string
  url: string
  country: string
}

// response of .get("/companies/:id", getOneCompany)
interface IServerGetOneCompanyResponse extends IServerResponse {
  data: IServerGetOneCompanyData
}

// response of .get("/companies", getAllCompanies)
interface IServerGetAllCompaniesResponse extends IServerResponse {
  data: IServerGetOneCompanyData[]
}

// response of .get("/body-locations", getAllItemBodyLocations) or .get("/categories", getAllItemCategories)
interface IServerBodyLocationsOrCategoriesResponse extends IServerResponse {
  data: string[]
}

//CLIENT INTERFACES

interface ISingleProduct {
  productName: string
  productId: number
  price: string
  img: string
  companyName: string
}

interface IProduct extends ISingleProduct {
  body_location: string;
  category: string;
  numInStock: number;
  companyId: number;
}

interface ICartItem extends IServerGetOneItemData {
  quantity: number; // quantity that is in cart
}

interface IProductDetails extends IServerGetOneItemData {
  companyName: string;
  companyUrl: string;
}

interface IProviderProps {
  children?: ReactNode
}

export type {
  ICartObjForServer,
  IServerResponse,
  IServerGetOneItemData,
  IServerGetOneItemResponse,
  IServerGetAllItemsResponse,
  IServerBuyItemsRequest,
  IServerBuyItemsResponse,
  IServerGetOneCompanyData,
  IServerGetOneCompanyResponse,
  IServerGetAllCompaniesResponse,
  IServerBodyLocationsOrCategoriesResponse,

  ISingleProduct,
  IProduct,
  ICartItem,
  IProductDetails,

  IProviderProps
}