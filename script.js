

const scriptURL = 'https://script.google.com/macros/s/AKfycbzF3vmeE-jGvIxRbrc_pLpXA1jMoagiZU8I5pCnpbZPyZhc2JcsXoFr_1Pv7FML83FI/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
                Swal.fire("Sent", "Thanks for connecting!", "success");
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})




var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.target.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");
function closemenu() {
    sidemenu.style.right = "-200px";
}
function openmenu() {
    sidemenu.style.right = "0";
}

var width = window.innerWidth;
var height = window.innerHeight;

var tl = gsap.timeline();


if (width > 600) {
    tl.from('.navitem', {
        stagger: .3,
        delay: 3,
        duration: 2,
        y: 20,
        ease: 'Expo.easeInOut',
        opacity: 0
    })
        .from('.leftitem', {
            stagger: .3,
            duration: 2,
            y: 20,
            ease: 'Expo.easeInOut',
            opacity: 0
        }, '-=2')
} 
