import { fetchFor, getAuthHeaders } from "./fetch";


export const fetchBookings = function () {
    return fetchFor(`http://localhost:3000/api/v1/bookings/userBookings/`);
}

export const createBooking = function (farmId) {
    return async function (bookingData) {
        try {
            const res = await fetch(`http://localhost:3000/api/v1/bookings/createBooking/${farmId}`, {
                method: `POST`,
                headers: getAuthHeaders(),
                body: JSON.stringify(bookingData)
            });

            if (!res.ok) {
                const errorData = await res.json();
                console.log(errorData.message);
                throw new Error(errorData.message || "Unknown error");
            }

            return await res.json();

        } catch (err) {
            throw err
        }
    }
}

