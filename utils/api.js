const axios = require('axios');

const api = {
    async getUser(Response) {
        try {
            let otherResponse = await axios
                .get(`https://api.github.com/users/${Response.username}`);
            return otherResponse.data;

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = api;