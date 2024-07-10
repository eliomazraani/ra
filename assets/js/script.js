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

var position;
function jobPosition(num) {
    switch (num) {
        case 1:
            $("#jobPositionName").text("Coordinator");
            position = "Coordinator";
            viewDescription(position);
            break;
        case 2:
            $("#jobPositionName").text("Assistant");
            position = "Assistant";
            viewDescription(position);
            break;
        case 3:
            $("#jobPositionName").text("Driver");
            position = "Driver";
            viewDescription(position);
            break;
        case 4:
            $("#jobPositionName").text("Wardrobe Supervisor");
            position = "Wardrobe Supervisor";
            viewDescription(position);
            break;
        case 5:
            $("#jobPositionName").text("Crafter");
            position = "Crafter";
            viewDescription(position);
            break;
        case 6:
            position = "Makeup Artist";
            applyNow(position);
            break;
        case 7:
            position = "Tailor";
            applyNow(position);
            break;
        case 8:
            position = "Dancer/Performer";
            applyNow(position);
            break;
        case 9:
            position = "Singer";
            applyNow(position);
            break;
        case 10:
            position = "Musician";
            applyNow(position);
            break;
        case 11:
            position = "Graphic Designer";
            applyNow(position);
            break;
        case 12:
            position = "Photographer";
            applyNow(position);
            break;
        case 13:
            position = "Videographer";
            applyNow(position);
            break;
        case 14:
            position = "Editor";
            applyNow(position);
            break;
        case 15:
            position = "Digital Marketing Specialist";
            applyNow(position);
            break;
    }
}

function viewDescription(position) {
    $('.apply').toggleClass('open');
    $('#applyForm input').val('');
    $('#applyForm input').css('border', '');
    $('#applyForm .unselected').css('border', '');
    if (!$("#applyForm .unselected").hasClass("seen")) {
        $(".uploadFile").toggleClass('seen');
    }
    renderDescription(position);
}

function applyNow(position) {
    var emailAddress = "info@rachelasmar.com";
    var subject = `New Job Application - ${position}`;
    var body = `*Please attach your resume, videos, and photos and complete the information below*
                
Phone: 
Height: 
Instagram: `;

    var mailtoUrl = "mailto:" + emailAddress
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoUrl;
}

function claimNow() {
    applyNow(position)
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
    var currentUrl = window.location.pathname.slice(1);
    if (currentUrl === '') {
        $('.toHome').removeAttr('href');
        $('.lp').addClass('selected');
    } else if (currentUrl === 'about.html') {
        $('.toHome').attr('href', '/');
        $('.ap').addClass('selected');
    } else if (currentUrl === 'choreography.html' || currentUrl === 'choreographyService.html') {
        $('.toHome').attr('href', '/');
        $('.toHome img').attr('src', 'assets/img/LogoGreen.svg');
        $('.sp').addClass('selected');
        $('.chp').addClass('selected');
        $('.button').addClass('green');
    } else if (currentUrl === 'design.html' || currentUrl === 'designService.html' || currentUrl === 'designservice') {
        $('.toHome').attr('href', '/');
        $('.toHome img').attr('src', 'assets/img/LogoPink.svg');
        $('.sp').addClass('selected');
        $('.des').addClass('selected');
        $('.button').addClass('pink');
    } else if (currentUrl === 'art.html' || currentUrl === 'artService.html' || currentUrl === 'artservice') {
        $('.toHome').attr('href', '/');
        $('.toHome img').attr('src', 'assets/img/LogoPurple.svg');
        $('.sp').addClass('selected');
        $('.art').addClass('selected');
        $('.button').addClass('purple');
    } else if (currentUrl === 'coaching.html') {
        $('.toHome').attr('href', '/');
        $('.toHome img').attr('src', 'assets/img/LogoPeach.svg');
        $('.sp').addClass('selected');
        $('.stl').addClass('selected');
        $('.button').addClass('peach');
    } else if (currentUrl === 'joinUs.html' || currentUrl === 'joinus') {
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
let swipeStartX = 0;
let swipeEndX = 0;
let autoSwitchTimeout;

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

    autoSwitchTimeout = setTimeout(showTestimonials, 15000);
}

function updateDots(container, total, activeIndex) {
    container.innerHTML = "";

    for (let i = 0; i < total; i++) {
        let dot = document.createElement("span");
        dot.className = "dot";
        if (i === activeIndex - 1) {
            dot.classList += " active";
        }
        container.appendChild(dot);
    }
}

function handleSwipeStart(event) {
    swipeStartX = event.touches[0].clientX;
}

function handleSwipeEnd(event) {
    swipeEndX = event.changedTouches[0].clientX;

    if (swipeEndX < swipeStartX - 150) {
        changeTestimonial(1);
    } else if (swipeEndX > swipeStartX + 150) {
        changeTestimonial(-1);
    }
}

function changeTestimonial(delta) {
    clearTimeout(autoSwitchTimeout);
    let testimonials = document.getElementsByClassName("clientTestimonial");
    let dotsContainer = document.querySelector(".dots");
    testimonialIndex += delta;

    if (testimonialIndex > testimonials.length) {
        testimonialIndex = 1;
    } else if (testimonialIndex < 1) {
        testimonialIndex = testimonials.length;
    }

    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }

    updateDots(dotsContainer, testimonials.length, testimonialIndex);

    testimonials[testimonialIndex - 1].style.display = "block";

    autoSwitchTimeout = setTimeout(showTestimonials, 15000);
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

    var sendEmailBtn = document.getElementById('sendEmail');
    sendEmailBtn.classList.add('disabled');

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

    emailjs.send("service_op2jm29", "template_4hd3fvm", templateParams)
        .then(function (response) {
            console.log('Email sent successfully!', response.status, response.text);
            thankYou();
            sendEmailBtn.classList.remove('disabled');
        }, function (error) {
            console.log('Email sending failed!', error);
            sendEmailBtn.classList.remove('disabled');
        });
}


function applyJob() {
    event.preventDefault();

    var applyJobBtn = document.getElementById('applyJob');

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
            applyJobBtn.classList.add('disabled');
        };
        reader.readAsDataURL(file);
    } else {
        sendEmailWithAttachment(templateParams);
        applyJobBtn.classList.add('disabled');
    }
}

function sendEmailWithAttachment(templateParams) {
    emailjs.send("service_op2jm29", "template_fqztz8l", templateParams)
        .then(function (response) {
            console.log('Email sent successfully!', response.status, response.text);
            thankYou();
            applyJobBtn.classList.remove('disabled');
        }, function (error) {
            console.log('Email sending failed!', error);
            applyJobBtn.classList.remove('disabled');
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

function updateGallery(elem, num) {
    var $gallery = $(elem).siblings(".gallery");
    var parentWidth = $(elem).closest(".galleryProject").width();
    var elementWidth = $gallery[0].scrollWidth;

    var currentTranslate = $gallery.data('translate') || 0;

    var ratio = elementWidth / parentWidth;
    var translateAmount = 25 * ratio;

    if (num === 1) {
        currentTranslate = Math.min(currentTranslate + translateAmount, 100 * (ratio - 1));
    } else if (num === -1) {
        currentTranslate = Math.max(currentTranslate - translateAmount, 0);
    }

    $gallery.css('transform', `translateX(-${currentTranslate}%)`);
    $gallery.data('translate', currentTranslate);
}


var currentUrl = window.location.pathname.slice(1);
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
            if (currentUrl === 'designService.html') {
                number.className += "pink active";
            } else if (currentUrl === 'choreographyService.html') {
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
    if (currentUrl === 'designService.html') {
        spans.forEach(tab => tab.classList.remove('pink', 'active'));
    } else if (currentUrl === 'choreographyService.html') {
        spans.forEach(tab => tab.classList.remove('green', 'active'));
    }

    const clickedSpan = document.querySelector(`.numbering span:nth-child(${num})`);
    if (currentUrl === 'designService.html') {
        clickedSpan.classList.add('pink', 'active');
    } else if (currentUrl === 'choreographyService.html') {
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
    if (currentUrl === 'designService.html') {
        spans.forEach(tab => tab.classList.remove('pink', 'active'));
    } else if (currentUrl === 'choreographyService.html') {
        spans.forEach(tab => tab.classList.remove('green', 'active'));
    }

    const clickedSpan = document.querySelector(`.numbering span:nth-child(${n})`);
    if (currentUrl === 'designService.html') {
        clickedSpan.classList.add('pink', 'active');
    } else if (currentUrl === 'choreographyService.html') {
        clickedSpan.classList.add('green', 'active');
    }

    const displayCatalogues = document.querySelectorAll('.display .displayCatalogue');
    displayCatalogues.forEach(grid => grid.classList.add('d-none'));

    const selectedDisplay = document.querySelector(`.displayCatalogue-${n}`);
    selectedDisplay.classList.remove('d-none');
}

function openGoogleMaps() {
    var mapsUrl = "https://maps.app.goo.gl/TuJwvJCoFnzyVtXj8";

    window.open(mapsUrl, "_blank");
}

function openWhatsApp() {
    var phoneNumber = "96170908587";
    // var message = "Hello!";

    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text="; //+ encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
}

function openEmail() {
    var emailAddress = "info@rachelasmar.com";
    // var subject = "Subject of the email";
    // var body = "Body of the email";

    var mailtoUrl = "mailto:" + emailAddress;
    // + "?subject=" + encodeURIComponent(subject)
    // + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoUrl;
}

function getYear() {
    const year = new Date().getFullYear();
    document.getElementById("year").innerHTML = year;
}

$(document).ready(function () {
    var currentUrl = window.location.href;
    if (currentUrl.endsWith('/') && $(window).width() > 767) {
        var height = $(window).height() - 92;
        $('.services').css('height', height);
    } else {
        $('.services').css('height', 'unset');
    };
    setTimeout(function () {
        checkURL();
    }, 100);
    setTimeout(function () {
        showTestimonials();
        getYear();
        // updatePagination();
    }, 1000);
    document.addEventListener('touchstart', handleSwipeStart);
    document.addEventListener('touchend', handleSwipeEnd);
});

$(window).resize(function () {
    var currentUrl = window.location.href;
    if (currentUrl.endsWith('/') && $(window).width() > 767) {
        var height = $(window).height() - 92;
        $('.services').css('height', height);
    } else {
        $('.services').css('height', 'unset');
    };
});