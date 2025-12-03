function Calculator(operator){
    let a=document.getElementById("a").value;
    let b=document.getElementById("b").value;
    let result=document.getElementById("result")
    let aValue=Number(a);
    let bValue=Number(b);
    


    if(operator=="add"){
        result.value=aValue+bValue;
    }

    else if(operator=="sub"){
        result.value=aValue-bValue;
    }

    else if(operator=="mul"){
        result.value=aValue*bValue;
    }
    else if(operator=="div"){
        result.value=aValue/bValue;
    }
    
    else{
        document.getElementById("a").value="";
        document.getElementById("b").value="";
        result.value=""
    }
}