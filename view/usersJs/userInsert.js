const $sendButton = document.querySelector(".addUser")
$sendButton.addEventListener("click", (event) => {
    event.preventDefault()
    userInsert()
})

const userInsert = () => {
    const user = {"name": document.querySelector("#userName").value, "courseId": document.querySelector("#userCourse").value}
}