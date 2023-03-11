let myForm = document.forms["MyForm"];

function OnSubmit() {
    // let email = myForm["email"].value;
    // let password = myForm["password"].value;

    // alert(email + " " + password)
    Validate();
}

function Validate() {
    let startDate = myForm["startDate"].value;
    let endDate = myForm["endDate"].value;

    let element = document.querySelector("#infoStart");
    if (startDate > endDate) {
        element.innerHTMl = "Invalid Date Selected";
    }
    else{
        element.innerHTMl = "";
    }
}