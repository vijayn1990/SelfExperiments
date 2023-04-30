let tempData = "";
    let tempLength;

    function basePattern(requiredPattern) {
        let returnValue = "";
        switch (requiredPattern) {
            case "lowerAlphabets": returnValue = /[a-z]/;
                break;
            case "upperAlphabets": returnValue = /[A-Z]/;
                break;
            case "digits": returnValue = /[0-9]/;
                break;
            case "specialCharacters": returnValue = /[~!@#$%^&*()_+]/;
                break;
            case "wrongInput" : returnValue=/[^a-zA-Z0-9~!@#$%&*()_+]/;
                break;
            default:
                break;
        }
        return returnValue;

    }

    function checkInput() {
        let inputValue = document.getElementById("inputBox").value;

        if (inputValue.length < tempLength) {
            //console.log("character deleted");
            if (inputValue.length - tempLength < 0) {
                validateFullString(inputValue);
                document.getElementById("progresBarID").value=document.getElementById("progresBarID").value-10;
            }
        }
        else {
            let lastChar = inputValue.charAt(inputValue.length - 1);
            //console.log(lastChar);
            let loweralphaPattern = basePattern("lowerAlphabets");
            let upperalphaPattern = basePattern("upperAlphabets");
            let numPattern = basePattern("digits");
            let specialCharPattern = basePattern("specialCharacters");
            

            //Validate the minimum length
            if (inputValue.length >= 4) {
                changeColor("minLength");
            }

            //Validate the lower case letters
            if (lastChar.match(loweralphaPattern) != null) {
                changeColor("lowerAlpha");
                document.getElementById("progresBarID").value=document.getElementById("progresBarID").value+10;
            }
            //Validate the upper case letters

            else if (lastChar.match(upperalphaPattern) != null) {
                changeColor("upperAlpha");
                document.getElementById("progresBarID").value=document.getElementById("progresBarID").value+10;
            }

            //console.log(inputValue.match(numPattern));
            else if (lastChar.match(numPattern) != null) {
                changeColor("digits");
                document.getElementById("progresBarID").value=document.getElementById("progresBarID").value+10;
            }
            else if (lastChar.match(specialCharPattern) != null) {
                changeColor("specialChars");
                document.getElementById("progresBarID").value=document.getElementById("progresBarID").value+10;

            }
            else{
                changeColor("wrongip");
            }

        }
    }

    //Change color of the matched criteria
    function changeColor(fieldValue) {
        //document.getElementById(fieldValue).style.color = "green";
        document.getElementById(fieldValue).src="images/greentick.jpg";
        tempData = document.getElementById("inputBox").value;
        tempLength = tempData.length;
        //console.log(tempData);
        //console.log(tempLength);

    }

    //Change color of the criteria to default color
    function revertBackColor(fieldValue) {
        document.getElementById(fieldValue).src="images/redtick.jpg";
        tempData = document.getElementById("inputBox").value;
        tempLength = tempData.length;
        //console.log(tempData);
        //console.log(tempLength);

    }



    function validateFullString(inputValue) {
        let loweralphaPattern = basePattern("lowerAlphabets");
        let upperalphaPattern = basePattern("upperAlphabets");
        let numPattern = basePattern("digits");
        let specialCharPattern = basePattern("specialCharacters");
        let wrongInputPattern=basePattern("wrongInput");


        //Change color of the Minimum length label
        if (inputValue.length >= 4) {
                changeColor("minLength");
            }
            else
            {
                revertBackColor("minLength");
            }
        
        //Validate the lower case letters
        if (inputValue.match(loweralphaPattern) != null) {
            changeColor("lowerAlpha");
        }
        else {
            revertBackColor("lowerAlpha");
        }

        //Validate the upper case letters
        if (inputValue.match(upperalphaPattern) != null) {
            changeColor("upperAlpha");
        }
        else {
            revertBackColor("upperAlpha");
        }

        //Validate the digits
        if (inputValue.match(numPattern) != null) {
            changeColor("digits");
        }
        else {
            revertBackColor("digits");
        }

        //Validate the special character
        if((inputValue.match(specialCharPattern)!== null) ){
            changeColor("specialChars");
        }
        else {
            revertBackColor("specialChars");
        }

        //Validate for invalid inputs
        if((inputValue.match(wrongInputPattern)!== null) ){
            changeColor("wrongip");
        }
        else {
            revertBackColor("wrongip");
        }

    }