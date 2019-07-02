const bodyNode = document.body;
let dataPoint;

bodyNode.addEventListener("click", eventHandler);
function eventHandler(c){
    if(c.target.className === "char"){
        c.target.className="charBW";
    }else if(c.target.className === "charBW"){
        c.target.className="char";
    }
    c.preventDefault();
}
let personajes= ['Agnis','Diego','eli','Elsa','Erica','Issac','Jacob','Karim','Lisa' ]
    let chosen = personajes[Math.floor(Math.random() * personajes.length)]

bodyNode.addEventListener("click", whenPlay);
function whenPlay(c){
    
    if(c.target.id === "image"){
        c.target.src= `src/${chosen}.png`;
    }
    c.preventDefault();
}

function selectedBox(e){
    var text = document.getElementById('cars')

    var text2 = text.options[text.selectedIndex].value;

    console.log(text2)

    e.preventDefault();
}