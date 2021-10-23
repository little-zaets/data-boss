const axios = require('axios').default;
const url = process.env.PEOPLE_API_URL;
const apiKey = process.env.API_KEY;
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