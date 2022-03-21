const containter = document.querySelector('.container')
const containter2 = document.querySelector('.container2')
const containter3 = document.querySelector('.container3')
const h1 = document.getElementById("wish")
const audio = document.querySelector("audio")
audio.volume = 0.1
image = document.getElementById('image')
const cards = 35
const timeout = 5000
var i = 0
var k = 1
var licznik = 1
image.src = 'photos/' + 1 + '.jpeg'

function swiching() {
    containter.style.backgroundImage = "url('photos/" + licznik + ".jpeg')"
    if (licznik == cards) {
        containter2.style.backgroundImage = "url('photos/" + 1 + ".jpeg')"
        containter3.style.backgroundImage = "url('photos/" + 2 + ".jpeg')"
    } else if (licznik == cards - 1) {
        containter2.style.backgroundImage = "url('photos/" + cards + ".jpeg')"
        containter3.style.backgroundImage = "url('photos/" + 1 + ".jpeg')"
    } else {
        containter2.style.backgroundImage = "url('photos/" + (licznik + 1) + ".jpeg')"
        containter3.style.backgroundImage = "url('photos/" + (licznik + 2) + ".jpeg')"
    }
}

function next() {
    console.log(k)
    k++
    i++
    if (licznik == cards) {
        licznik = 0
    }
    if (i == 3) {
        i = 0
    }
    setTimeout(function () {
        adress = 'photos/' + (licznik + 1) + '.jpeg'
        image.src = adress
        licznik++
        switch (adress) {
            case 'photos/2.jpeg':
                h1.innerHTML = "No staruchu!"
                break
            case 'photos/3.jpeg':
                h1.innerHTML = "Czas Cię nie oszczędził!"
                break
            case 'photos/4.jpeg':
                h1.innerHTML = "Ale nie ma lipy!"
                break
            case 'photos/5.jpeg':
                h1.innerHTML = "Wciąż wyglądasz zabójczo!"
                break
            case 'photos/6.jpeg':
                h1.innerHTML = "Jak widać nie możesz się ogonić od chłopów!"
                break
            case 'photos/7.jpeg':
                h1.innerHTML = "Głowa wciąż mocna!"
                break
            case 'photos/8.jpeg':
                h1.innerHTML = "Chyba nawet zbyt mocna xD"
                break
            case 'photos/9.jpeg':
                h1.innerHTML = "No to babo, najwyższa pora na życzonka!"
                break
            case 'photos/10.jpeg':
                h1.innerHTML = "Wszystkiego najlepszego!"
                break
            case 'photos/11.jpeg':
                h1.innerHTML = "Niech Ci świeci słońce jasno!"
                break
            case 'photos/12.jpeg':
                h1.innerHTML = "Niechaj wóda wchodzi masno!"
                break
            case 'photos/13.jpeg':
                h1.innerHTML = "Rusztowanie twardo stało!"
                break
            case 'photos/14.jpeg':
                h1.innerHTML = "I na głowę nie padało!"
                break
            case 'photos/15.jpeg':
                h1.innerHTML = "Diabelnie dobrego życia!"
                break
            case 'photos/16.jpeg':
                h1.innerHTML = "Z bliskimi sztamy!"
                break
            case 'photos/17.jpeg':
                h1.innerHTML = "No i najważniejsze"
                break
            case 'photos/18.jpeg':
                h1.innerHTML = "Nie spal chaty!"
                break
            case 'photos/19.jpeg':
                h1.innerHTML = "Ani z drzewa nie spadnij!"
                break
            case 'photos/20.jpeg':
                h1.innerHTML = "Znajdź w końcu wszystkie ikonki!"
                break
            case 'photos/21.jpeg':
                h1.innerHTML = "Wyśpij się wreszcie!"
                break
            case 'photos/22.jpeg':
                h1.innerHTML = "Uśmiechaj się jeszcze częściej!"
                break
            case 'photos/23.jpeg':
                h1.innerHTML = "Nie wstydź się tego kim jesteś!"
                break
            case 'photos/24.jpeg':
                h1.innerHTML = "Bo jesteś mega!"
                break
            case 'photos/25.jpeg':
                h1.innerHTML = "Super i ogólnie zajebista!"
                break
            case 'photos/26.jpeg':
                h1.innerHTML = "Dlatego jeszcze raz z całego serca"
                break
            case 'photos/27.jpeg':
                h1.innerHTML = "Chciałbym życzyć Ci!"
                break
            case 'photos/28.jpeg':
                h1.innerHTML = "Stu lat!"
                break
            case 'photos/29.jpeg':
                h1.innerHTML = "W szczęściu!"
                break
            case 'photos/30.jpeg':
                h1.innerHTML = "W zdrowiu!"
                break
            case 'photos/31.jpeg':
                h1.innerHTML = "A no i oczywiście dziękuję Ci!"
                break
            case 'photos/32.jpeg':
                h1.innerHTML = "Za Twoje wsparcie! <3"
                break
            case 'photos/33.jpeg':
                h1.innerHTML = "Powodzenia w dalszym życiu!"
                break
            case 'photos/34.jpeg':
                h1.innerHTML = "Najlepszego mordeczko! <3"
                break
            case 'photos/35.jpeg':
                h1.innerHTML = "Ciao!"
                break
        }
    }, 500)
    setTimeout(function () {
        swiching()

    }, 500)
}

function back() {
    if (licznik == 1) {
        licznik = cards + 1
    }
    if (i == 0) {
        i = 2
    } else {
        i--
    }
    adress = 'photos/' + (licznik - 1) + '.jpeg'
    image.src = adress
    licznik--
    setTimeout(function () {
        swiching()
    }, 500)
}
document.getElementById('next').addEventListener("click", () => {
    next()
})
document.getElementById('back').addEventListener("click", () => {
    back()
})
const playbutton = document.getElementById('playbutton')

function playbutton1() {
   // document.getElementById('slider').style.backgroundColor = 'rgba(0, 0, 0, 0.616)'
   // document.getElementById('image').style.removeProperty('filter')
    playbutton.classList.remove('fa-pause')
    playbutton.classList.add('fa-play')
    playbutton.style.removeProperty('filter')
    clearInterval(t)
    audio.pause()
}
play.addEventListener("click", function () {

    if (playbutton.classList.contains('fa-pause')) {
        //h1.style.filter = "blur(20px)"
        playbutton1()
    } else {
        h1.style.filter = "blur(0px)"
        audio.play()
        document.getElementById('slider').style.backgroundColor = 'rgba(0, 0, 0, 0)'
        document.getElementById('image').style.filter = 'brightness(100%)'
        playbutton.classList.remove('fa-play')
        playbutton.classList.add('fa-pause')
        playbutton.style.filter = 'opacity(20%)'
        t = setInterval(function () {
            if (licznik == (cards)) {
                playbutton1()
                audio.currentTime = 0
            }
            containter.style.opacity = 0
            next()
            setTimeout(function () {
                containter.style.opacity = 1
            }, 500)
        }, timeout)}})
const mute = document.querySelector(".mute")
const muteicon = document.getElementById("muteicon")
mute.addEventListener("click", function () {
    if (muteicon.classList.contains('fa-volume-xmark')) {
        muteicon.classList.remove('fa-volume-xmark')
        muteicon.classList.add('fa-volume-high')
        audio.volume = 0.1
    } else {
        muteicon.classList.remove('fa-volume-high')
        muteicon.classList.add('fa-volume-xmark')
        audio.volume = 0
    }
})