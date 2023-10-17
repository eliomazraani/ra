var services = [
    {
        id: 1,
        title: "Movement & Choreography",
        description: "We tell stories through movements, formations and dance routines. RA choreography team creates physical vocabulary through artist movement, design steps  and dances in a variety of production settings, for artists to perform. It includes, theaters, films, music videos, concert stage, events and TV ads. RA dance team consists of disciplined professional dancers, acrobats, aerialists and impersonators moving together perfectly in sync creating a marvelous effect.",
        image: "assets/img/OverlayGreen.png",
        link: "choreography.html",
        class: "mvmt-choreo",
        color: "green",
    },
    {
        id: 2,
        title: "Costume Design & Styling",
        description: "We create, design, hire and produce costumes for stage contributing to the look and story-telling of the production. We carefully choose every fabric and texture that fits with the theme, enhances the performance and complements the artist’s movement. RA wardrobe team takes good care and maintenance of all costumes and provide assistance to artists backstage.",
        image: "assets/img/OverlayPink.png",
        link: "design.html",
        class: "cstm-style",
        color: "pink",
    },
    {
        id: 3,
        title: "Artistic Direction",
        description: "Combining all departments together, RA team oversees all aspects of the artistic production. In addition to planning and implementing an artistic vision for the project, we produce, direct and choreograph the work. Combining light design with suitable visual arts, our detail oriented team is dedicated to deliver a full experience for your audience.",
        image: "assets/img/OverlayPurple.png",
        link: "art.html",
        class: "art-direction",
        color: "purple",
    },
    {
        id: 4,
        title: "Style Coaching",
        description: "We teach you how to combine your love of style with your values about inner beauty, empowerment and positive body image. Beside redesigning your wardrobe, we help you to have a whole new approach to style and appearance, rebuilding your self- image from the inside guiding you to become your best and most stylish self.",
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
        name: "LEA MAKHOUL – SINGER",
        testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
        image: "assets/img/Client.png",
    },
    {
        id: 2,
        name: "RAPHAEL JABBOUR – SINGER",
        testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
        image: "assets/img/Client.png",
    },
    {
        id: 3,
        name: "CHRISTINA HADDAD – SINGER",
        testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
        image: "assets/img/Client.png",
    },
    {
        id: 4,
        name: "KARL HSEIN – SINGER, COMPOSER",
        testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
        image: "assets/img/Client.png",
    },
    {
        id: 5,
        name: "DALIDA KHALIL – ACTRESS",
        testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
        image: "assets/img/Client.png",
    },
    {
        id: 6,
        name: " OUSAMA OBEID – DIRECTOR",
        testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
        image: "assets/img/Client.png",
    },
    {
        id: 7,
        name: "RAMI LATTOUF – DIRECTOR",
        testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
        image: "assets/img/Client.png",
    },
    {
        id: 8,
        name: "ROY KHOURY – WRITER, DIRECTOR, CHOREOGRAPHER",
        testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
        image: "assets/img/Client.png",
    },
    {
        id: 9,
        name: "ANTHONY KHAWAND – ARTIST MANAGER",
        testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
        image: "assets/img/Client.png",
    },
    {
        id: 10,
        name: "MARY SAAD – FOUNDER MUSIC SAGA",
        testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
        image: "assets/img/Client.png",
    },
    {
        id: 11,
        name: "FAWAZ KOTOB – FOUNDER KULT BEIRUT",
        testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
        image: "assets/img/Client.png",
    },
    {
        id: 12,
        name: "TOUMA SALEMEH – EVENT PLANNER",
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