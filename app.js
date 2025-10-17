let count = 0
let h1 = document.getElementById("h1")
let click = new Audio ("sungjinwoo.mp3")



function increaseCounter (){
    count++
    h1.innerText = count
    click.play()
}


function decreaseCounter (){
    if (count > 0){
        count--
    }
    h1.innerText = count
    click.play()
}

function resetCounter (){
    count = 0
    h1.innerText = count
    h1.style.color = "red"
    alert("Counter has been reset!")
    setTimeout(function(){
        h1.style.opacity = "1"
    } , 1000)
    setTimeout(function(){
        h1.style.color = "black"    
    } , 200)
    click.play()
}