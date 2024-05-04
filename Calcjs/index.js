var output = "";
var displayTag = document.getElementById("display");

function appendValue(value){
    output = output + value;
    displayTag.innerHTML = "<span>" + output + "</span>"; 
    console.log(output);
}


function Calc(){
        console.log(eval(output));
        displayTag.innerHTML = "<span>"+output+"</span>";
        // displayTag.innerHTML = `<span>${eval(value1)}"</span>`;

        output = "";
}   