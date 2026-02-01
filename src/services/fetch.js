export function getAuthHeaders() {
    const token = localStorage.getItem("token");

    return {
        ...(token && { Authorization: `Bearer ${token}` }),
        "Content-Type": "application/json",
    };
}

export function getNotAuthHeaders() {
    return {
        "Content-Type": "application/json",
    };
}

export const fetchFor = async function (url, auth = true) {
    try {
        const res = await fetch(url, {
            headers: auth ? getAuthHeaders() : getNotAuthHeaders(),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message);
        }
        
        return data

    } catch (err) {
        throw err;
    }
}