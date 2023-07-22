const $addButton = document.querySelector(".addUserButton")
const $sendButton = document.querySelector(".addUser")

$addButton.addEventListener("click", () => userCourseList('addUser'))
$sendButton.addEventListener("click", (event) => {
    event.preventDefault()
    userInsert()
})

const userInsert = () => {
    let user = {
        "name": document.querySelector("#userName").value,
        "course": document.querySelector("#userCourse").value,
        "username": document.querySelector("#userUsername").value,
        "password": document.querySelector("#userPassword").value
    }
    let configMethod = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {"Content-Type": "application/json;charset=UTF-8"}
    }

    fetch("../controller/users/userInsert.php", configMethod)
        .then(response => {
            if (response.ok !== true) {
                let msg = response.status + " - " + response.statusText
                throw new Error(msg)
            } else return response.json()
        })
        .then(responseJSON => responseJSON.error === false ? successMessageInsert(responseJSON) : errorMessageInsert(responseJSON.errorText))
        .catch(error => errorMessageInsert(error))
}

function successMessageInsert(data) {
    showMessage(data.successText, 'success')
    userList()
}

function errorMessageInsert(error) {
    showMessage(error, 'error')
}