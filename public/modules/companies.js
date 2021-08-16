const axios = require('axios');
const url = 'https://api.peopledatalabs.com/v5/company/enrich?';
const apiKey = '2d3ed476c9587fd18aa243ba014da6c5476d98591e074e6bc38c2336f0a6cba4';
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