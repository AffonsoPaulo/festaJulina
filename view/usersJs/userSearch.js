const userSearch = (id) => {
    fetch('../controller/users/userSearch.php?id='+id+'')
        .then(response => {
            if(response.ok !== true) {
                let msg = response.status + " - " + response.statusText
                throw new Error(msg)
            } else return response.json()
        })
        .then(responseJSON => responseJSON.error === false ? successMessageSearch(responseJSON.data) : errorMessageSearch(responseJSON.errorText))
        .catch(error => errorMessageSearch(error))
}

const successMessageSearch = (data) => {
    console.log(data)
    document.querySelector("#editUserId").value = data.id
    document.querySelector("#editUserName").value = data.name
    document.querySelector("#editUserUsername").value = data.username
    userCourseList('editUser', data.courseName)
}

const errorMessageSearch = (error) => {
    console.log(error)
}