import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";

const api = "http://localhost:5167/api/";

export const loginApi = async (userName: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "account/login", {
            userName: userName,
            password: password
        });

        return data;
    }   
    catch (error) {
        handleError(error);
    }
};

export const registerApi = async (userName: string, email: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "account/register", {
            userName: userName,
            email: email,
            password: password
        });

        return data;
    }   
    catch (error) {
        handleError(error);
    }
};