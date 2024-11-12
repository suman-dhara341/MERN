import axios from "axios";

const user = async (token) => {
    if (!token) {
        console.error("Token is missing");
        return;
    }

    try {
        const response = await axios.get('https://mern-tlme.onrender.com/api/user', {
            headers: {
                Authorization: token
            }
        });

        return response.data.userData;  
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

export default user;
