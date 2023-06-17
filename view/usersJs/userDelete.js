const userDelete = (id) => {
    if (confirm('Confirma a exclusão do usuário de id ' + id + '?')) {
        let user = {"id": id};
        let configMethod = {
            method: "DELETE",
            body: JSON.stringify(user),
            headers: {"Content-Type": "application/json;charset=UTF-8"}
        };

        fetch("../controller/users/userDelete.php", configMethod)
            .then(response => {
                if (response.ok !== true) {
                    let msg = response.status + " - " + response.statusText;
                    throw new Error(msg);
                } else return response.json();
            })
            .then(responseJSON => responseJSON.error === false ? successMessageDelete(responseJSON) : errorMessageDelete(responseJSON.errorText))
            .catch(error => errorMessageDelete(error))
    }
}

const successMessageDelete = (data) => {
    showMessage(data.successText, 'success')
    userList()
}

const errorMessageDelete = (error) => {
    showMessage(error, 'error')
}