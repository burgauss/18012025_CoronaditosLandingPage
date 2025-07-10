const message = document.getElementById("message")
const message_warning = document.getElementById("message-warning")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let messageWarning = ""
    message_warning.innerHTML = ""
    if ( message.value.length === 0) {
        messageWarning = "not a valid message"
        message_warning.innerHTML = messageWarning
    }
})