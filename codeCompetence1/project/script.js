const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const message = document.getElementById("message")

function alertForm() {
    alert(
        "First Name : " + firstName.value + "\n" +
        "Last Name : " + lastName.value + "\n" +
        "Email : " + email.value + "\n" +
        "Message : " + message.value
    )
}
