let display=document.getElementById('result');

function appendToDisplay(value){
    display.value +=value;
}

function clearDisplay(){
    display.value ='';
}

function calculateResult(){
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value='Error';
    }
}

