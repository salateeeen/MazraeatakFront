import { fetchFor, getAuthHeaders } from "./fetch";

export const fetchMe = function () {
    return fetchFor(`http://localhost:3000/api/v1/users/user`);
}

export const fetchFavorites = function () {
    return fetchFor(`http://localhost:3000/api/v1/users/favorites`);
}

export const fetchFavoritesFarms = function () {
    return fetchFor(`http://localhost:3000/api/v1/users/favoritesFarms`);
};

export const addToFavorites = async (farmId) => {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/users/favorites/${farmId}`,
            {
                method: "POST",
                headers: getAuthHeaders(),
            }
        );
        if (!res.ok) throw new Error(`Failed to add favorite`);
        return await res.json();

    } catch (err) {
        console.log(err);
    };
};