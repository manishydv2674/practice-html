function appendCharacter(character){
    document.getElementById("display").value += character;

}
function clearDiplay(){
    document.getElementById("display").value = "";
}
function calculateResult(){
    try{
        document.getElementById("display").value = eval(document.getElementById("display").value);
    }
    catch(error){
        alert("invalid Expression");
    }
    
}