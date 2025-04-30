import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async(ticker: string) => {
    const data = await axios.get<SearchResponse>(
        `https://financialmodelingprep.com/api/v3/search?query=${ticker}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
    )
    .catch(function (error) {
        if (error.response) {
            // server responded with a status code that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        else if (error.request) {
            // no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser 
            // and an instance of http.ClientRequest in node.js
            console.log(error.request);
        }
        else {
            console.log("unexpected error:", error);
            return "An unexpected error has occured."
        }
    });

    return data;
}