const links = document.querySelectorAll(".sidebar a");
links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(a => a.classList.remove("active"));
        this.classList.add("active");
    });
});

const sections = document.querySelectorAll(".section-block");
function reveal() {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) sec.classList.add("show");
    });
}
window.addEventListener("scroll", reveal);
reveal();

const bars = document.querySelectorAll(".progress-bar");
function fillBars() {
    bars.forEach(bar => {
        const top = bar.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            bar.style.width = bar.dataset.width;
            bar.style.transition = "1.2s";
        }
    });
}
window.addEventListener("scroll", fillBars);
fillBars();

let grid = true;
function toggleProjects() {
    const container = document.getElementById("projectContainer");
    const items = container.children;
    if(grid){
        Array.from(items).forEach(item => { item.classList.remove("col-md-4"); item.style.width="100%"; });
        grid=false;
    } else {
        Array.from(items).forEach(item => { item.classList.add("col-md-4"); item.style.width=""; });
        grid=true;
    }
}

document.getElementById("toggleDark").onclick = () => {
    document.body.classList.toggle("dark");
};

document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");
    if(!name || !email || !msg){
        formMsg.textContent="Please fill all fields.";
        formMsg.style.color="red";
    } else {
        formMsg.textContent="Message sent successfully!";
        formMsg.style.color="green";
        document.getElementById("contactForm").reset();
    }
});

const texts = ["Computer Science Student", "Web Developer", "Problem Solver"];
let i = 0, j = 0, currentText = "", isDeleting = false;
const speed = 100;
const typedElement = document.getElementById("typed-text");

function type(){
    if(i >= texts.length) i = 0;
    const fullText = texts[i];
    if(isDeleting){
        currentText = fullText.substring(0, currentText.length - 1);
    } else {
        currentText = fullText.substring(0, currentText.length + 1);
    }
    typedElement.textContent = currentText;
    if(!isDeleting && currentText === fullText){
        setTimeout(()=>{isDeleting = true; type();}, 1000);
        return;
    } else if(isDeleting && currentText === ""){
        isDeleting = false;
        i++;
    }
    setTimeout(type, isDeleting ? speed/2 : speed);
}
type();
