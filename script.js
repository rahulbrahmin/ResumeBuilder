function addEdu() {
    
    let node = document.createElement("textarea");
    node.classList.add("form-control");
    node.classList.add("edu");
    node.classList.add("mt-2");
    node.setAttribute('placeholder' , 'Education')

    let eduOb = document.getElementById("edu");
    let eduBtnOb = document.getElementById("eduBtn");

    eduOb.insertBefore(node , eduBtnOb);
    
}

function addProj(){

    let node = document.createElement("textarea");
    node.classList.add("form-control");
    node.classList.add("proj");
    node.classList.add("mt-2");
    node.setAttribute('placeholder' , 'Projects')

    let eduOb = document.getElementById("proj");
    let eduBtnOb = document.getElementById("projBtn");

    eduOb.insertBefore(node , eduBtnOb);
}

function addExp(){

    let node = document.createElement("textarea");
    node.classList.add("form-control");
    node.classList.add("workExp");
    node.classList.add("mt-2");
    node.setAttribute('placeholder' , 'Work Experiences')

    let eduOb = document.getElementById("exp");
    let eduBtnOb = document.getElementById("expBtn");

    eduOb.insertBefore(node , eduBtnOb);
}


function getResume(){

    let name = document.getElementById("name").value;
    let name1 = document.getElementById("name1");

    name1.innerHTML = name;

    document.getElementById("email1").innerHTML = document.getElementById("email").value;
    document.getElementById("phone1").innerHTML = document.getElementById("phone").value;
    document.getElementById("git1").innerHTML = document.getElementById("git").value;
    document.getElementById("linkedin1").innerHTML = document.getElementById("linkedin").value;


    document.getElementById("skills1").innerHTML = document.getElementById("skill").value;

    // Education
    let eduOb1 = document.getElementsByClassName("edu");

    let str = "";

    for (let e of eduOb1) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("eduT").innerHTML = str;


    //Projects
    let projOb = document.getElementsByClassName("proj");

    str = "";

    for (let e of projOb) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("projT").innerHTML = str;


    //Experience
    let expOb = document.getElementsByClassName("workExp");

    str = "";

    for (let e of expOb) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("expT").innerHTML = str;


    document.getElementById("resume").style.display = "none";
    document.getElementById("res-temp").style.display = "block";

}

function download(){
    window.print();
}