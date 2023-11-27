var services = [
    {
        id: 1,
        title: "Movement & Choreography",
        teaser: "RA choreography team creates dynamic dance routines for a variety of productions, including theaters, films, music videos, concerts, events, and TV ads...",
        description: "RA choreography team creates dynamic dance routines for a variety of productions, including theaters, films, music videos, concerts, events, and TV ads. Our talented and disciplined team of professional dancers, acrobats, aerialists, and impersonators perform in perfect sync to deliver visually captivating performances.",
        image: "assets/img/OverlayGreen.jpg",
        link: "choreography.html",
        class: "mvmt-choreo",
        color: "green",
    },
    {
        id: 2,
        title: "Costume Design & Styling",
        teaser: "We create, design, hire and produce costumes for stage contributing to the look and story-telling of the production...",
        description: "We create, design, hire and produce costumes for stage contributing to the look and story-telling of the production. We carefully choose every fabric and texture that fits with the theme, enhances the performance and complements the artist’s movement. RA wardrobe team takes good care and maintenance of all costumes and provide assistance to artists backstage.",
        image: "assets/img/OverlayPink.jpg",
        link: "design.html",
        class: "cstm-style",
        color: "pink",
    },
    {
        id: 3,
        title: "Artistic Direction",
        teaser: "Combining all departments together, RA team oversees all aspects of the artistic production...",
        description: "Combining all departments together, RA team oversees all aspects of the artistic production. In addition to planning and implementing an artistic vision for the project, we produce, direct and choreograph the work. Combining light design with suitable visual arts, our detail oriented team is dedicated to deliver a full experience for your audience.",
        image: "assets/img/OverlayPurple.jpg",
        link: "art.html",
        class: "art-direction",
        color: "purple",
    },
    {
        id: 4,
        title: "Style Coaching",
        teaser: "We teach you how to combine your love of style with your values about inner beauty, empowerment and positive body image...",
        description: "We teach you how to combine your love of style with your values about inner beauty, empowerment and positive body image. Beside redesigning your wardrobe, we help you to have a whole new approach to style and appearance, rebuilding your self- image from the inside guiding you to become your best and most stylish self.",
        image: "assets/img/OverlayPeach.jpg",
        link: "coaching.html",
        class: "coach",
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
                            <div class="description">${service.teaser}</div>
                        </div>
                    </div>`;
        serviceM = `<div onclick="goTo('${service.link}')" class="${service.class} block fade">
                        <img src="${service.image}" alt="Img">
                        <div class="paragraph">
                            <div class="title">${service.title}</div>
                            <div class="description">${service.teaser}</div>
                            <div class="button ${service.color}">
                                <a onclick="scrollToContact()">Get In Touch</a>
                            </div>
                        </div>
                    </div>`;
        $(".services .wide").append(serviceD);
        $(".services .narrow .fader").append(serviceM);
    });
}

function chooseService() {
    var pathName = window.location.pathname.slice(1);
    var service = services.filter(service => service.link === pathName);
    var header = `<div class="background ${service[0].color}">
                    <div class="title">${service[0].title.toUpperCase()}</div>
                    <div class="details">${service[0].description}</div>
                    <div class="button ${service[0].color} mobile">
                        <a onclick="scrollToContact()">Get In Touch</a>
                    </div>
                </div>`;
    $(".serviceHeader").append(header);
}

var values = [
    {
        id: 1,
        norm: "Integrity",
        detail: "We build and strengthen our reputation through our client’s trust.",
        image: "assets/img/Values/Integrity.png"
    },
    {
        id: 2,
        norm: "Excellence",
        detail: "We are passionate about our people and our high quality service.",
        image: "assets/img/Values/Excellence.png"
    },
    {
        id: 2,
        norm: "Discipline",
        detail: "We are responsible, respect our artists, care for our client’s overall experience and manage our business ethically.",
        image: "assets/img/Values/Discipline.png"
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
    "assets/img/Clients/MTV.png",
    "assets/img/Clients/KAI.png",
    "assets/img/Clients/KLOUD.png",
    "assets/img/Clients/BOLD.png",
    "assets/img/Clients/KULT.png",
    "assets/img/Clients/ABC.png",
    "assets/img/Clients/IAM.png",
    "assets/img/Clients/SEAFRONT.png",
    // "assets/img/Clients/BENCHMARK.png",
    "assets/img/Clients/CA.jpg",
    "assets/img/Clients/CASINO.png",
    "assets/img/Clients/GAT.jpg",
    "assets/img/Clients/RETINA.jpg",
    "assets/img/Clients/STEPS.png",
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
        name: "ANTHONY KHAWAND – ARTIST MANAGER",
        testimonial: "“After 10 years plus of working in the audio visual field , through films , TVC’s and music videos, I’ve met a lot of art directors and concept creators, but there’s this particular one that you ll never forget . The one working so hard to achieve and deliver the best outcome, no matter the circumstances. A pioneer in research and concept creation, going through every detail, giving every project the maximum time and effort needed. Don’t be fooled with that beautiful smile she puts… Her serious yet severe character could engage at any moment to put things in their right order, making her one of many international professionals in the artistic scene. It’s always a pleasure working with you Rachel, you’re an avant gardiste of our field , can’t wish but more future projects together.”",
        image: "assets/img/Testimonial/AnthonyKhawand.png",
    },
    // {
    //     id: 2,
    //     name: "LEA MAKHOUL – SINGER",
    //     testimonial: "“Rachel is simply one of the best artists in her field. Her attention to detail is unmatched, Her ability to understand the message her clients want to convey is truly impressive, and she always manages to capture the essence of their vision in her art. Rachel and her team have always exceeded my expectations. Whether designing costumes, styling for special events and performances, or creating moodboards for photoshoots and music videos, Rachel always brought her A-game. She is incredibly professional, and she treats every project as if it were her own.”",
    //     image: "assets/img/Client.png",
    // },
    {
        id: 3,
        name: "ROY KHOURY – WRITER, DIRECTOR, CHOREOGRAPHER",
        testimonial: "“The work and experience with Rachel was beyond amazing. She made me feel comfortable, she was professional yet personal, with a strong knowledge of what she does. Execution and delivery were unbelievable! I certainly recommend her, and can’t wait for more projects to come!”",
        image: "assets/img/Testimonial/RoyKhoury.png",
    },
    {
        id: 4,
        name: "DALIDA KHALIL – ACTRESS",
        testimonial: "“Working with Rachel has always been a pleasure of mine. Professionally speaking, she is one of the most talented choreographers I’ve worked with and her vision has been spectacular. I can never thank her enough…”",
        image: "assets/img/Testimonial/DalidaKhalil.png",
    },
    // {
    //     id: 5,
    //     name: "RAPHAEL JABBOUR – SINGER",
    //     testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
    //     image: "assets/img/Testimonial/RaphaelJabbour.jpg",
    // },
    {
        id: 6,
        name: "MARY SAAD – FOUNDER MUSIC SAGA",
        testimonial: "“Rachel creates with her heart and builds with her mind. Her creativity is beyond the beyond . Rachel is one of the best stage directors i have ever worked with , always doing her best to elevate the standards of any job with her unique talent.”",
        image: "assets/img/Testimonial/MarySaad.png",
    },
    {
        id: 7,
        name: "RAMI LATTOUF – DIRECTOR",
        testimonial: "“Collaborating with Rachel as a choreographer and stylist has consistently surpassed my expectations. She delivers exceptional work. Her professionalism and dedication to projects shine through.”",
        image: "assets/img/Testimonial/RamiLattouf.jpeg",
    },
    {
        id: 8,
        name: "CHRISTINA HADDAD – SINGER",
        testimonial: '“I had the big pleasure to work with Rachel on my "Tête à Tête" Concert November 2022.. I saw her show during a wedding I was performing at and since then I kept her in my mind.. and I was not mistaken for a second.. Ever since I started working on my concert and during our planifications, preparations and rehearsals, Rachel has shown high level of professionalism, commitment, perseverance and most of all her passion in work. I look forward to repeat more and more my collaboration.. Rachel I love you and wish you reach high as much as you deserve it.”',
        image: "assets/img/Testimonial/ChristinaHaddad.JPG",
    },
    // {
    //     id: 9,
    //     name: "KARL HSEIN – SINGER, COMPOSER",
    //     testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
    //     image: "assets/img/Testimonial/KarlHsein.png",
    // },
    // {
    //     id: ,
    //     name: "FAWAZ KOTOB – FOUNDER KULT BEIRUT",
    //     testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
    //     image: "assets/img/Testimonial/Client.png",
    // },
    // {
    //     id: ,
    //     name: "TOUMA SALEMEH – EVENT PLANNER",
    //     testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
    //     image: "assets/img/Testimonial/Client.png",
    // },
    // {
    //     id: ,
    //     name: " OUSAMA OBEID – DIRECTOR",
    //     testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
    //     image: "assets/img/Testimonial/Client.png",
    // },
    // {
    //     id: ,
    //     name: " TAREK BARBOUR – WEDDING PLANNER",
    //     testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
    //     image: "assets/img/Testimonial/Client.png",
    // },
    // {
    //     id: ,
    //     name: " MANAL ITANI – BRIDE",
    //     testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
    //     image: "assets/img/Testimonial/Client.png",
    // },
    // {
    //     id: ,
    //     name: " NIDAL BCHERRAWY – ",
    //     testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec magna at bibendum. Nam non dui nec erat rhoncus sagittis sed at tortor. In eu sapien non diam efficitur auctor ut eget nisl. Praesent arcu massa, ultricies quis condimentum nec, consectetur ut odio. Vestibulum a lobortis metus.”",
    //     image: "assets/img/Testimonial/Client.png",
    // },
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
        requirements: "Coordinates tasks, promotes collaboration, and ensures efficiency.",
        image: "assets/img/Square.png"
    },
    {
        id: 2,
        position: "Assistant",
        requirements: "Supports coordination with computer proficiency and strong English skills, ensuring smooth task execution.",
        image: "assets/img/Square.png"
    },
    {
        id: 3,
        position: "Driver",
        requirements: "Reliable, safely transports, maintains vehicle, follows routes.",
        image: "assets/img/Square.png"
    },
    {
        id: 4,
        position: "Wardrobe Supervisor",
        requirements: "Manages and coordinates costumes, collaborates with designer to achieve visions.",
        image: "assets/img/Square.png"
    },
    {
        id: 5,
        position: "Makeup Artist",
        requirements: "Applies beauty and artistic makeup for expressive themes.",
        image: "assets/img/Square.png"
    },
    {
        id: 6,
        position: "Tailor",
        requirements: "Expertly crafts costumes with precision and skill.",
        image: "assets/img/Square.png"
    },
    {
        id: 7,
        position: "Crafter",
        requirements: "Creates and handcrafts unique items with skill and creativity.",
        image: "assets/img/Square.png"
    },
    {
        id: 8,
        position: "Dancer/Performer",
        requirements: "Expresses art through different types of dance/performances.",
        image: "assets/img/Square.png"
    },
    {
        id: 9,
        position: "Singer",
        requirements: "Elevates experiences with powerful vocal performances.",
        image: "assets/img/Square.png"
    },
    {
        id: 10,
        position: "Musician",
        requirements: "Creates music, performs with instrumental mastery.",
        image: "assets/img/Square.png"
    },
    {
        id: 11,
        position: "Graphic Designer",
        requirements: "Conceptualizes and designs visuals for multiple purposes.",
        image: "assets/img/Square.png"
    },
    {
        id: 12,
        position: "Photographer",
        requirements: "Captures moments through creative photography skills.",
        image: "assets/img/Square.png"
    },
    {
        id: 13,
        position: "Videographer",
        requirements: "Records captivating visual content.",
        image: "assets/img/Square.png"
    },
    {
        id: 14,
        position: "Editor",
        requirements: "Edits footage for engaging visual content.",
        image: "assets/img/Square.png"
    },
    {
        id: 15,
        position: "Digital Marketing Specialist",
        requirements: "Executes online strategies to maximize digital presence.",
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
    var pathName = window.location.pathname.slice(1);

    setTimeout(function () {
        renderService();
        if (pathName === "choreography.html" || pathName === "design.html" || pathName === "art.html" || pathName === "coaching.html") {
            chooseService();
        };
        renderValue();
        renderClient();
        renderTestimonial();
        renderJob();
    }, 1000)
});