let width = 200
let height = 200

let svg = document.getElementById('base-svg')
console.log(svg)


let  r= 100;
svg.setAttribute("width", width)
svg.setAttribute("height", height)



function newCircle(colour) {

    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle")

    newCircle.setAttribute("r", randomInt(height/2))
    newCircle.setAttribute("cx", 100)   
    newCircle.setAttribute("cy", 100)

    newCircle.setAttribute("fill", "none")
    newCircle.setAttribute("stroke-width", 3)
    newCircle.setAttribute("stroke", colour ?? makeRGB())
    
    svg.appendChild(newCircle)

}



function newSquare(colour) {

    let newSquare = document.createElementNS("http://www.w3.org/2000/svg", "rect")
    
    let z = randomInt(height)
    
    newSquare.setAttribute("stroke-width", 3)
    newSquare.setAttribute("width", z)
    newSquare.setAttribute("height", z)
    newSquare.setAttribute("fill", "none")
    newSquare.setAttribute("stroke", colour ?? makeRGB())
    newSquare.setAttribute('x', width / 2 - z / 2);
    newSquare.setAttribute('y', height / 2 - z / 2);

    svg.appendChild(newSquare)

}

function newEllipse(colour) {

    let newEllipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse")

    let Er = randomInt(height/2)

    newEllipse.setAttribute("rx", Er)
    newEllipse.setAttribute("ry", Er/2)
    newEllipse.setAttribute("cx", 100)
    newEllipse.setAttribute("cy", 100)

    newEllipse.setAttribute("fill", "none")
    newEllipse.setAttribute("stroke-width", 3)
    newEllipse.setAttribute("stroke", colour ?? makeRGB())
    
    svg.appendChild(newEllipse)

}

function randomEllipse(color) {
    newEllipse.setAttribute("fill", makeRGB())
}

const  button = document.getElementById("Add1");

button.addEventListener("click", myFunction);

function myFunction() {
    svg.innerHTML = '';
    newCircle(null, makeRGB())
}


const  button1 = document.getElementById("Add2");

button1.addEventListener("click", myFunction1);

function myFunction1() {
    svg.innerHTML = '';
    newSquare( makeRGB())
}

const button2 = document.getElementById("Add3");

button2.addEventListener("click", myFunction2);

function myFunction2() {
     svg.innerHTML = '';
    newEllipse(makeRGB())
}


const  button3 = document.getElementById("Add4");

button3.addEventListener('click', () => {

    const currentShape = svg.querySelectorAll('*');

    currentShape.forEach(shape => {
    shape.setAttribute("fill", makeRGB());
    });

});