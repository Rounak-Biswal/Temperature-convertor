let degC = document.getElementById('degC');
let degF = document.getElementById('degF');
let convertBtn = document.getElementById('convertBtn');

convertBtn.addEventListener("click", function(event){
    event.preventDefault();
    
    if(isNaN(parseFloat(degC.value)) && isNaN(parseFloat(degF.value)))
        alert("please fill either of the fields");
    else{
        if(degC.value !== "" && degF.value === ""){
            let tempC = parseFloat(degC.value);
            degF.value = (tempC * 9/5) + 32;
        }
        else if(degC.value === "" && degF.value !== ""){
            let tempF = parseFloat(degF.value);
            degC.value = (tempF - 32) * 5/9;
        }
        else{
            alert("please clear both fields");
        }
    }
})