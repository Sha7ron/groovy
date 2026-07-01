const images = [
    "images/pfp.png",
    "images/pfp2.png",
    "images/pfp3.png"
]

console.log(images.length)

let imageSlot = document.getElementById("container")


function renderImages(){
    for(let i = 0; i < images.length; i++){
        imageSlot.innerHTML += `<img src="${images[i]}" alt="image.1" width="150" height="150">`
    }
}

renderImages()
