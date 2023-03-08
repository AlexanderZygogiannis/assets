import { ITypes } from "./ITypes";

export interface IAsset {
   uuid: string ;
   amenities: string[];
   bathrooms: number;
   bedrooms: number;
   description: string;
   floor: number;
   latitude: string;
   longitude: string;
   postal_code: string;
   price: string;
   size: number;
   street: string;
   street_number: string;
   title: string;
   type: ITypes;
   available_from: string;
   created_at: string;
   updated_at: string;
}