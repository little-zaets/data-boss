const axios = require('axios').default;
const url = 'https://api.peopledatalabs.com/v5/company/enrich?';
const apiKey = 'c207248bab65b81c1e0d233d26cb6dc62c4abc3489aaa8f4ddf51db0207be5f5';
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