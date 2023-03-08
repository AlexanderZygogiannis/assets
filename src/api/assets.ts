import axios from "axios";
import { IAsset } from "@/interface/IAssets";
import { ITypes } from "@/interface/ITypes";
import { AxiosResponse } from "axios";

export const assets = {
    /**
     * API endpoint to fetch assets list
     */
    fetchList: (): Promise<IAsset> => axios
        .get('https://assignment.prosperty-mgmt.dev/v1/listings')
        .then((response: AxiosResponse<IAsset>) => response.data),

    /**
     * API endpoint to fetch assets list filter by type
     */
    fetchTypeList:(type: string): Promise<IAsset> => axios
        .get(`https://assignment.prosperty-mgmt.dev/v1/listings?filter[type_id]=${type}`)
        .then((response: AxiosResponse<IAsset>) => response.data),

    /**
     * API endpoint to fetch assets list filter by amenities
     */
    fetchAnemitiesList:(amenities: string): Promise<IAsset> => axios
        .get(`https://assignment.prosperty-mgmt.dev/v1/listings?filter[amenities]=${amenities}`)
        .then((response: AxiosResponse<IAsset>) => response.data),

    /**
     * API endpoint to fetch asset item
     */
    asset:(id: string): Promise<IAsset> => axios
        .get(`https://assignment.prosperty-mgmt.dev/v1/listings/${id}`)
        .then((response) => response.data),

    /**
     * API endpoint to update amenities
     */
    updateAsset:(id: string): Promise<IAsset> => axios
        .put(`https://assignment.prosperty-mgmt.dev/v1/listings/${id}`)
        .then((response) => response.data),

    /**
     * API endpoint to fetch list of amenities
     */
    anemities:() => axios
        .get('https://assignment.prosperty-mgmt.dev/v1/amenities')
        .then((response) => response.data),
    
    /**
     * API endpoint to fetch list of type amenities
     */
    types:(): Promise<ITypes> => axios
        .get('https://assignment.prosperty-mgmt.dev/v1/types')
        .then((response: AxiosResponse<ITypes>) => response.data),
}