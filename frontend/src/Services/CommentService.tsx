import axios from "axios"
import { CommentGet, CommentPost } from "../Models/Comment";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:5167/api/comment/"

export const commentPostApi = async (title: string, content: string, symbol: string) => {
    try {
        const data = await axios.post<CommentPost>(api + `${symbol}`, {
            title: title,
            content: content
        });

        return data;
    }
    catch (error) {
        handleError(error);
    }
}

export const commentGetApi = async (symbol: string) => {
    try {
        const data = await axios.get<CommentGet[]>(api + `?Symbol=${symbol}`); 
        return data;
    }
    catch (error) {
        handleError(error);
    }
}