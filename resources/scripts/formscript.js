// Previous design

// const message = document.getElementById("message")
// const message_warning = document.getElementById("message-warning")
// const form = document.getElementById("form")

// form.addEventListener("submit", e=>{
//     e.preventDefault()
//     let messageWarning = ""
//     /* implementing logic for the message area validation,
//     it needs to be greater than 0 */
//     if ( message.value.length === 0) {
//         message_warning.hidden = false
//         message.style.marginBottom = 0
//         message_warning.textContent = "not a valid message"
//     }
// })

// New design
const form = document.getElementById('form')
const inputs = document.querySelectorAll('#form input.fs-input') //make sure to ignore the last two elements
const message = document.getElementById('message')

const expressions = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\+?\d{7,14}$/ // 7 a 14 numeros.
}

const formValidation = (e) => {
    switch (e.target.name){
        case "name":
            if (e.target.value.length > 0){
                document.getElementById("name").classList.remove('incorrect_input')
                document.getElementById("name-warning").hidden = true
            } else{
                document.getElementById("name").classList.add('incorrect_input')
                document.getElementById("name-warning").textContent = "Not a valid name"
                document.getElementById("name-warning").hidden = false
            }
            break
     case "email":
            validateField(expressions.correo, e.target, "email", "email-warning", "Not a valid E-Mail")
            // if (expressions.correo.test(e.target.value)){
            //     document.getElementById("email").classList.remove('incorrect_input')
            //     document.getElementById("email-warning").hidden = true
            // } else{
            //     document.getElementById("email").classList.add('incorrect_input')
            //     document.getElementById("email-warning").textContent = "Not a valid E-Mail"
            //     document.getElementById("email-warning").hidden = false
            // }
            break   
        case "number":
            validateField(expressions.telefono, e.target, "number", "number-warning", "Not a valid number")
            // if (expressions.telefono.test(e.target.value)){
            //     document.getElementById("number").classList.remove('incorrect_input')
            //     document.getElementById("number-warning").hidden = true
            // } else{
            //     document.getElementById("number").classList.add('incorrect_input')
            //     document.getElementById("number-warning").textContent = "Not a valid Number"
            //     document.getElementById("number-warning").hidden = false
            // }
            break
        case "message":
            if (message.value.length > 0){
                message.classList.remove('incorrect_input')
                document.getElementById("message-warning").hidden = true
            } else {
                message.classList.add('incorrect_input')
                document.getElementById("message-warning").textContent = "Not a valid Number"
                document.getElementById("message-warning").hidden = false
            }
            break
    }

}

const validateField = (expresion, input, fieldName, fieldWarningName, warning_message) => {
    if (expresion.test(input.value)){
        document.getElementById(fieldName).classList.remove('incorrect_input')
        document.getElementById(fieldWarningName).hidden = true
    } else{
        document.getElementById(fieldName).classList.add('incorrect_input')
        document.getElementById(fieldWarningName).textContent = warning_message
        document.getElementById(fieldWarningName).hidden = false
    }
}

inputs.forEach((inputs) => {
    inputs.addEventListener('keyup', formValidation)
    inputs.addEventListener('blur', formValidation)
})

message.addEventListener('keyup', formValidation)
message.addEventListener('blur', formValidation)


form.addEventListener('submit', e =>{
    e.preventDefault()

})