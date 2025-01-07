if (/Mobi|Android/i.test(navigator.userAgent)) {
    document.body.innerHTML = `
        <h1 class="res-title">Access Denied<h1>
        <p class="res-msg">This website is not accessible on mobile browsers, switch to desktop mode</p>
    `;
    document.body.className = "cent";
}



const header = document.getElementById("header");


window.addEventListener("scroll", () => 
{
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        header.classList.remove("default");
    }   else {
        header.classList.add("default");
        header.classList.remove("scrolled");
    }
});







