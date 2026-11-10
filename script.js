
// 1. แสดงข้อความต้อนรับ
window.addEventListener("load", function() {
    alert("ยินดีต้อนรับเข้าสู่ Portfolio ของฉัน!");
});


// 2. เอฟเฟกต์เมื่อเลื่อนหน้าเว็บ
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});


// 3. เปลี่ยนสี Header เมื่อเลื่อนหน้าเว็บ
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#182b4a";
    } else {
        header.style.background = "#243b64";
    }
});


// 4. แสดงปีปัจจุบันใน Footer
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// 5. ปุ่มกลับไปด้านบน
const topButton = document.querySelector("#backToTop");

if (topButton) {
    window.addEventListener("scroll", function() {
        topButton.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    topButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
