function checkpalendrome(inputstring){
    var reversestringarray=[];

    for(var j=inputstring.length-1;j>=0;j--){
       reversestringarray.push(inputstring[j]);
    }

    var reversestring="";
    for(var k=0;k<reversestringarray.length;k++){
        reversestring+=reversestringarray[k];
    }

    if(reversestring===inputstring){
        console.log("THIS STRING IS PALENDROME");
    }
    else{
        console.log("THIS STRING IS NOT PALENDROME");

    }
}

let palendromestring = "LEVEL";
checkpalendrome(palendromestring);

