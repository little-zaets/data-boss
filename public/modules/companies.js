const axios = require('axios').default;
const url = process.env.COMPANY_API_URL;
const apiKey = process.env.API_KEY;
const getCompanies = async (profile) => {
	console.log('companies profile', profile);
	try {
		const res = await axios.get(`${url}api_key=${apiKey}&profile=${profile}`);
		const companies = await res.data;
		return companies;
	}
	catch (err) {
		console.log(err);
	}
}

module.exports = {
	companies: getCompanies
}