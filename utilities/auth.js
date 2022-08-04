const axios = require("axios").default;

/////
//
// ADD THE API KEY 
//
///

const API_KEY = "";

const authentificate = async (mode ,email, password) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
    const response = await axios.post( url, {
        email : email,
        password : password,
        returnSecureToken : true
    });
    return response.data.idToken;
};

export const createUser = async (email, password) => {
    return await authentificate("signUp", email, password);
};

export const loginUser = async (email, password) => {
    return await authentificate("signInWithPassword", email, password);
};

