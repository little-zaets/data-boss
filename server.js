const exp = require('express');
const cors = require('cors');
const companies = require('./public/modules/companies.js');
const person = require('./public/modules/people.js')
const app = exp();

app.use(cors());

//go to modules - use axios to get the companies 
//and send back to the frontend
app.get('/companies', (req, res) => {
	companies.companies(req.query.profile)
		.then(data => {
			res.send(data);
		})
		.catch(e => {
			res.send({ message: e.message })
	})
})

app.get('/people', (req, res) => {
	person.person(req.query.profile)
		.then(data => {
			res.send(data);
		})
		.catch(e => {
			res.send({ message: e.message })
	})
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));