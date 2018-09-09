var mydata = JSON.parse(data);

function searchword(wordz) {
    var wordl;
    wordl = wordz;

    if (mydata[wordl] == undefined) {
        return null;
    }
    else {
        return mydata[wordl];
    }
}

function graphData() {
    trigger1 = searchword("hello");
    trigger2 = searchword("please");
    trigger3 = searchword("work");

    //var testing = [1,2,3];
    var triggers = [trigger1, trigger2, trigger3];
    return testing;
   
}






