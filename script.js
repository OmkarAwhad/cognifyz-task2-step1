document
	.getElementById("complexForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;
		const age = document.getElementById("age").value;
		const gender = document.getElementById("gender").value;
		const comments = document.getElementById("comments").value;
		const subscribe = document.getElementById("subscribe").checked;
		const rating = document.getElementById("rating").value;

		console.log("Form Data:", {
			name,
			email,
			age,
			gender,
			comments,
			subscribe,
			rating,
		});

		alert("Form submitted!");

		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("age").value = "";
		document.getElementById("gender").value = "";
		document.getElementById("comments").value = "";
		document.getElementById("subscribe").checked = false;
		document.getElementById("rating").value = 1;
	});
