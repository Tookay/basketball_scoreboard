let homePts = document.getElementById("home-pts")
let guestPts = document.getElementById("guest-pts")
let homeCount = 0
let guestCount = 0

function homeone(){
    homeCount+= 1
    homePts.textContent = homeCount
    
}
function hometwo(){
    homeCount+= 2
    homePts.textContent = homeCount

}
function homethree(){
    homeCount+= 3
    homePts.textContent = homeCount

}
function guestone(){
    guestCount+= 1
    guestPts.textContent = guestCount
    
}
function guesttwo(){
    guestCount+= 2
    guestPts.textContent = guestCount

}
function guestthree(){
    guestCount+= 3
    guestPts.textContent = guestCount

}