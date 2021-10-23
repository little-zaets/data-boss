
function getCompaniesFromServer(event) {
	event.preventDefault();
	let input = document.getElementById('csearch');
	let left = document.getElementById("hideable-left");
	let right = document.getElementById("hideable-right");
	left.classList.add("hide-me");
	right.classList.add("hide-me");
	if (!validURL(input.value)) {
		alert("Please enter a valid url");
		return;
	}
	else {
		fetch(`/companies?profile=${input.value}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        embedCompanyData(data);
      })
      .catch((err) => {
        console.log(err);
      });
	}
	input.value = "";
}

function getPersonFromServer(event) {
	event.preventDefault();
	let input = document.getElementById('psearch');
	let left = document.getElementById("hideable-left");
	let right = document.getElementById("hideable-right");
	left.classList.add("hide-me");
	right.classList.add("hide-me");
	if (!validURL(input.value)) {
		alert("Please enter a valid url");
		return;
	}
	else {
		fetch(`/people?profile=${input.value}`)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			embedPersonData(data);
		})
		.catch(err => {
			console.log(err)
		})
	}
	input.value = "";
}

function validURL(myURL) {
	var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + //port
		'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
		'(\\#[-a-z\\d_]*)?$', 'i');
	return pattern.test(myURL);
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function embedCompanyData(data) {
	let cName = document.getElementById("c-name");
	let cFounded = document.getElementById("c-founded");
	let cSize = document.getElementById("c-size");
	let cType = document.getElementById("c-type");
	let cIndustry = document.getElementById("c-industry");
	let cLocality = document.getElementById("c-locality");
	let cSite = document.getElementById("c-site");
	let fb = document.getElementById("fb-link");
	let tw = document.getElementById("t-link");
	let li = document.getElementById("l-link");
	let img = document.getElementById("c-img");

	img.src = "https://www.obs-banyuls.fr/images/observer/logo_boss.jpg";
	cFounded.innerHTML = data.founded;
	cSize.innerHTML = data.size;
	cType.innerText = capitalizeFirstLetter(data.type);
	cIndustry.innerText = capitalizeFirstLetter(data.industry);
	cLocality.innerText = capitalizeFirstLetter(data.location.name);
	cSite.innerText = `https://${data.website}`;
	fb.href = data.facebook_url;
	tw.href = data.twitter_url;
	li.href = data.linkedin_url;
	cName.innerHTML = data.name.toUpperCase();
}

function embedPersonData(data) {
	let pName = document.getElementById("p-name");
	let pTitle = document.getElementById("p-title");
	let pCompany = document.getElementById("p-company");
	let pEmail = document.getElementById("p-email");
	let pPhone = document.getElementById("p-phone");
	let pLocality = document.getElementById("p-locality");
	let fb = document.getElementById("p-fb-link").href;
	let tw = document.getElementById("p-t-link").href;
	let li = document.getElementById("p-l-link").href;
	let img = document.getElementById("p-img");

	img.src = "https://www.obs-banyuls.fr/images/observer/logo_boss.jpg";
	pName.innerHTML = data.data.full_name.toUpperCase();
	pTitle.innerHTML = capitalizeFirstLetter(data.data.job_title);
	pEmail.innerHTML = data.data.emails[0].address;
	pPhone.innerText = data.data.phone_numbers[0];
	pLocality.innerText = capitalizeFirstLetter(data.data.location_name);
	fb = `https://${data.data.facebook_url}`;
	tw = `https://${data.data.twitter_url}`;
	li = `https://${data.data.linkedin_url}`;
	pCompany.innerHTML = capitalizeFirstLetter(data.data.job_company_name);
}