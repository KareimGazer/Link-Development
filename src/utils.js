import axios from "axios";

// get data from json-server

const getNews = async () => {
    const response = await axios.get("http://localhost:3000/News");
    return response.data;
}

const getNewsCategories = async () => {
    const response = await axios.get("http://localhost:3000/newsCategory");
    return response.data;
}

const getSlides = async () => {
    const response = await axios.get("http://localhost:3000/slides");
    return response.data;
}

const getThingsWeDo = async () => {
    const response = await axios.get("http://localhost:3000/thingsWeDo");
    return response.data;
}

export { getNews, getNewsCategories, getSlides, getThingsWeDo };
