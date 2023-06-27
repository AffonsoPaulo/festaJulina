const showMessage = (message, mode) => mode !== "error" ? (document.querySelector('.message').innerHTML = `<div class="alert alert-success alert-dismissible"
role = "alert"><div>${message}</div><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`) :
    (document.querySelector('.message').innerHTML = `<div class="alert alert-danger alert-dismissible"
role = "alert"><div>${message}</div><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`)

const cleanSpans = (element) => document.querySelector(element).textContent = ""

const userCourseList = (modal, courseName) => {
    fetch("../controller/users/userCourse.php")
        .then(response => {
            if (response.ok !== true) {
                let msg = response.status + " - " + response.statusText
                throw new Error(msg)
            } else return response.json()
        })
        .then(responseJSON => responseJSON.error === false ? createSelection(responseJSON.data, modal, courseName)  : console.log(responseJSON.errorText))
        .catch(error => errorMessageInsert(error))
}

const createSelection = (data, modal, courseName) => {
    document.querySelector("#userCourse").innerHTML = ""
    document.querySelector("#editUserCourse").innerHTML = ""

    let select = modal === 'addUser' ? document.querySelector("#userCourse") : document.querySelector("#editUserCourse")
    data.forEach(element => {
        let option = document.createElement("option")
        option.value = element.id
        option.text = element.courseName
        element.id === 1 && modal === 'addUser' ? option.selected = true : ""
        courseName === element.courseName ? option.selected = true : ""
        select.appendChild(option)
    })
}
