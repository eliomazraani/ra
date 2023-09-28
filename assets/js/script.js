function dropDownContent() {
    $('.vectorDown').toggleClass('switch');
    $('.vectorUp').toggleClass('switch');
    $('.dropDownContent').toggleClass('show');
}

function dropDownMenu() {
    $('#burgerMenu').toggleClass('switch');
    $('#close').toggleClass('switch');
    $('.navLinks').toggleClass('show');
    if ($('.dropDownContent').hasClass('show') && $('.vectorUp').hasClass('switch')) {
        dropDownContent();
    }
}

function thankYou() {
    $('.apply').removeClass('open');
    $('.thanks').toggleClass('open');
    $('#contactForm input').val('');
    $('#message').val('');
}

function jobPosition(num) {
    applyNow();
    switch (num) {
        case 1:
            $("#jobPositionName").text("Coordinator");
            break;
        case 2:
            $("#jobPositionName").text("Wardrobe");
            break;
    }
}

function applyNow() {
    $('.apply').toggleClass('open');
    $('#applyForm input').val('');
    $('#applyForm input').css('border', '');
    $('#applyForm .unselected').css('border', '');
    if (!$("#applyForm .unselected").hasClass("seen")) {
        $(".uploadFile").toggleClass('seen');
    }
}

var file;
var reader = new FileReader();
var fileData;

function fileSelected(input) {
    $(".uploadFile").toggleClass('seen');
    const fileName = input.files[0].name;
    $("#fileName").text(fileName);
    file = input.files[0];
}

function removeFile(event) {
    event.preventDefault();
    event.stopPropagation();
    $("#upload").val('');
    $(".uploadFile").toggleClass('seen');
    $("#fileName").text("");
}

function scrollToContact() {
    if ($(".narrow .navLinks").hasClass("show")) {
        if ($(".narrow .dropDownContent").hasClass("show")) {
            dropDownContent();
        }
        dropDownMenu();
    }

    $('html, body').animate({
        scrollTop: $(".contact").offset().top - 92
    }, 1000);
}

function checkURL() {
    var currentUrl = window.location.href;
    if (currentUrl.endsWith('/')) {
        $('.toHome').removeAttr('href');
        $('.lp').addClass('selected');
    } else if (currentUrl.endsWith('about.html')) {
        $('.toHome').attr('href', '/');
        $('.ap').addClass('selected');
    } else if (currentUrl.endsWith('choreography.html') || currentUrl.endsWith('choreographyService.html')) {
        $('.toHome').attr('href', '/');
        $('.toHome img').attr('src', 'assets/img/LogoGreen.png');
        $('.sp').addClass('selected');
        $('.chp').addClass('selected');
        $('.button').addClass('green');
    } else if (currentUrl.endsWith('design.html') || currentUrl.endsWith('designService.html')) {
        $('.toHome').attr('href', '/');
        $('.toHome img').attr('src', 'assets/img/LogoPink.png');
        $('.sp').addClass('selected');
        $('.des').addClass('selected');
        $('.button').addClass('pink');
    } else if (currentUrl.endsWith('art.html') || currentUrl.endsWith('artService.html')) {
        $('.toHome').attr('href', '/');
        $('.toHome img').attr('src', 'assets/img/LogoPurple.png');
        $('.sp').addClass('selected');
        $('.art').addClass('selected');
        $('.button').addClass('purple');
    } else if (currentUrl.endsWith('coaching.html')) {
        $('.toHome').attr('href', '/');
        $('.sp').addClass('selected');
        $('.stl').addClass('selected');
        $('.button').addClass('peach');
    } else if (currentUrl.endsWith('joinUs.html') || currentUrl.endsWith('joinus')) {
        $('.toHome').attr('href', '/');
        $('.tp').addClass('selected');
    }
}

function socialMedia(url) {
    window.open(url, "_blank");
}

function goTo(url) {
    window.location.href = url;
}

let serviceIndex = 1;
showServiceSlide(serviceIndex);

function nextSlides(n) {
    showServiceSlide(serviceIndex += n);
}

function showServiceSlide(n) {
    let i;
    let services = document.querySelectorAll('.narrow .block');
    if (n > services.length) {
        serviceIndex = 1
    }
    if (n < 1) {
        serviceIndex = services.length
    }
    for (i = 0; i < services.length; i++) {
        services[i].style.display = "none";
    }
    if (services.length > 0) {
        services[serviceIndex - 1].style.display = "flex";
    }
}

let clientIndex = 1;
showClients(clientIndex);

function plusSlides(n) {
    showClients(clientIndex += n);
}

function showClients(n) {
    let i;
    let clients = document.querySelectorAll('.wide .clientLogo');
    if (n > clients.length) {
        clientIndex = 1
    }
    if (n < 1) {
        clientIndex = clients.length
    }
    for (i = 0; i < clients.length; i++) {
        clients[i].style.display = "none";
    }
    if (clients.length > 0) {
        clients[clientIndex - 1].style.display = "flex";
    }
}

let testimonialIndex = 0;

function showTestimonials() {
    let testimonials = document.getElementsByClassName("clientTestimonial");
    let dotsContainer = document.querySelector(".dots");

    if (testimonials.length === 0) {
        return;
    }

    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }

    testimonialIndex++;
    if (testimonialIndex > testimonials.length) {
        testimonialIndex = 1;
    }

    updateDots(dotsContainer, testimonials.length, testimonialIndex);

    testimonials[testimonialIndex - 1].style.display = "block";

    setTimeout(showTestimonials, 5000);
}

function updateDots(container, total, activeIndex) {
    container.innerHTML = "";

    for (let i = 0; i < total; i++) {
        let dot = document.createElement("span");
        dot.className = "dot";
        if (i === activeIndex - 1) {
            dot.className += " active";
        }
        container.appendChild(dot);
    }
}

function serviceShow(num) {
    const currentUrl = window.location.href;

    const tabs = document.querySelectorAll('.tabs a');
    if (currentUrl.endsWith('choreography.html')) {
        tabs.forEach(tab => tab.classList.remove('green'));
    } else if (currentUrl.endsWith('design.html')) {
        tabs.forEach(tab => tab.classList.remove('pink'));
    }

    const clickedTab = document.querySelector(`.tabs a:nth-child(${num})`);
    if (currentUrl.endsWith('choreography.html')) {
        clickedTab.classList.add('green');
    } else if (currentUrl.endsWith('design.html')) {
        clickedTab.classList.add('pink');
    }

    const serviceGrids = document.querySelectorAll('.servicesGrid .grid');
    serviceGrids.forEach(grid => grid.classList.add('d-none'));

    const selectedGrid = document.querySelector(`.service-${num}`);
    selectedGrid.classList.remove('d-none');
}


(function () {
    emailjs.init("4uIfK9PIMmhm3l7HF");
})();

function sendEmail() {
    event.preventDefault();

    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var phoneNumber = document.getElementById('phoneNumber');
    var email = document.getElementById('email');
    var message = document.getElementById('message');

    if (firstName.value === '' || lastName.value === '' || phoneNumber.value === '' || email.value === '' || message.value === '') {
        alert("Please fill in all the required fields.");

        if (firstName.value === '') {
            firstName.style.border = '1px solid red';
        }
        if (lastName.value === '') {
            lastName.style.border = '1px solid red';
        }
        if (phoneNumber.value === '') {
            phoneNumber.style.border = '1px solid red';
        }
        if (email.value === '') {
            email.style.border = '1px solid red';
        }
        if (message.value === '') {
            message.style.border = '1px solid red';
        }

        return;
    }

    var templateParams = {
        from_name: firstName.value + ' ' + lastName.value,
        phone_number: phoneNumber.value,
        email: email.value,
        message: message.value
    };

    emailjs.send("service_3bod7np", "template_4hd3fvm", templateParams)
        .then(function (response) {
            console.log('Email sent successfully!', response.status, response.text);
            thankYou();
        }, function (error) {
            console.log('Email sending failed!', error);
        });
}


function applyJob() {
    event.preventDefault();

    var jobPositionName = document.getElementById('jobPositionName').textContent;
    var firstName = document.getElementById('fName');
    var lastName = document.getElementById('lName');
    var phoneNumber = document.getElementById('telephone');
    var email = document.getElementById('mail');
    var linkedin = document.getElementById('linkedin').value;
    var portfolio = document.getElementById('portfolio').value;
    var upload = document.getElementById('upload');

    if (firstName.value === '' || lastName.value === '' || phoneNumber.value === '' || email.value === '' || upload.value === '') {
        alert("Please fill in all the required fields.");

        if (firstName.value === '') {
            firstName.style.border = '1px solid red';
        }
        if (lastName.value === '') {
            lastName.style.border = '1px solid red';
        }
        if (phoneNumber.value === '') {
            phoneNumber.style.border = '1px solid red';
        }
        if (email.value === '') {
            email.style.border = '1px solid red';
        }
        if (upload.value === '') {
            $("#applyForm .unselected").css("border", "1px solid red");
        }

        return;
    }

    var templateParams = {
        from_name: firstName.value + ' ' + lastName.value,
        job_name: jobPositionName,
        phone_number: phoneNumber.value,
        email: email.value,
        linkedin: linkedin,
        portfolio: portfolio,
        file_data: fileData
    };

    if (file) {
        reader.onloadend = function (event) {
            var fileData = event.target.result;
            templateParams.file_data = fileData;
            sendEmailWithAttachment(templateParams);
        };
        reader.readAsDataURL(file);
    } else {
        sendEmailWithAttachment(templateParams);
    }
}

function sendEmailWithAttachment(templateParams) {
    emailjs.send("service_3bod7np", "template_fqztz8l", templateParams)
        .then(function (response) {
            console.log('Email sent successfully!', response.status, response.text);
            thankYou();
        }, function (error) {
            console.log('Email sending failed!', error);
        });
}

function showModal(img) {
    var modal = document.getElementById("galleryModal");
    var modalImg = document.getElementById("galleryImg");
    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("galleryModal");
    modal.style.display = "none";

}

let currentIndex = 0;

function updateGallery(num) {
    const gallery = document.querySelector('.gallery');
    const images = gallery.querySelectorAll('img');
    currentIndex = currentIndex + num;
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > images.length - 2) {
        currentIndex = images.length - 2;
    }

    const translateXValue = -currentIndex * 50;
    gallery.style.transform = `translateX(${translateXValue}%)`;
}

var currentUrl = window.location.href;
let displayCatalogue = document.getElementsByClassName("displayCatalogue");
let activeIndex = 1;
function updatePagination() {
    let numberingContainer = document.querySelector(".numbering");
    numberingContainer.innerHTML = "";

    if (activeIndex === 1) {
        $(".pageLeft").addClass("disabled");
    }

    for (let i = 1; i <= displayCatalogue.length; i++) {
        let number = document.createElement("span");
        number.innerHTML = `${i}`;
        number.onclick = function () {
            goToPage(i);
        }
        if (i === activeIndex) {
            if (currentUrl.endsWith('designService.html')) {
                number.className += "pink active";
            } else if (currentUrl.endsWith('choreographyService.html')) {
                number.className += "green active";
            }
        }
        numberingContainer.appendChild(number);
    }
}

function goToPage(num) {
    activeIndex = num;

    if (num === 1) {
        $(".pageRight").removeClass("disabled");
        $(".pageLeft").addClass("disabled");
    } else if (num === displayCatalogue.length) {
        $(".pageLeft").removeClass("disabled");
        $(".pageRight").addClass("disabled");
    } else {
        $(".pageLeft").removeClass("disabled");
        $(".pageRight").removeClass("disabled");
    }

    const spans = document.querySelectorAll('.numbering span');
    if (currentUrl.endsWith('designService.html')) {
        spans.forEach(tab => tab.classList.remove('pink', 'active'));
    } else if (currentUrl.endsWith('choreographyService.html')) {
        spans.forEach(tab => tab.classList.remove('green', 'active'));
    }

    const clickedSpan = document.querySelector(`.numbering span:nth-child(${num})`);
    if (currentUrl.endsWith('designService.html')) {
        clickedSpan.classList.add('pink', 'active');
    } else if (currentUrl.endsWith('choreographyService.html')) {
        clickedSpan.classList.add('green', 'active');
    }

    const displayCatalogues = document.querySelectorAll('.display .displayCatalogue');
    displayCatalogues.forEach(grid => grid.classList.add('d-none'));

    const selectedDisplay = document.querySelector(`.displayCatalogue-${num}`);
    selectedDisplay.classList.remove('d-none');
}

function changeDisplay(one) {
    let n = activeIndex + one;

    if (n > displayCatalogue.length) {
        n = displayCatalogue.length
    }
    if (n < 1) {
        n = 1
    }
    activeIndex = n;

    if (n === 1) {
        $(".pageRight").removeClass("disabled");
        $(".pageLeft").addClass("disabled");
    } else if (n === displayCatalogue.length) {
        $(".pageLeft").removeClass("disabled");
        $(".pageRight").addClass("disabled");
    } else {
        $(".pageLeft").removeClass("disabled");
        $(".pageRight").removeClass("disabled");
    }

    const spans = document.querySelectorAll('.numbering span');
    if (currentUrl.endsWith('designService.html')) {
        spans.forEach(tab => tab.classList.remove('pink', 'active'));
    } else if (currentUrl.endsWith('choreographyService.html')) {
        spans.forEach(tab => tab.classList.remove('green', 'active'));
    }

    const clickedSpan = document.querySelector(`.numbering span:nth-child(${n})`);
    if (currentUrl.endsWith('designService.html')) {
        clickedSpan.classList.add('pink', 'active');
    } else if (currentUrl.endsWith('choreographyService.html')) {
        clickedSpan.classList.add('green', 'active');
    }

    const displayCatalogues = document.querySelectorAll('.display .displayCatalogue');
    displayCatalogues.forEach(grid => grid.classList.add('d-none'));

    const selectedDisplay = document.querySelector(`.displayCatalogue-${n}`);
    selectedDisplay.classList.remove('d-none');
}


function getYear() {
    const year = new Date().getFullYear();
    document.getElementById("year").innerHTML = year;
}

$(document).ready(function () {
    setInterval(function () {
        checkURL();
    }, 100)
    setTimeout(function() {
        showTestimonials();
        getYear();
        // updatePagination();
    }, 1000);
});