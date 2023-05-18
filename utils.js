
function formatRGB(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`
}


function randomInt(range) {
    return Math.round(Math.random() * range)
}


function makeRGB(redInput, greenInput, blueInput) {

    let redOutput = redInput ?? randomInt(255)
    let greenOutput = greenInput ?? randomInt(255)
    let blueOutput = blueInput ?? randomInt(255)


    return `rgb(${redOutput}, ${greenOutput}, ${blueOutput})`
}


