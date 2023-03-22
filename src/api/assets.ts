import axios from "axios";
import { IHouse } from "@/interface/IHouse";
import { ITypes } from "@/interface/ITypes";
import { AxiosResponse } from "axios";

export const assets = {
  /**
   * API endpoint to fetch assets list
   */
  fetchList: (): Promise<IHouse> =>
    axios
      .get("https://assignment.prosperty-mgmt.dev/v1/listings")
      .then((response: AxiosResponse<IHouse>) => response.data),

  /**
   * API endpoint to fetch assets list filter by type
   */
  fetchTypeList: (type: string): Promise<IHouse> =>
    axios
      .get(
        `https://assignment.prosperty-mgmt.dev/v1/listings?filter[type_id]=${type}`
      )
      .then((response: AxiosResponse<IHouse>) => response.data),

  /**
   * API endpoint to fetch assets list filter by amenities
   */
  fetchAnemitiesList: (amenities: string): Promise<IHouse> =>
    axios
      .get(
        `https://assignment.prosperty-mgmt.dev/v1/listings?filter[amenities]=${amenities}`
      )
      .then((response: AxiosResponse<IHouse>) => response.data),

  /**
   * API endpoint to fetch asset item
   */
  asset: (id: string): Promise<IHouse> =>
    axios
      .get(`https://assignment.prosperty-mgmt.dev/v1/listings/${id}`)
      .then((response) => response.data),

  /**
   * API endpoint to fetch list of amenities
   */
  anemities: () =>
    axios
      .get("https://assignment.prosperty-mgmt.dev/v1/amenities")
      .then((response) => response.data),

  /**
   * API endpoint to fetch list of type amenities
   */
  types: (): Promise<ITypes> =>
    axios
      .get("https://assignment.prosperty-mgmt.dev/v1/types")
      .then((response: AxiosResponse<ITypes>) => response.data),
};
