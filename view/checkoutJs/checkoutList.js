window.addEventListener('load', () => {
    checkoutList()
})

const checkoutList = () => {
    document.querySelector('tbody').innerHTML = "";
    fetch('../controller/checkout/checkoutList.php')
        .then(response => {
            if (response.ok !== true) {
                let msg = response.status + " - " + response.statusText
                throw new Error(msg)
            } else return response.json()
        })
        .then(responseJSON => responseJSON.error === false ? successMessageList(responseJSON.data) : errorMessageList(responseJSON.errorText))
        .catch(error => errorMessageList(error))
}

const successMessageList = (data) => createTable(data)

const errorMessageList = (error) => showMessage(error, 'error')

const createTable = (data) => {
    for (const i in data) {
        let obj = data[i]
        const $tr = document.createElement('tr')
        createTD($tr, obj.name, false)
        createTD($tr, obj.quantity, false)
        createTD($tr, obj.price, false)
        let links = `<a href="#" data-bs-toggle="modal"
                    data-bs-target="#editUser"><i class="bi bi-pen text-warning"></i></a> `
        links += `<a href="#"><i class="bi bi-trash text-danger"></i></a>`
        createTD($tr, links, true)
        document.querySelector('tbody').appendChild($tr)
    }
}

const createTD = (tr, data, isHTML) => {
    const $td = document.createElement('td')
    isHTML ? $td.innerHTML = data : $td.textContent = data
    tr.appendChild($td)
}

const getColumnID = (link) => parseInt(link.parentNode.parentNode.parentNode.firstChild.textContent)

const $tableBody = document.querySelector('tbody')
$tableBody.addEventListener('click', (event) => {
    if (event.target.tagName === 'I') {
        let link = event.target
        let objId = getColumnID(link)
        if (objId > 0 && link.classList.contains('bi-trash')) {
            userDelete(objId)
        } else if (objId > 0 && link.classList.contains('bi-pen')) {
            userSearch(objId)
        }
    }
})