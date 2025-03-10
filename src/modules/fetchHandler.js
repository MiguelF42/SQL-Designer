import config from '../config.js'; 

function selectUrl(url) {
	return url.startsWith('http') ? url : `${config.api}/${url}`;
}

function error(err) {
    if (config.env === 'dev') {
        console.error(err);
    }
    return
}

async function get(url, token = 'none',signal = null) {
	const options = {
		method: 'GET',
		mode: 'cors',
		headers: { 'Content-Type': 'application/json', authorization: `Bearer ${token}` },
		signal: signal,
	};

	return await fetch(selectUrl(url), options)
		.then(res => res.json())
		.then(json => {
			return json;
		})
		.catch(err => error(err));
}

async function post(url, body, token = 'none',signal = null) {
	const options = {
		method: 'POST',
		mode: 'cors',
		headers: { 'Content-Type': 'application/json', authorization: `Bearer ${token}` },
		body: JSON.stringify(body),
		signal: signal,
	};

	return await fetch(selectUrl(url), options)
		.then(res => res.json())
		.then(json => json)
		.catch(err => error(err));
}

async function patch(url, body, token = 'none',signal = null) {
	const options = {
		method: 'PATCH',
		mode: 'cors',
		headers: { 'Content-Type': 'application/json', authorization: `Bearer ${token}` },
		body: JSON.stringify(body),
		signal: signal,
	};

	return await fetch(selectUrl(url), options)
		.then(res => res.json())
		.then(json => {
			return json;
		})
		.catch(err => error(err));
}

async function put(url, body, token = 'none',signal = null) {
	const options = {
		method: 'PUT',
		mode: 'cors',
		headers: { 'Content-Type': 'application/json', authorization: `Bearer ${token}` },
		body: JSON.stringify(body),
		signal: signal,
	};

	return await fetch(selectUrl(url), options)
		.then(res => res.json())
		.then(json => {
			return json;
		})
		.catch(err => error(err));
}

async function del(url, token = 'none',signal = null) {
	const options = {
		method: 'DELETE',
		mode: 'cors',
		headers: { 'Content-Type': 'application/json', authorization: `Bearer ${token}` },
		signal: signal,
	};

	return await fetch(selectUrl(url), options)
		.then(res => res.json())
		.then(json => {
			return json;
		})
		.catch(err => error(err));
}

export {
	get,
	post,
	patch,
	put,
	del
};