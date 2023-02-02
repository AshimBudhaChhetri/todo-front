import axios from "axios";

async function getUrlOnBackend (url, params = {}, token) {
    const req = {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: token? `Bearer ${token}` : "",
        },
        url,
        params,
    };

    try {
        const response = awit axios (req);
        return response.data;
    } catch (err) {}

}

async function postDataToBackend (url, data, token) {
    const req = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
        },
        url,
        date,
    }
    console.log(url, data);
    try{
        const response = await axios (req);
        console.log(response);
        return response;
    }   catch (err) {
        console.log(err);
    }
}

async function deleteDataToBackend(url, token) {
    const req = {
        method: "Delete",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: token? `Bearer ${token} ` : "",
        },
        url,
    };
    try {
        const response = await axios (req);
     } catch(err) {
            console.log(err);
        }
    }

    async function putUrlOnBackend(url, data, token) {
        const req = {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: token? `Bearer ${token}`: " ",
            },
            url,
            data,
        };
        console.log(url, data);
        try{
            const response = await axios (req);
            console.log(response);
            return response;
        } catch  (err) {
            console.log(err);
        }
    }

export {
    putUrlOnBackend,
    deleteDataToBackend,
    postDataToBackend,
    getUrlOnBackend,
};











}