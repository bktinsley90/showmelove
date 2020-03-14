function myLove(){
    let name=prompt("What is your name?");
    let favColor=prompt("What is Your favorite color?")
    if (favColor== "blue"){
        alert("Ok Holla!");
    } else if (favColor == "black"){
        alert("Black Power");
    } else if(favColor == "green" ){
        alert("How yoooouuuu doing!")
    } else if (favColor!= "blue", "black", "green"){
        alert("Sorry Next!")
    }
}