function calculateRemainingCheckBoxes(selectedCheckBox) {
    if (selectedCheckBox == 1) {
        if (document.getElementById("recFilterCheckBox1").checked == true) {
            checkCounterCheckMark(document.getElementById("filterCheckBox1"));
            let dummyArrayToCheck = document.getElementsByName("cb2");
            enableCheckboxes(dummyArrayToCheck);
            dummyArrayToCheck = document.getElementsByName("cb3");
            enableCheckboxes(dummyArrayToCheck);
        }
        else {
            unCheckCounterCheckMark(document.getElementById("filterCheckBox1"));
            if ((document.getElementById("recFilterCheckBox2").checked == true) && (document.getElementById("recFilterCheckBox3").checked == true)) {

            }
            else {
                if ((document.getElementById("recFilterCheckBox2").checked == false)) {
                    disableCheckbox(document.getElementsByName("cb3"));
                }
                else {
                    disableCheckbox(document.getElementsByName("cb2"));
                    
                }
            }
        }
    }

    else if (selectedCheckBox == 2) {
        if (document.getElementById("recFilterCheckBox2").checked == true) {
            checkCounterCheckMark(document.getElementById("filterCheckBox2"));
            let dummyArrayToCheck = document.getElementsByName("cb1");
            enableCheckboxes(dummyArrayToCheck);
            dummyArrayToCheck = document.getElementsByName("cb3");
            enableCheckboxes(dummyArrayToCheck);
        }
        else {
            unCheckCounterCheckMark(document.getElementById("filterCheckBox2"));
            if ((document.getElementById("recFilterCheckBox1").checked == true) && (document.getElementById("recFilterCheckBox3").checked == true)) {

            }
            else {
                if ((document.getElementById("recFilterCheckBox1").checked == false)) {
                    disableCheckbox(document.getElementsByName("cb3"));
                }
                else {
                    disableCheckbox(document.getElementsByName("cb1"));
                    
                }
            }
        }
    }
    else if (selectedCheckBox == 3) {
        if (document.getElementById("recFilterCheckBox3").checked == true) {
            checkCounterCheckMark(document.getElementById("filterCheckBox3"));
            let dummyArrayToCheck = document.getElementsByName("cb1");
            enableCheckboxes(dummyArrayToCheck);
            dummyArrayToCheck = document.getElementsByName("cb2");
            enableCheckboxes(dummyArrayToCheck);
        }
        else {
            unCheckCounterCheckMark(document.getElementById("filterCheckBox3"));
            if ((document.getElementById("recFilterCheckBox1").checked == true) && (document.getElementById("recFilterCheckBox2").checked == true)) {

            }
            else {
                if ((document.getElementById("recFilterCheckBox1").checked == false)) {
                    disableCheckbox(document.getElementsByName("cb2"));
                }
                else {
                    disableCheckbox(document.getElementsByName("cb1"));
                    
                }
            }
        }
    }
    else if (selectedCheckBox == 4) {
        if (document.getElementById("filterCheckBox1").checked == true) {
            checkCounterCheckMark(document.getElementById("recFilterCheckBox1"));
            let dummyArrayToCheck = document.getElementsByName("cb2");
            enableCheckboxes(dummyArrayToCheck);
            dummyArrayToCheck = document.getElementsByName("cb3");
            enableCheckboxes(dummyArrayToCheck);
        }
        else {
            unCheckCounterCheckMark(document.getElementById("recFilterCheckBox1"));
            if ((document.getElementById("filterCheckBox2").checked == true) && (document.getElementById("filterCheckBox3").checked == true)) {

            }
            else {
                if ((document.getElementById("filterCheckBox2").checked == false)) {
                    disableCheckbox(document.getElementsByName("cb3"));
                }
                else {
                    disableCheckbox(document.getElementsByName("cb2"));
                    
                }
            }
        }
    }

    else if (selectedCheckBox == 5) {
        if (document.getElementById("filterCheckBox2").checked == true) {
            checkCounterCheckMark(document.getElementById("recFilterCheckBox2"));
            let dummyArrayToCheck = document.getElementsByName("cb1");
            enableCheckboxes(dummyArrayToCheck);
            dummyArrayToCheck = document.getElementsByName("cb3");
            enableCheckboxes(dummyArrayToCheck);
        }
        else {
            unCheckCounterCheckMark(document.getElementById("recFilterCheckBox2"));
            if ((document.getElementById("filterCheckBox1").checked == true) && (document.getElementById("filterCheckBox3").checked == true)) {

            }
            else {
                if ((document.getElementById("filterCheckBox1").checked == false)) {
                    disableCheckbox(document.getElementsByName("cb3"));
                }
                else {
                    disableCheckbox(document.getElementsByName("cb1"));
                    
                }
            }
        }
    }

    else {
        if (document.getElementById("filterCheckBox3").checked == true) {
            checkCounterCheckMark(document.getElementById("recFilterCheckBox3"));
            let dummyArrayToCheck = document.getElementsByName("cb2");
            enableCheckboxes(dummyArrayToCheck);
            dummyArrayToCheck = document.getElementsByName("cb1");
            enableCheckboxes(dummyArrayToCheck);
        }
        else {
            unCheckCounterCheckMark(document.getElementById("recFilterCheckBox3"));
            if ((document.getElementById("filterCheckBox2").checked == true) && (document.getElementById("filterCheckBox1").checked == true)) {

            }
            else {
                if ((document.getElementById("filterCheckBox2").checked == false)) {
                    disableCheckbox(document.getElementsByName("cb1"));
                }
                else {
                    disableCheckbox(document.getElementsByName("cb2"));
                    
                }
            }
        }
    }
            
}

function clearMemberRoleFilters() {
    let checkboxesList = document.getElementsByClassName("memberFilterClass");
    for (i = 0; i < checkboxesList.length; i++) {
        {
            checkboxesList[i].checked = true;
            checkboxesList[i].disabled=false;
            checkboxesList[i].title="";
        }
    }
}

function enableCheckboxes(dummyArrayToCheck) {
    for (let i = 0; i < dummyArrayToCheck.length; i++) {
        dummyArrayToCheck[i].disabled = false;
        dummyArrayToCheck[i].title = "";
    }
}

function disableCheckbox(dummyArrayToUncheck) {
    for (let i = 0; i < dummyArrayToUncheck.length; i++) {
        dummyArrayToUncheck[i].disabled = true;
        dummyArrayToUncheck[i].title = "atleast 1 checkbox should be selected always";
    }
}
function checkCounterCheckMark(counterCheckBox) {
    counterCheckBox.disabled = false;
    counterCheckBox.title = "";
    counterCheckBox.checked = true;
}

function unCheckCounterCheckMark(counterCheckBox) {
    counterCheckBox.disabled = false;
    counterCheckBox.title = "";
    counterCheckBox.checked = false;
}