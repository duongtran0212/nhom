// JavaScript for skills bar animation
window.addEventListener('load', function() {
    const progressBars = document.querySelectorAll('.progress div');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});

// JavaScript for profile image hover effect
const profileImg = document.getElementById('profile-img');
profileImg.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});
profileImg.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Cảm ơn, ${name}! Chúng tôi sẽ liên hệ với bạn qua email: ${email}.`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
});