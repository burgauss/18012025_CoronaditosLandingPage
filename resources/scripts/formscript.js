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
let isValidated = false

const expressions = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\+?\d{7,14}$/ // 7 a 14 numeros.
}

const fields = {
    name : false,
    email: false,
    number: false,
    message: false
}

const formValidation = (e) => {
    switch (e.target.name){
        case "name":
            if (e.target.value.length > 0){
                document.getElementById("name").classList.remove('incorrect_input')
                document.getElementById("name-warning").hidden = true
                fields.name = true
            } else{
                document.getElementById("name").classList.add('incorrect_input')
                document.getElementById("name-warning").textContent = "Not a valid name"
                document.getElementById("name-warning").hidden = false
                fields.name = false
            }
            break
     case "email":
            validateField(expressions.correo, e.target, "email", "email-warning", "Not a valid E-Mail")
            break   
        case "number":
            validateField(expressions.telefono, e.target, "number", "number-warning", "Not a valid number")
            break
        case "message":
            if (message.value.length > 0){
                message.classList.remove('incorrect_input')
                document.getElementById("message-warning").hidden = true
                fields.message = true
            } else {
                message.classList.add('incorrect_input')
                document.getElementById("message-warning").textContent = "Not a valid Number"
                document.getElementById("message-warning").hidden = false
                fields.message = false
            }
            break
    }

}

const validateField = (expresion, input, fieldName, fieldWarningName, warning_message) => {
    if (expresion.test(input.value)){
        document.getElementById(fieldName).classList.remove('incorrect_input')
        document.getElementById(fieldWarningName).hidden = true
        fields[fieldName] = true
    } else{
        document.getElementById(fieldName).classList.add('incorrect_input')
        document.getElementById(fieldWarningName).textContent = warning_message
        document.getElementById(fieldWarningName).hidden = false
        fields[fieldName]  = false
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
    if (Object.values(fields).every(value => value === true)){
        form.submit()
        // form.reset()
    }
    
})