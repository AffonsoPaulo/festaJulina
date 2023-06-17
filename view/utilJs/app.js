const showMessage = (message, mode) => mode !== "error" ? (document.querySelector('.message').innerHTML = `<div class="alert alert-success alert-dismissible"
role = "alert"><div>${message}</div><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`) :
(document.querySelector('.message').innerHTML = `<div class="alert alert-danger alert-dismissible"
role = "alert"><div>${message}</div><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`)

const cleanSpans = (element) => document.querySelector(element).textContent = ""
