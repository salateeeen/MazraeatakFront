import { fetchFor } from "./fetch";

export const fetchFacilities= function () {
    return fetchFor(`http://localhost:3000/api/v1/facilities/facilities`, false);
}