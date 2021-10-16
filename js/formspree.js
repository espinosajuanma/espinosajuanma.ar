window.addEventListener("DOMContentLoaded", function() {

	var form = document.getElementById("contacto");
	var button = document.getElementById("contacto-boton");
	var status = document.getElementById("contacto-estado");

	function success() {
		form.reset();
		status.innerHTML = '<p><span class="green">Gracias! Pronto me pondré en contacto.</span></p>';
		status.style.display = 'block';
		button.style = 'display: none';
	}

	function error() {
		status.innerHTML = '<p><span class="magenta">Ups! Hubo un problema. Intenta más tarde.</span></p>';
		status.style.display = 'block';
	}

	form.addEventListener('submit', function(e) {
		e.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
});


function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.onreadystatechange = function() {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}