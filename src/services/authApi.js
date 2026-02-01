import { getNotAuthHeaders } from "./fetch"

export const login = async (userInfo) => {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/users/login`,
            {
                method: "POST",
                headers: getNotAuthHeaders(),
                body: JSON.stringify(userInfo)
            }
        );
        const token = await res.json();

        if (!res.ok) {
            throw new Error(token.message || "Login failed");
        }

        return token;

    } catch (err) {
        throw err;
    };
};

export const signup = async (userInfo) => {
    try {
        const res = await fetch(`http://localhost:3000/api/v1/users/signup`,
            {
                method: "POST",
                headers: getNotAuthHeaders(),
                body: JSON.stringify(userInfo)
            }
        );

        const token = await res.json();

        if (!res.ok) {
            throw new Error(token.message);
        }

        return token;

    } catch (err) {
        throw err;
    };
};