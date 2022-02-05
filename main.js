function validateInput(fieldName) {
    switch (fieldName) {
        case "name":
            {
                let field = document.getElementById("nameField");
                if (field.value != '') {
                    field.classList.remove("invalidField");
                    field.classList.add("validField");
                }
                document.getElementById("emailField").disabled = false;
                break;
            }
        case "email":
            {
                const emailField = document.getElementById("emailField");

                if (!emailField.value.match(/.*@christuniversity.in$/)) {
                    emailField.classList.remove("validField");
                    emailField.classList.add("invalidField");
                } else {
                    emailField.classList.remove("invalidField");
                    emailField.classList.add("validField");
                    document.getElementById("branchField").disabled = false;
                }


                break;
            }
        case 'branch':
            {
                let field = document.getElementById("branchField");
                if (field.value != '') {
                    field.classList.remove("invalidField");
                    field.classList.add("validField");
                }
                document.getElementById("collegeField").disabled = false;
                break;
            }
        case 'college':
            {
                let field = document.getElementById("collegeField");
                if (field.value != '') {
                    field.classList.remove("invalidField");
                    field.classList.add("validField");
                }
                document.getElementById("stateField").disabled = false;
                break;
            }
        case 'state':
            {
                let field = document.getElementById("stateField");
                if (field.value != '') {
                    field.classList.remove("invalidField");
                    field.classList.add("validField");
                }
                document.getElementById("addressField").disabled = false;
                break;

            }

        case "address":
            {
                let field = document.getElementById("addressField");
                if (field.value != '') {
                    field.classList.remove("invalidField");
                    field.classList.add("validField");
                }
                document.getElementById("ageField").disabled = false;
                break;
            }

        case 'age':
            {
                let field = document.getElementById("ageField");
                if (field.value > 0) {
                    field.classList.remove("invalidField");
                    field.classList.add("validField");
                    document.getElementById("emailFieled").disabled = false;
                } else {
                    field.classList.remove("validField");
                    field.classList.add("invalidField");
                }

                document.getElementById("uName").disabled = false;
                document.getElementById("passField").disabled = false;
                break;

            }

        case "phone":
            {
                let field = document.getElementById("mPhone");
                if (field.value != '') {
                    field.classList.remove("invalidField");
                    field.classList.add("validField");
                }
                break;
            }

        case "userName":
            {
                let field = document.getElementById("uNameField");
                if (field.value != '') {
                    field.classList.remove("invalidField");
                    field.classList.add("validField");
                }
                document.getElementById("collegeField").disabled = false;
                break;
            }
        case "password":
            {
                validatePass();
                break;
            }
    }
}



function initForm() {
    setInputFilter(document.getElementById("mPhone"), function(value) {
        return /^\d*?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
    });
    setInputFilter(document.getElementById("nameField"), function(value) {
        return /^[A-Za-z]+$/.test(value); // Allow digits and '.' only, using a RegExp
    });

}

function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}


function validatePass() {
    let mValid = 0;
    const passField = document.getElementById("passField");
    password = passField.value;
    if (password.match(/[a-z]/g)) {
        document.getElementById("smallLetter").classList.remove("invalid_box");
        document.getElementById("smallLetter").classList.add("valid_box");
    } else {
        document.getElementById("smallLetter").classList.remove("valid_box");
        document.getElementById("smallLetter").classList.add("invalid_box");
        mValid += 1;
    }
    if (password.match(/[A-Z]/g)) {
        document.getElementById("capitalLetter").classList.remove("invalid_box");
        document.getElementById("capitalLetter").classList.add("valid_box");
    } else {
        document.getElementById("capitalLetter").classList.remove("valid_box");
        document.getElementById("capitalLetter").classList.add("invalid_box");
        mValid += 1;
    }
    if (password.match(/[0-9]/g)) {
        document.getElementById("numeric").classList.remove("invalid_box");
        document.getElementById("numeric").classList.add("valid_box");
    } else {
        document.getElementById("numeric").classList.remove("valid_box");
        document.getElementById("numeric").classList.add("invalid_box");
        mValid += 1;
    }
    if (password.match(/.[0-9]|[$&+,:;=?@#|'<>.^*()%!-]./g)) {
        document.getElementById("splChar").classList.remove("invalid_box");
        document.getElementById("splChar").classList.add("valid_box");
    } else {
        document.getElementById("splChar").classList.remove("valid_box");
        document.getElementById("splChar").classList.add("invalid_box");
        mValid += 1;
    }
    if (password.match(/.[A-Z]|[0-9]|[$&+,:;=?@#|'<>.^*()%!-]./)) {
        document.getElementById("embedded").classList.remove("invalid_box");
        document.getElementById("embedded").classList.add("valid_box");
    } else {

        document.getElementById("embedded").classList.remove("valid_box");
        document.getElementById("embedded").classList.add("invalid_box");
        mValid += 1;
    }
    let text = ""
    switch (mValid) {
        case 0:
            text = "Strong Password";
            break;
        case 1:
            text = "Fair password";
            break;
        case 2:
            text = "Week Password";
            break;
        case 3:
            text = "Very week password";
            break;
        case 4:
            text = "Totally week password";
            break;
    }
    document.getElementById("passStrength").innerHTML = text;
}