function getIn() {
    return document.getElementById("ip-vlu").innerText;
}

function printIp(num){
    document.getElementById("ip-vlu").innerText=num;
}

function getOp() {
    return document.getElementById("op-vlu").innerText;
}

function printOp(num){
    if (num=="") {
        document.getElementById("op-vlu").innerText=num;
    }
    else
    {
        document.getElementById("op-vlu").innerText=getFormattedNumber(num);
    }
    
}

function getFormattedNumber(num){
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var number=document.getElementsByClassName("number");
for (var i=0;i<number.length;i++) {
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOp());
        if (output!=NaN) {
            output=output+this.id;
            printOp(output);
        }
    });
}

var operator=document.getElementsByClassName("operator");
for (var i=0;i<operator.length;i++) {
    operator[i].addEventListener('click',function(){
        if(this.id=="clr"){
            printIp("");
            printOp("");
        }
        else if(this.id=="bkspace"){
            var output=reverseNumberFormat(getOp()).toString();
            if (output) {
                output=output.substr(0,output.length-1);
                printOp(output);
            }
        }
        else{
            var output=getOp();
            var input=getIn();
            if(output=="" && input!=""){
                if(isNaN(input[input.length-1])){
                    input=input.substr(0,input.length-1);
                }
            }
            if (output!="" || input!="") {
                output=output==""?output:reverseNumberFormat(output);
                input=input+output;
                if(this.id=="="){
                    var result=eval(input);
                    printOp(result);
                    printIp("");
                }
                else{
                    input=input+this.id;
                    printIp(input);
                    printOp("");
                }
            }
        }
    });
}
