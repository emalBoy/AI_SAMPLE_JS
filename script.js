//------- AWESOME LOG ---------

console.log("   A     III");
console.log("  A A     I");
console.log(" A A A    I");
console.log("A     A  III");
console.log(' ');
console.log("- Only with javascript");
console.log(' ');
console.log(' ');

//

//Input Element
const input = document.getElementById('input');
const output = document.getElementById('output');

//Check when the ENTER is pressed
input.addEventListener('keypress' , ev => {
    output.innerHTML = "";
    if(ev.key == "Enter"){
        run();
    };
});

//Check input
const run = function(){
    inputValue = input.value;
    if(inputValue.length > 0 && inputValue !== null && inputValue !== undefined && input.value !== " "){
        ai(inputValue);
    }else{
        alert("An Error Accourd!");
        console.warn("An Error Accourd. Check the input.");
    };
};

var about = [];
var hasnum , spec;
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const special = ["!","@","#","$","%","^","&","*","(",")","_"];

console.log("Specials : " + special);
console.log("Numbers : " + numbers);

const ai = function(int){
    if(int == null || int.length < 1 || input.value !== int){
        return "Can not run the function!";
    };
    about = [];
    hasnum = '';
    spec = '';
    if(!isNaN(int)){
        about.push("Number");
        if(int.includes('.')){
            about.push("Number is a float");
        }
    }else{
        about.push("A text");
        split = int.replaceAll(" " , "");
        about.push("There are " + split.length + " letters");
        split = '';
        for(var i = 0 ; i<special.length ; i++){
            if(int.includes(special[i])){
                about.push("Has special characters");
                final = true;
                break;
            }else{
                final = !true;
            };
        };
        if(!final){
            about.push("No special letters");
        };

        for(var i = 0 ; i<numbers.length ; i++){
            if(int.includes(numbers[i])){
                about.push("Has number(s)");
                final = true;
                break;
            };
        };
        
        split = int.split(" ");
        if(split.length > 1){
            about.push("Has " + split.length + " word(s)");
        }else{
            about.push("Has no multiple words");
        };
        for(var i = 0 ; i<split.length ; i++){
            if(split[i].includes("@gmail.com")){
                about.push("Found a email");
                break;
            };
        };
        final = false;
        for(var i = 0 ; i<split.length ; i++){
            if(split[i].includes(".com") || split[i].includes(".lk") || split[i].includes(".net") || split[i].includes(".edu") || split[i].includes(".gov")){
                final = true;
                about.push("Found a website");
                break;
            };
        };
        if(final){
            split = int.replaceAll("@" , " ");
            split = split.split(" ");
            for(var i = 0 ; i<split.length ; i++){
                if(split[i].includes(".lk") || split[i].includes(".com") || split[i].includes(".net") || split[i].includes(".edu") || split[i].includes(".gov")){
                    final = i;
                    break;
                };
            };
            final = split[final];
            about.push("Website looks like : " + final);
        };

    };

    //Finally
    write(about);
    about = [];
};

var out , int , i , stop = false;
const write = function(arr){
    stop = false;
    input.disabled = true;
    out = '';
    output.innerHTML = '';
    for(var i = 0 ; i<arr.length ; i++){
        out += arr[i] + " <br>";
    };
    i = 0;
    int = setInterval(function(){
        if(out[i] == '<'){
            output.innerHTML += "<br>";
            i += 4;
        };
        if(i > out.length - 5){
            clearInterval(int);
            stop = true;
            input.disabled = false;
            out = '';
            input.focus();
        };
        if(!stop){
        output.innerHTML += out[i];
        };
        i++;
    },50);
};

//Focus Input
input.focus();

document.getElementById('app').style.visibility = 'visible';
document.getElementById('title').innerHTML = 'AI TEST WITH JAVASCRIPT';