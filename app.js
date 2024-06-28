let user = prompt("Enter a number between 1 and 100");

if(((user <= 100) && (user >= 90))){
    console.log("A");
}
 else if ((user <= 89) && (user >= 80)) {
    console.log("B");
} else if ((user <= 79) && (user >= 70)) {
    console.log("C");
} else if ((user <= 69) && (user >= 60)) {
    console.log("D");
} else if ((user <= 59) && (user >= 0)) {
    console.log("F");
}