import axios from "axios";
import { PortfolioGet, PortfolioPost } from "../Models/Portfolio";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:5167/api/portfolio/"

export const PortfolioAddApi = async (symbol: string) => {
    try {
        const data = await axios.post<PortfolioPost>(api + `?Symbol=${symbol}`);
        return data;
    } 
    catch (error) {
        handleError(error);
    }
};

export const PortfolioDeleteApi = async (symbol: string) => {
    try {
        const data = await axios.delete<PortfolioPost>(api + `?Symbol=${symbol}`);
        return data;
    } 
    catch (error) {
        handleError(error);
    }
};

export const PortfolioGetApi = async () => {
    try {
        const data = await axios.get<PortfolioGet[]>(api);
        return data;
    } 
    catch (error) {
        handleError(error);
    }
};