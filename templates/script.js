function addNewField() {
    console.log("Adding new field")
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute('Placeholder', 'Enter here')

    let weOb = document.getElementById("we")
    let weAddButtonOb = document.getElementById("weAddButton")

    weOb.insertBefore(newNode, weAddButtonOb)
}

function addNewAQField() {
    console.log("Adding new field")
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute('Placeholder', 'Enter here')

    let aqOb = document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode, aqAddButtonOb)
}

function addNewACField() {
    console.log("Adding new field")
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('acField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute('Placeholder', 'Enter here')

    let weOb = document.getElementById("ac")
    let weAddButtonOb = document.getElementById("acAddButton")

    weOb.insertBefore(newNode, weAddButtonOb)
}
//generating Cv
function generateCV() {
    let nameField = document.getElementById("nameField").value;
    let nameT = document.getElementById('nameT');
    nameT.innerHTML = nameField;
    document.getElementById("name2T").innerHTML = nameField;

    //for contact
    document.getElementById("contactT").innerHTML = document.getElementById('contactField').value;
    // For adress
    document.getElementById("addressT").innerHTML = document.getElementById('addressField').value;
    //for face book
    document.getElementById("cdT").innerHTML = document.getElementById('cdField').value;
    document.getElementById("ccT").innerHTML = document.getElementById('ccField').value;
    document.getElementById("hrT").innerHTML = document.getElementById('hrField').value;
    document.getElementById("fbT").innerHTML = document.getElementById('fbField').value;
    document.getElementById("inT").innerHTML = document.getElementById('InstaField').value;
    document.getElementById("linkedT").innerHTML = document.getElementById('linkedField').value;
    // objective
    document.getElementById("objectiveT").innerHTML = document.getElementById('objectiveField').value;
    //work experiance
    let wes = document.getElementsByClassName('weField')
    let str = ''
    for (let e of wes) {
        str = str + `<li> ${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML = str;

    // Achivements
    let acs = document.getElementsByClassName('acField')
    let str3 = ''
    for (let e of acs) {
        str3 = str3 + `<li> ${e.value}</li>`;
    }
    document.getElementById('acT').innerHTML = str3;



    // acadmic details
    let aqs = document.getElementsByClassName('eqField')
    let str1 = ''
    for (let a of aqs) {
        str1 = str1 + `<li> ${a.value}</li>`;
    }
    document.getElementById('aqT').innerHTML = str1;

    // for image
    let file = document.getElementById("imageField").files[0]
    console.log(file);
    let reader = new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result);
    //set image as templetes
    reader.onloadend = function() {
        document.getElementById("imgTemplate").src = reader.result;
    };


    document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-templets').style.display = 'block'
}

//print cv
function printfCV() {
    window.print();
}