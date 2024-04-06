// typing js

var typed = new Typed('#element', {
    strings: ["MERN Stack Developer", "UX/UI Designer"],
    typeSpeed: 90,
    backSpeed: 70,
    loop: true
});

// responsive navbar

let menu = document.querySelector("#navLinks");
let menuIcon = document.querySelector(".menu-icon i");

menu.style.maxHeight = "0";

menuIcon.addEventListener("click", () => {
    if (menu.style.maxHeight === "0px") {
        menu.style.maxHeight = "380px";
        menuIcon.classList.add("bx-x")
    } else {
        menu.style.maxHeight = "0";
        menuIcon.classList.remove("bx-x")
    }
});


// circuler progress bar

const numbs = document.querySelectorAll(".numb");

numbs.forEach((numb, index) => {
    let counter = 0;
    const targetPercentage = 100; // Set the target value to 100 for each progress bar
    const speed = 20;

    const interval = setInterval(() => {
        if (counter >= targetPercentage) {
            clearInterval(interval);
        } else {
            counter += 1;
            numb.textContent = counter + "%";
        }
    }, speed);
});

// form input

var formInputs = document.querySelectorAll('.form-container input, .form-container textarea');

// Add focus event listeners to each input and textarea
formInputs.forEach(function (input) {
    input.addEventListener('focus', function () {
        // Remove placeholder on focus
        input.removeAttribute('placeholder');
    });

    // Add blur event listeners to each input and textarea
    input.addEventListener('blur', function () {
        // Restore placeholder on blur if the field is empty
        if (input.value.trim() === '') {
            input.setAttribute('placeholder', input.getAttribute('data-placeholder'));
        }
    });

    // Save the initial placeholder value
    input.setAttribute('data-placeholder', input.getAttribute('placeholder'));
});

// to top btn

var mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// gsap animation

// Ensure the DOM content is fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // // Animate portfolio items
    // gsap.from(".skill-container .right", {
    //     opacity: 0,
    //     duration: 3,
    //     delay: 0.5,
    //     stagger: 0.2,
    //     scrollTrigger: {
    //         trigger: ".skill-container", // Change trigger to the container of the portfolio items
    //         start: "top 40%", // Adjust the start position as needed
    //         end: "bottom 80%", // Adjust the end position as needed
    //         scrub: 2, // Adjust the scrub value as needed
    //         // markers: true // Remove this line if you don't want markers for debugging
    //     }
    // });
    // Animate portfolio items
    // gsap.from(".skill-container .left", {
    //     opacity: 0,
    //     duration: 20,
    //     delay: 1,
    //     stagger: 0.2,
    //     scrollTrigger: {
    //         trigger: ".skill-container", // Change trigger to the container of the portfolio items
    //         start: "top 40%", // Adjust the start position as needed
    //         end: "bottom 80%", // Adjust the end position as needed
    //         scrub: 4, // Adjust the scrub value as needed
    //         // markers: true // Remove this line if you don't want markers for debugging
    //     }
    // });
    // Animate portfolio items
    gsap.from(".portfolio-container .project-item", {
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".portfolio-container", // Change trigger to the container of the portfolio items
            start: "top 100%", // Adjust the start position as needed
            end: "bottom 80%", // Adjust the end position as needed
            scrub: 2, // Adjust the scrub value as needed
            // markers: true // Remove this line if you don't want markers for debugging
        }
    });
    gsap.from(".form-container", {
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".form-container", // Change trigger to the container of the portfolio items
            start: "top 100%", // Adjust the start position as needed
            end: "bottom 80%", // Adjust the end position as needed
            scrub: 4, // Adjust the scrub value as needed
            // markers: true // Remove this line if you don't want markers for debugging
        }
    });
});
