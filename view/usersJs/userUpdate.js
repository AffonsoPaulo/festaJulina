$editButton = document.querySelector(".editUser")
$editButton.addEventListener("click", (event) => {
    event.preventDefault()
    userUpdate()
})

const userUpdate = () => {
    let user = {
        "id": document.querySelector("#editUserId").value,
        "name": document.querySelector("#editUserName").value,
        "course": document.querySelector("#editUserCourse").value,
        "username": document.querySelector("#editUserUsername").value
    }
    let configMethod = {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {"Content-Type": "application/json;charset=UTF-8"}
    }

    fetch("../controller/users/userUpdate.php", configMethod)
        .then(response => {
            if (response.ok !== true) {
                let msg = response.status + " - " + response.statusText
                throw new Error(msg)
            } else return response.json()
        })
        .then(responseJSON => responseJSON.error === false ? successMessageUpdate(responseJSON) : errorMessageUpdate(responseJSON.errorText))
        .catch(error => errorMessageUpdate(error))
}

const successMessageUpdate = (data) => {
    showMessage(data.successText, 'success')
    userList()
}

const errorMessageUpdate = (error) => {
    showMessage(error, 'error')
}