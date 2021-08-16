const axios = require('axios');
const url = 'https://api.peopledatalabs.com/v5/person/enrich?';
const apiKey = '2d3ed476c9587fd18aa243ba014da6c5476d98591e074e6bc38c2336f0a6cba4';
const getPerson = async (profile) => {
	console.log('person profile', profile);
	try {
		const res = await axios.get(`${url}api_key=${apiKey}&profile=${profile}`);
		const person = await res.data;
		return person;
	}
	catch (err) {
		console.log(err);
	}
}

module.exports = {
	person: getPerson
}