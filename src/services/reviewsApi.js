import { fetchFor, getAuthHeaders } from "./fetch";

export const fetchReviews = function (farmId) {
    return fetchFor(`http://localhost:3000/api/v1/reviews/reviews/${farmId}`, false);
};

export const createReview = function (farmId) {
    return async function (data) {
        try {
            const res = await fetch(`http://localhost:3000/api/v1/reviews/addReview/${farmId}`, {
                method: `POST`,
                headers: getAuthHeaders(),
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Bad Request");
            };
            return await res.json();

        } catch (err) {
            console.log(err);
        }
    }
}