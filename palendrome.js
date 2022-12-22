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
        document.getElementById('result').innerHTML="<h1>THIS IS A PALENDROME</h1>";
    }
    else{
        document.getElementById('result').innerHTML="<h1>THIS IS NOT A PALENDROME</h1>";

    }
}

