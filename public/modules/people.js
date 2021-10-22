const axios = require('axios').default;
const url = 'https://api.peopledatalabs.com/v5/person/enrich?';
const apiKey = '94fda0b41527114f758375b3b2b19bc873e187f549cacf42a4335237fb88a26e';
const getPerson = async (profile) => {
	console.log('person profile', profile);
	try {
		const res = await axios.get(`${url}api_key=${apiKey}&profile=${profile}`, );
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