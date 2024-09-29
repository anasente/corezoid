// build command npm i axios

const axios = require('axios');

module.exports = async (data) => {

    var request, response;

    try {

        request = {
            method: 'get',
            url: 'https://blockchain.info/ticke'
        };

        response = await axios(request);

    } catch (error) {
        response = error.response || {
            error: 'Request failed'
        };
    }

    return {
        "request": request,
        "response": response.data
    };
};
