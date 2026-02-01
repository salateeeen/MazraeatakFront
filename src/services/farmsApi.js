import { fetchFor, getAuthHeaders, getNotAuthHeaders } from "./fetch";

export const fetchFarmById = function (id) {
    return function () {
        return fetchFor(`http://localhost:3000/api/v1/farms/farm/${id}`, false)
    }
};

export const fetchFarms = function (filters="") {
    return async function () {
        return fetchFor(`http://localhost:3000/api/v1/farms/farms?${filters}`);
    }
};

export const fetchMyFarms = function () {
    return fetchFor(`http://localhost:3000/api/v1/farms/myFarms`);
};

export const createFarm = async function (farm) {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/farms/addFarm`, {
            method: `POST`,
            headers: getAuthHeaders(),
            body: JSON.stringify(farm)
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || "Unknown error");
        }

        return await res.json();

    } catch (err) {
        throw new Error(err);
    }
};

export const deleteFarm = async (farmId) => {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/farms/deleteFarm/${farmId}`, {
            method: `DELETE`,
            headers: getAuthHeaders(),
        });
        if (!res.ok) throw new Error(`Failed to delete farm`);
        return await res.json();

    } catch (err) {
        throw new Error(err);
    };
};
