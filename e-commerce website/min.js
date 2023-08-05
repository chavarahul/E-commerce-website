function Bgcolor() {
    let navbar1= document.getElementById('mynavbar');
    let ScrollValue = window.scrollY;
    if (ScrollValue < 200) {
        navbar1.classList.remove('Bgcolor');
    } else {
        navbar1.classList.add('Bgcolor');
    }
}
window.addEventListener('scroll', Bgcolor);

