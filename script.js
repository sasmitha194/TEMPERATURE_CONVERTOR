function convert() {
    var selectElement = document.getElementById("temperature");
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;
    
    // Perform actions based on the selected option
    switch (selectedOption) {
        case "Fahrenhiet":
            option1Function();
            break;
        case "Celsius":
            option2Function();
            break;
        case "kelvin":
            option3Function();
            break;
        default:
            // Handle default case
            break;
    }
}

function option1Function() {
    let val= Number(document.getElementById("input").value)
    let Celsius=(val-32)*(5/9)
    let result=document.getElementById("result")
    result.innerHTML=Celsius.toFixed(0)+'&deg;'
}

function option2Function() {
    let val= Number(document.getElementById("input").value)
    let Fahrenhiet=val*(9/5)+32
    let result=document.getElementById("result")
    result.innerHTML=Fahrenhiet.toFixed(0)+'&deg;'
}

function option3Function() {
    let val= Number(document.getElementById("input").value)
    let Fahrenhiet=((val-273.15)*9/5)+32
    let result=document.getElementById("result")
    result.innerHTML=Fahrenhiet.toFixed(0)+'&deg;'
}