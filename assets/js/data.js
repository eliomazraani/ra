var services = [
    {
        id: 1,
        title: "Movement & Choreography",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente vitae velit iusto perferendis, labore quo. Recusandae quaerat deleniti alias a perspiciatis voluptas repellat tenetur qui nam, error voluptatum, similique autem.",
        image: "assets/img/OverlayGreen.png",
        link: "choreography.html",
        class: "mvmt-choreo",
        color: "green",
    },
    {
        id: 2,
        title: "Costume Design & Styling",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente vitae velit iusto perferendis, labore quo. Recusandae quaerat deleniti alias a perspiciatis voluptas repellat tenetur qui nam, error voluptatum, similique autem.",
        image: "assets/img/OverlayPink.png",
        link: "design.html",
        class: "cstm-style",
        color: "pink",
    },
    {
        id: 3,
        title: "Artistic Direction",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente vitae velit iusto perferendis, labore quo. Recusandae quaerat deleniti alias a perspiciatis voluptas repellat tenetur qui nam, error voluptatum, similique autem.",
        image: "assets/img/OverlayPurple.png",
        link: "art.html",
        class: "art-direction",
        color: "purple",
    },
    {
        id: 4,
        title: "Style Coaching",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente vitae velit iusto perferendis, labore quo. Recusandae quaerat deleniti alias a perspiciatis voluptas repellat tenetur qui nam, error voluptatum, similique autem.",
        image: "assets/img/OverlayPeach.png",
        link: "art.html",
        class: "coaching.html",
        color: "peach",
    }
]

function renderService() {
    var serviceD = ``;
    var serviceM = ``;

    services.forEach(service => {
        serviceD = `<div onclick="goTo('${service.link}')" class="${service.class} block">
                        <img src="${service.image}" alt="Img">
                        <div class="paragraph">
                            <div class="title">${service.title}</div>
                            <div class="description">${service.description}</div>
                        </div>
                    </div>`;
        serviceM = `<div class="${service.class} block fade">
                        <img src="${service.image}" alt="Img">
                        <div class="paragraph">
                            <div class="title">${service.title}</div>
                            <div class="description">${service.description}</div>
                            <div onclick="goTo('${service.link}')"  class="glimpseBtn">
                                Take a Glimpse <i class="fas fa-angle-right"></i>
                            </div>
                            <div class="button ${service.color}">
                                <a onclick="scrollToContact()">Get In Touch</a>
                            </div>
                        </div>
                    </div>`;
        $(".services .wide").append(serviceD);
        $(".services .narrow .fader").append(serviceM);
    });
}

var values = [
    {
        id: 1,
        norm: "Integrity",
        detail: "We build and strengthen our reputation through our client’s trust.",
        image: "assets/img/Integrity.png"
    },
    {
        id: 2,
        norm: "Excellence",
        detail: "We are passionate about our people and our high quality service.",
        image: "assets/img/Excellence.png"
    },
    {
        id: 2,
        norm: "Discipline",
        detail: "We are responsible, respect our artists, care for our client’s overall experience and manage our business ethically.",
        image: "assets/img/Discipline.png"
    }
]

function renderValue() {
    var value = ``;

    values.forEach(val => {
        value = `<div class="box">
                    <img src="${val.image}" alt="Img">
                    <div class="norm">${val.norm}</div>
                    <div class="detail">${val.detail}</div>
                </div>`;
        $(".values").append(value);
    });
}

var clients = [
    "assets/img/MTV.png",
    "assets/img/KAI.png",
    "assets/img/KLOUD.png",
    "assets/img/CICADA.png",
    "assets/img/BOLD.png",
    "assets/img/KULT.png",
    "assets/img/ABC.png",
]

function renderClient() {
    var clientContainers = [];
    var clientM = `<div class="clientLogo">`;

    for (let i = 0; i < clients.length; i += 7) {
        var clientD = '<div class="clientLogo fade">';
        for (let j = i; j < Math.min(i + 7, clients.length); j++) {
            clientD += `<img src="${clients[j]}" alt="Img">`;
        }
        clientD += '</div>';
        clientContainers.push(clientD);
    }
    clients.forEach(client => {
        clientM += `<img src="${client}" alt="Img">`
    });
    clientM += `</div>`
    $(".clients .wide .fader").html(clientContainers.join(''));
    if ($('.clients .wide .fader .clientLogo').length === 1) {
        $('.leftArrow').css('display', 'none');
        $('.rightArrow').css('display', 'none');
    }
    $(".clients .narrow").append(clientM);
}

var testimonials = [
    {
        id: 1,
        name: "Name 1",
        testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
        image: "assets/img/Client.png",
    },
    {
        id: 2,
        name: "Name 2",
        testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
        image: "assets/img/Client.png",
    },
    {
        id: 3,
        name: "Name 3",
        testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
        image: "assets/img/Client.png",
    }
]

function renderTestimonial() {
    var testimonial = ``;

    testimonials.forEach(test => {
        testimonial = `<div class="clientTestimonial fade">
                            <img src="${test.image}" alt="Img">
                            <div class="testimonial">${test.testimonial}</div>
                            <div class="name">${test.name}</div>
                        </div>`
        $(".testimonialTab").append(testimonial);
    });
}

var jobs = [
    {
        id: 1,
        position: "Coordinator",
        requirements: "We are responsible, respect our artists, care for our client’s overall experience and manage our business ethically.",
        image: "assets/img/Square.png"
    },
    {
        id: 2,
        position: "Wardrobe",
        requirements: "We are responsible, respect our artists, care for our client’s overall experience and manage our business ethically.",
        image: "assets/img/Square.png"
    }
]

function renderJob() {
    var job = ``;

    jobs.forEach(vacancy => {
        job = `<div class="jobPosition">
                    <div class="image">
                        <img src="${vacancy.image}" alt="Img">
                    </div>
                    <div class="details">
                        <div class="position">${vacancy.position}</div>
                        <div class="requirements">${vacancy.requirements}</div>
                        <div onclick="jobPosition(${vacancy.id})" class="button">
                            <a>Apply Now</a>
                        </div>
                    </div>
                </div>`;

        $(".jobList").append(job);
    });
}

$(document).ready(function () {
    setTimeout(function () {
        renderService();
        renderValue();
        renderClient();
        renderTestimonial();
        renderJob();
    }, 1000)
});