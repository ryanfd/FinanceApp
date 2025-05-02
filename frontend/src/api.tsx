import axios from "axios";
import { CompanyBalanceSheet, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async(query: string) : Promise<Axios.AxiosXHR<SearchResponse> | string> => {
    let data = await axios.get<SearchResponse>(
        `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
    )
    .catch(function (error) {
        let errorResult : string;

        if (error.response) {
            // server responded with a status code that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            errorResult = "An error has occured.";
        }
        else if (error.request) {
            // no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser 
            // and an instance of http.ClientRequest in node.js
            console.log(error.request);
            errorResult = "An error has occured.";
        }
        else {
            console.log("unexpected error:", error);
            errorResult = "An unexpected error has occured.";
        }

        return errorResult;
    });

    return data;
}

export const getCompanyProfile = async(query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        );

        return data;
    }
    catch (error: any) {
        console.log("error message from API: ", error.message);
    }
}

export const getKeyMetrics = async(query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
        );

        return data;
    }
    catch (error: any) {
        console.log("error message: ", error.message);
    }
}

export const getIncomeStatement = async(query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
        );

        return data;
    }
    catch (error: any) {
        console.log("error message: ", error.message);
    }
}

export const getBalanceSheet = async(query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
        );

        return data;
    }
    catch (error: any) {
        console.log("error message: ", error.message);
    }
}