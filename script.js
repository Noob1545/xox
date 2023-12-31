const buton = document.getElementsByTagName("button")[0]
const buton1 = document.getElementsByTagName("button")[1]
const buton2 = document.getElementsByTagName("button")[2]
const buton3 = document.getElementsByTagName("button")[3]
const buton4 = document.getElementsByTagName("button")[4]
const buton5 = document.getElementsByTagName("button")[5]
const buton6 = document.getElementsByTagName("button")[6]
const buton7 = document.getElementsByTagName("button")[7]
const buton8 = document.getElementsByTagName("button")[8]
const p = document.getElementsByTagName("p")[0]
const p1 = document.getElementsByTagName("p")[1]
const p2 = document.getElementsByTagName("p")[2]

buton.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton.innerHTML = "<font color='red'>X</font>"
        buton.disabled = true
        buton.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton.innerHTML = "<font color='blue'>O</font>"
        buton.disabled = true
        buton.style.cursor = "not-allowed"
    }
}
buton1.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton1.innerHTML = "<font color='red'>X</font>"
        buton1.disabled = true
        buton1.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton1.innerHTML = "<font color='blue'>O</font>"
        buton1.disabled = true
        buton1.style.cursor = "not-allowed"
    }
}
buton2.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton2.innerHTML = "<font color='red'>X</font>"
        buton2.disabled = true
        buton2.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton2.innerHTML = "<font color='blue'>O</font>"
        buton2.disabled = true
        buton2.style.cursor = "not-allowed"
    }
}
buton3.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton3.innerHTML = "<font color='red'>X</font>"
        buton3.disabled = true
        buton3.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton3.innerHTML = "<font color='blue'>O</font>"
        buton3.disabled = true
        buton3.style.cursor = "not-allowed"
    }
}
buton4.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton4.innerHTML = "<font color='red'>X</font>"
        buton4.disabled = true
        buton4.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton4.innerHTML = "<font color='blue'>O</font>"
        buton4.disabled = true
        buton4.style.cursor = "not-allowed"
    }
}
buton5.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton5.innerHTML = "<font color='red'>X</font>"
        buton5.disabled = true
        buton5.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton5.innerHTML = "<font color='blue'>O</font>"
        buton5.disabled = true
        buton5.style.cursor = "not-allowed"
    }
}
buton6.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton6.innerHTML = "<font color='red'>X</font>"
        buton6.disabled = true
        buton6.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton6.innerHTML = "<font color='blue'>O</font>"
        buton6.disabled = true
        buton6.style.cursor = "not-allowed"
    }
}
buton7.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton7.innerHTML = "<font color='red'>X</font>"
        buton7.disabled = true
        buton7.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton7.innerHTML = "<font color='blue'>O</font>"
        buton7.disabled = true
        buton7.style.cursor = "not-allowed"
    }
}
buton8.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton8.innerHTML = "<font color='red'>X</font>"
        buton8.disabled = true
        buton8.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton8.innerHTML = "<font color='blue'>O</font>"
        buton8.disabled = true
        buton8.style.cursor = "not-allowed"
    }
}
let Xpuan = 0
let Opuan = 0
const interval = setInterval(function(){
    if((buton.textContent == "X" && buton1.textContent == "X" && buton2.textContent == "X") || (buton3.textContent == "X" && buton4.textContent == "X" && buton5.textContent == "X") || (buton6.textContent == "X" && buton7.textContent == "X" && buton8.textContent == "X") || (buton.textContent == "X" && buton4.textContent == "X" && buton8.textContent == "X") || (buton2.textContent == "X" && buton4.textContent == "X" && buton6.textContent == "X") || (buton.textContent == "X" && buton3.textContent == "X" && buton6.textContent == "X") || (buton1.textContent == "X" && buton4.textContent == "X" && buton7.textContent == "X") || (buton2.textContent == "X" && buton5.textContent == "X" && buton8.textContent == "X")){
        alert("kazanan X")
        Xpuan++
        p1.textContent = "X puan: "+Xpuan
        document.querySelectorAll("button").forEach(item => {item.textContent = "ㅤ";item.disabled = false;item.style.cursor = "pointer"})

        buton.onclick = function(){
        if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton.innerHTML = "<font color='red'>X</font>"
        buton.disabled = true
        buton.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton.innerHTML = "<font color='blue'>O</font>"
        buton.disabled = true
        buton.style.cursor = "not-allowed"
    }
}
        buton1.onclick = function(){
    if(p.textContent === "sıra: O"){
        p.textContent = "sıra: X"
        buton1.innerHTML = "<font color='blue'>O</font>"
        buton1.disabled = true
        buton1.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: O"
        buton1.innerHTML = "<font color='red'>X</font>"
        buton1.disabled = true
        buton1.style.cursor = "not-allowed"
    }
}
buton2.onclick = function(){
    if(p.textContent === "sıra: O"){
        p.textContent = "sıra: X"
        buton2.innerHTML = "<font color='blue'>O</font>"
        buton2.disabled = true
        buton2.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: O"
        buton2.innerHTML = "<font color='red'>X</font>"
        buton2.disabled = true
        buton2.style.cursor = "not-allowed"
    }
}
buton3.onclick = function(){
    if(p.textContent === "sıra: O"){
        p.textContent = "sıra: X"
        buton3.innerHTML = "<font color='blue'>O</font>"
        buton3.disabled = true
        buton3.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: O"
        buton3.innerHTML = "<font color='red'>X</font>"
        buton3.disabled = true
        buton3.style.cursor = "not-allowed"
    }
}
buton4.onclick = function(){
    if(p.textContent === "sıra: O"){
        p.textContent = "sıra: X"
        buton4.innerHTML = "<font color='blue'>O</font>"
        buton4.disabled = true
        buton4.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: O"
        buton4.innerHTML = "<font color='red'>X</font>"
        buton4.disabled = true
        buton4.style.cursor = "not-allowed"
    }
}
buton5.onclick = function(){
    if(p.textContent === "sıra: O"){
        p.textContent = "sıra: X"
        buton5.innerHTML = "<font color='blue'>O</font>"
        buton5.disabled = true
        buton5.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: O"
        buton5.innerHTML = "<font color='red'>X</font>"
        buton5.disabled = true
        buton5.style.cursor = "not-allowed"
    }
}
buton6.onclick = function(){
    if(p.textContent === "sıra: O"){
        p.textContent = "sıra: X"
        buton6.innerHTML = "<font color='blue'>O</font>"
        buton6.disabled = true
        buton6.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: O"
        buton6.innerHTML = "<font color='red'>X</font>"
        buton6.disabled = true
        buton6.style.cursor = "not-allowed"
    }
}
buton7.onclick = function(){
    if(p.textContent === "sıra: O"){
        p.textContent = "sıra: X"
        buton7.innerHTML = "<font color='blue'>O</font>"
        buton7.disabled = true
        buton7.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: O"
        buton7.innerHTML = "<font color='red'>X</font>"
        buton7.disabled = true
        buton7.style.cursor = "not-allowed"
    }
}
buton8.onclick = function(){
    if(p.textContent === "sıra: O"){
        p.textContent = "sıra: X"
        buton8.innerHTML = "<font color='blue'>O</font>"
        buton8.disabled = true
        buton8.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: O"
        buton8.innerHTML = "<font color='red'>X</font>"
        buton8.disabled = true
        buton8.style.cursor = "not-allowed"
    }
}
    }

    else if((buton.textContent == "O" && buton1.textContent == "O" && buton2.textContent == "O") || (buton3.textContent == "O" && buton4.textContent == "O" && buton5.textContent == "O") || (buton6.textContent == "O" && buton7.textContent == "O" && buton8.textContent == "O") || (buton.textContent == "O" && buton4.textContent == "O" && buton8.textContent == "O") || (buton2.textContent == "O" && buton4.textContent == "O" && buton6.textContent == "O") || (buton.textContent == "O" && buton3.textContent == "O" && buton6.textContent == "O") || (buton1.textContent == "O" && buton4.textContent == "O" && buton7.textContent == "O") || (buton2.textContent == "O" && buton5.textContent == "O" && buton8.textContent == "O")){
        alert("kazanan O")
        Opuan++
        p2.textContent = "O puan: "+Opuan
        document.querySelectorAll("button").forEach(item => {item.textContent = "ㅤ";item.disabled = false;item.style.cursor = "pointer"})

        buton.onclick = function(){
        if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton.innerHTML = "<font color='red'>X</font>"
        buton.disabled = true
        buton.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton.innerHTML = "<font color='blue'>O</font>"
        buton.disabled = true
        buton.style.cursor = "not-allowed"
    }
}
buton1.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton1.innerHTML = "<font color='red'>X</font>"
        buton1.disabled = true
        buton1.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton1.innerHTML = "<font color='blue'>O</font>"
        buton1.disabled = true
        buton1.style.cursor = "not-allowed"
    }
}
buton2.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton2.innerHTML = "<font color='red'>X</font>"
        buton2.disabled = true
        buton2.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton2.innerHTML = "<font color='blue'>O</font>"
        buton2.disabled = true
        buton2.style.cursor = "not-allowed"
    }
}
buton3.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton3.innerHTML = "<font color='red'>X</font>"
        buton3.disabled = true
        buton3.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton3.innerHTML = "<font color='blue'>O</font>"
        buton3.disabled = true
        buton3.style.cursor = "not-allowed"
    }
}
buton4.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton4.innerHTML = "<font color='red'>X</font>"
        buton4.disabled = true
        buton4.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton4.innerHTML = "<font color='blue'>O</font>"
        buton4.disabled = true
        buton4.style.cursor = "not-allowed"
    }
}
buton5.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton5.innerHTML = "<font color='red'>X</font>"
        buton5.disabled = true
        buton5.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton5.innerHTML = "<font color='blue'>O</font>"
        buton5.disabled = true
        buton5.style.cursor = "not-allowed"
    }
}
buton6.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton6.innerHTML = "<font color='red'>X</font>"
        buton6.disabled = true
        buton6.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton6.innerHTML = "<font color='blue'>O</font>"
        buton6.disabled = true
        buton6.style.cursor = "not-allowed"
    }
}
buton7.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton7.innerHTML = "<font color='red'>X</font>"
        buton7.disabled = true
        buton7.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton7.innerHTML = "<font color='blue'>O</font>"
        buton7.disabled = true
        buton7.style.cursor = "not-allowed"
    }
}
buton8.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton8.innerHTML = "<font color='red'>X</font>"
        buton8.disabled = true
        buton8.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton8.innerHTML = "<font color='blue'>O</font>"
        buton8.disabled = true
        buton8.style.cursor = "not-allowed"
    }
}
    }
    else if(buton.textContent != "ㅤ" && buton1.textContent != "ㅤ" && buton2.textContent != "ㅤ" && buton3.textContent != "ㅤ" && buton4.textContent != "ㅤ" && buton5.textContent != "ㅤ" && buton6.textContent != "ㅤ" && buton7.textContent != "ㅤ" && buton8.textContent != "ㅤ"){
        alert("hiç kimse kazanamadı!")
        document.querySelectorAll("button").forEach(item => {item.textContent = "ㅤ";item.disabled = false;item.style.cursor = "pointer"})
        if(p.textContent == "sıra: X"){

        buton.onclick = function(){
        if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton.innerHTML = "<font color='red'>X</font>"
        buton.disabled = true
        buton.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton.innerHTML = "<font color='blue'>O</font>"
        buton.disabled = true
        buton.style.cursor = "not-allowed"
    }
}
buton1.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton1.innerHTML = "<font color='red'>X</font>"
        buton1.disabled = true
        buton1.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton1.innerHTML = "<font color='blue'>O</font>"
        buton1.disabled = true
        buton1.style.cursor = "not-allowed"
    }
}
buton2.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton2.innerHTML = "<font color='red'>X</font>"
        buton2.disabled = true
        buton2.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton2.innerHTML = "<font color='blue'>O</font>"
        buton2.disabled = true
        buton2.style.cursor = "not-allowed"
    }
}
buton3.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton3.innerHTML = "<font color='red'>X</font>"
        buton3.disabled = true
        buton3.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton3.innerHTML = "<font color='blue'>O</font>"
        buton3.disabled = true
        buton3.style.cursor = "not-allowed"
    }
}
buton4.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton4.innerHTML = "<font color='red'>X</font>"
        buton4.disabled = true
        buton4.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton4.innerHTML = "<font color='blue'>O</font>"
        buton4.disabled = true
        buton4.style.cursor = "not-allowed"
    }
}
buton5.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton5.innerHTML = "<font color='red'>X</font>"
        buton5.disabled = true
        buton5.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton5.innerHTML = "<font color='blue'>O</font>"
        buton5.disabled = true
        buton5.style.cursor = "not-allowed"
    }
}
buton6.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton6.innerHTML = "<font color='red'>X</font>"
        buton6.disabled = true
        buton6.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton6.innerHTML = "<font color='blue'>O</font>"
        buton6.disabled = true
        buton6.style.cursor = "not-allowed"
    }
}
buton7.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton7.innerHTML = "<font color='red'>X</font>"
        buton7.disabled = true
        buton7.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton7.innerHTML = "<font color='blue'>O</font>"
        buton7.disabled = true
        buton7.style.cursor = "not-allowed"
    }
}
buton8.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton8.innerHTML = "<font color='red'>X</font>"
        buton8.disabled = true
        buton8.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton8.innerHTML = "<font color='blue'>O</font>"
        buton8.disabled = true
        buton8.style.cursor = "not-allowed"
    }
}
        }
else{
    buton.onclick = function(){
        if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton.innerHTML = "<font color='red'>X</font>"
        buton.disabled = true
        buton.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton.innerHTML = "<font color='blue'>O</font>"
        buton.disabled = true
        buton.style.cursor = "not-allowed"
    }
}

buton1.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton1.innerHTML = "<font color='red'>X</font>"
        buton1.disabled = true
        buton1.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton1.innerHTML = "<font color='blue'>O</font>"
        buton1.disabled = true
        buton1.style.cursor = "not-allowed"
    }
}
buton2.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton2.innerHTML = "<font color='red'>X</font>"
        buton2.disabled = true
        buton2.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton2.innerHTML = "<font color='blue'>O</font>"
        buton2.disabled = true
        buton2.style.cursor = "not-allowed"
    }
}
buton3.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton3.innerHTML = "<font color='red'>X</font>"
        buton3.disabled = true
        buton3.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton3.innerHTML = "<font color='blue'>O</font>"
        buton3.disabled = true
        buton3.style.cursor = "not-allowed"
    }
}
buton4.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton4.innerHTML = "<font color='red'>X</font>"
        buton4.disabled = true
        buton4.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton4.innerHTML = "<font color='blue'>O</font>"
        buton4.disabled = true
        buton4.style.cursor = "not-allowed"
    }
}
buton5.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton5.innerHTML = "<font color='red'>X</font>"
        buton5.disabled = true
        buton5.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton5.innerHTML = "<font color='blue'>O</font>"
        buton5.disabled = true
        buton5.style.cursor = "not-allowed"
    }
}
buton6.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton6.innerHTML = "<font color='red'>X</font>"
        buton6.disabled = true
        buton6.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton6.innerHTML = "<font color='blue'>O</font>"
        buton6.disabled = true
        buton6.style.cursor = "not-allowed"
    }
}
buton7.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton7.innerHTML = "<font color='red'>X</font>"
        buton7.disabled = true
        buton7.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton7.innerHTML = "<font color='blue'>O</font>"
        buton7.disabled = true
        buton7.style.cursor = "not-allowed"
    }
}
buton8.onclick = function(){
    if(p.textContent === "sıra: X"){
        p.textContent = "sıra: O"
        buton8.innerHTML = "<font color='red'>X</font>"
        buton8.disabled = true
        buton8.style.cursor = "not-allowed"
    }
    else{
        p.textContent = "sıra: X"
        buton8.innerHTML = "<font color='blue'>O</font>"
        buton8.disabled = true
        buton8.style.cursor = "not-allowed"
    }
}
}
    }
    if(Xpuan >= 5 && Xpuan > Opuan){
        alert("Oyun bitti! kazanan X")
        clearInterval(interval)
        window.location.reload()
    }
    else if(Opuan >=5 && Opuan > Xpuan){
        alert("Oyun bitti! kazanan O")
        clearInterval(interval)
        window.location.reload()
    }
    else if(Xpuan >=5 && Opuan >=5){
        clearInterval(interval)
        alert("Oyun bitti kimse kazanamadı!")
        window.location.reload()
    }
})
