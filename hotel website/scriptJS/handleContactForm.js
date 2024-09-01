// console.log("heheheh")

let form = document.getElementById("contact-me")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // console.log("hahahahah")
    // console.log(event)
    // console.log(event.target.name.value,"<----")
    // console.log(event.target.email.value)
    // console.log(event.target.message.value)

    sendData(event.target.name.value, event.target.email.value, event.target.message.value);
})

function sendData(name, email, message) {

    if (name && email && message) {
        let data = {
            name,
            email,
            message,
        }
        console.log(data)

        fetch('https://garima-hotel-contactme.onrender.com/contact-me', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    }else{
        alert("enter all fields")
    }
}