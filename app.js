var helloWorld = "Hello world"


var testArray1 = ["a", "b", "c", "d"];
var testArray2 = [10, 11, 12, 13, "b"];

printShit(helloWorld);
testSomeArrayStuff(testArray1);
dunnoYet();

function printShit(text){
    console.log(text);
}

function testSomeArrayStuff(array){
    var i = 0;
    array.forEach(element => {
        console.log(element + i);
        i++;
    });
}

function dunnoYet(){
    while(true) {
        console.log(Date.UTC);
    }
    JSON.
}