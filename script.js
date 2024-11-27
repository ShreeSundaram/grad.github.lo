function marks (){
let marks =[];
let sub= prompt("Enter number of subjects")
for (let i=1;i<=sub;i++){
    marks[i] = prompt('Enter your marks each subject ${i+1}:');
    marks.push(marks);
}
 return marks;
}

function total(marks){
    let total=0;
    for (let i=o;i<marks.length();i++)
    total+=marks[i];
}
    document.getElementById("total").innerHTML= 'total: ${total}';
    
