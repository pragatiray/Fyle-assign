// Get the modal
var modal = document.getElementById("contactForm");

// Get the button that opens the modal
var btn = document.getElementById("contactBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeBtn")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}


//FOR SLIDER


const slides = document.querySelector('.slides');
        const images = document.querySelectorAll('.slides img');
        const buttons = document.querySelectorAll('.navigation button');
        let index = 0;

        function showSlide(n) {
            index = (n + images.length) % images.length;
            slides.style.transform = `translateX(${-index * 100}%)`;
            updateButtons();
        }

        function updateButtons() {
            buttons.forEach((button, i) => {
                if (i === index % buttons.length) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }

        buttons.forEach((button, i) => {
            button.addEventListener('click', () => showSlide(i));
        });
        setInterval(() => showSlide(index + 1), 3000);













