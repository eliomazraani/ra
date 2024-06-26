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
        serviceD = `<div ${service.class != 'cstm-style' ? `onclick="goTo('${service.link}')"` : ''} class="${service.class} block">
                        <img src="${service.image}" alt="Img">
                        <div class="paragraph">
                            <div class="title">${service.title}</div>
                            <div class="description">${service.teaser}</div>
                        </div>
                    </div>`;
        serviceM = `<div class="${service.class} block fade">
                        <img ${service.class != 'cstm-style' ? `onclick="goTo('${service.link}')"` : ''} src="${service.image}" alt="Img">
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
                    <div class="wrap">
                        <div class="title">${service[0].title.toUpperCase()}</div>
                        <div class="details">${service[0].description}</div>
                        <div class="button ${service[0].color} mobile">
                            <a onclick="scrollToContact()">Get In Touch</a>
                        </div>
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
        $(".values .wrap").append(value);
    });
}

var clients = [
    "assets/img/Clients/KULT.png",
    "assets/img/Clients/BENCHMARK.png",
    "assets/img/Clients/SAYF.png",
    "assets/img/Clients/CA.jpg",
    "assets/img/Clients/MTV.png",
    "assets/img/Clients/ABC.png",
    "assets/img/Clients/STEPS.png",
    "assets/img/Clients/ROTANA.png",
    "assets/img/Clients/IAM.png",
    "assets/img/Clients/KLOUD.png",
    "assets/img/Clients/GAT.jpg",
    "assets/img/Clients/CASINO.png",
    "assets/img/Clients/SEAFRONT.png",
    "assets/img/Clients/RETINA.jpg",
    "assets/img/Clients/KAI.png",
]

function loadImage(url) {
    return new Promise((resolve, reject) => {
        var img = new Image();
        img.onload = function () {
            resolve(img);
        };
        img.onerror = function () {
            reject(new Error('Image load error'));
        };
        img.src = url;
    });
}

async function renderClient() {
    var clientContainers = [];
    var faderWidth = $('.clients .wide').width();
    var columnGap = 80;
    var currentContainer = '<div class="clientLogo fade">';
    var currentContainerWidth = 0;

    for (let i = 0; i < clients.length; i++) {
        try {
            var img = await loadImage(clients[i]);
            var imgWidth = img.width;

            if (currentContainerWidth + imgWidth + columnGap > faderWidth) {
                if (currentContainerWidth > 0) {
                    clientContainers.push(currentContainer + '</div>');
                }

                currentContainer = '<div class="clientLogo fade">';
                currentContainerWidth = 0;
            }

            currentContainer += `<img src="${clients[i]}" alt="Img">`;
            currentContainerWidth += imgWidth + columnGap;

            if (i === clients.length - 1 && currentContainerWidth > 0) {
                clientContainers.push(currentContainer + '</div>');
            }
        } catch (error) {
            console.error(error);
        }
    };
    $(".clients .wide .fader").html(clientContainers.join(''));
    if ($('.clients .wide .fader .clientLogo').length === 1) {
        $('.leftArrow').css('display', 'none');
        $('.rightArrow').css('display', 'none');
    };

    var clientM = `<div class="clientLogo">`;
    clients.forEach(client => {
        clientM += `<img src="${client}" alt="Img">`
    });
    clientM += `</div>`;
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
        name: "ROY El KHOURI – WRITER, DIRECTOR, CHOREOGRAPHER",
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
        $(".testimonialTab .wrap").append(testimonial);
    });
}

var jobs = [
    {
        id: 1,
        position: "Coordinator",
        requirements: "Coordinates tasks, promotes collaboration, and ensures efficiency.",
        image: "assets/img/Jobs/Coordinator.jpg",
        // description: true
    },
    {
        id: 2,
        position: "Assistant",
        requirements: "Supports coordination with computer proficiency and strong English skills, ensuring smooth task execution.",
        image: "assets/img/Jobs/Assistant.jpg",
        // description: true
    },
    {
        id: 3,
        position: "Driver",
        requirements: "Reliable, safely transports, maintains vehicle, follows routes.",
        image: "assets/img/Jobs/Driver.jpg",
        // description: true
    },
    {
        id: 4,
        position: "Wardrobe Supervisor",
        requirements: "Manages and coordinates costumes, collaborates with designer to achieve visions.",
        image: "assets/img/Jobs/Wardrobe.jpg",
        // description: true
    },
    {
        id: 5,
        position: "Crafter",
        requirements: "Creates and handcrafts unique items with skill and creativity.",
        image: "assets/img/Jobs/Crafter.jpg",
        // description: true
    },
    {
        id: 6,
        position: "Makeup Artist",
        requirements: "Applies beauty and artistic makeup for expressive themes.",
        image: "assets/img/Jobs/MUA.jpg"
    },
    {
        id: 7,
        position: "Tailor",
        requirements: "Expertly crafts costumes with precision and skill.",
        image: "assets/img/Jobs/Tailor.jpg"
    },
    {
        id: 8,
        position: "Dancer/Performer",
        requirements: "Expresses art through different types of dance/performances.",
        image: "assets/img/Jobs/Dancer.jpg"
    },
    {
        id: 9,
        position: "Singer",
        requirements: "Elevates experiences with powerful vocal performances.",
        image: "assets/img/Jobs/Singer.jpg"
    },
    {
        id: 10,
        position: "Musician",
        requirements: "Creates music, performs with instrumental mastery.",
        image: "assets/img/Jobs/Musician.jpg"
    },
    {
        id: 11,
        position: "Graphic Designer",
        requirements: "Conceptualizes and designs visuals for multiple purposes.",
        image: "assets/img/Jobs/GDesigner.jpg"
    },
    // {
    //     id: 12,
    //     position: "Photographer",
    //     requirements: "Captures moments through creative photography skills.",
    //     image: "assets/img/Jobs/Photographer.jpg"
    // },
    // {
    //     id: 13,
    //     position: "Videographer",
    //     requirements: "Records captivating visual content.",
    //     image: "assets/img/Jobs/Videographer.jpg"
    // },
    {
        id: 14,
        position: "Editor",
        requirements: "Edits footage for engaging visual content.",
        image: "assets/img/Jobs/Editor.jpg"
    },
    // {
    //     id: 15,
    //     position: "Digital Marketing Specialist",
    //     requirements: "Executes online strategies to maximize digital presence.",
    //     image: "assets/img/Jobs/DMarketing.jpg"
    // }
]

var jobsDescription = [
    {
        id: 1,
        position: "Coordinator",
        responsibilities: [
            "Responsibility 1",
            "Responsibility 2"
        ],
        requirements: [
            "Requirements 1",
            "Requirements 2"
        ]
    },
    {
        id: 2,
        position: "Assistant",
        responsibilities: [
            "Responsibility 1",
            "Responsibility 2"
        ],
        requirements: [
            "Requirements 1",
            "Requirements 2"
        ]
    },
    {
        id: 3,
        position: "Driver",
        responsibilities: [
            "Responsibility 1",
            "Responsibility 2"
        ],
        requirements: [
            "Requirements 1",
            "Requirements 2"
        ]
    },
    {
        id: 4,
        position: "Wardrobe Supervisor",
        responsibilities: [
            "Responsibility 1",
            "Responsibility 2"
        ],
        requirements: [
            "Requirements 1",
            "Requirements 2"
        ]
    },
    {
        id: 5,
        position: "Crafter",
        responsibilities: [
            "Responsibility 1",
            "Responsibility 2"
        ],
        requirements: [
            "Requirements 1",
            "Requirements 2"
        ]
    },
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
                            <a>${vacancy.description ? "View Description" : "Apply Now"}</a>
                        </div>
                    </div>
                </div>`;

        $(".jobList").append(job);
    });
}

function renderDescription(position) {
    $("#responsibilitiesList").empty();
    $("#requirementsList").empty();
    var chosenJob = jobsDescription.find(job => job.position == position);
    var resp = ``;
    var req = ``;

    chosenJob.responsibilities.forEach(responsibility => {
        resp = `<li>${responsibility}</li>`;

        $("#responsibilitiesList").append(resp);
    });

    chosenJob.requirements.forEach(requirement => {
        req = `<li>${requirement}</li>`;

        $("#requirementsList").append(req);
    })
}

var choreoTabs = [
    {
        id: 1,
        name: "Our Stars",
        elements: [
            // {
            //     id: 1,
            //     image: "assets/img/Stars/Ebki.jpg",
            //     name: "KARL HUSEIN",
            //     summary: "Ebki - Music Video",
            //     href: "https://youtube.com",
            // },
            // {
            //     id: 2,
            //     image: "assets/img/Stars/MokhtasarElKalam.jpg",
            //     name: "LAILA CHANDOUL",
            //     summary: "Mokhtasar El Kalam - Music Video",
            //     href: "https://youtube.com",
            // },
            // {
            //     id: 3,
            //     image: "assets/img/Stars/KhamsehWNoss.jpg",
            //     name: "NADINE NJEIM & KOSAI KHAULI",
            //     summary: "Khamseh W Noss - TV Series",
            //     href: "https://youtube.com",

            // },
            // {
            //     id: 4,
            //     image: "assets/img/Stars/Paranoia.jpg",
            //     name: "DALIDA KHALIL",
            //     summary: "Paranoia - TV Series",
            //     href: "https://youtube.com",

            // },
            {
                id: 5,
                image: "assets/img/Stars/Woseltelha.jpg",
                name: "HAIFA WEHBE",
                summary: "Woseltelha - Live Concert",
                href: "https://youtube.com/shorts/48jXTIceaB0?si=5v4Ta2eYj2RmWIIa",

            },
            {
                id: 6,
                image: "assets/img/Stars/Aziza.jpg",
                name: "AZIZA",
                summary: "The Show - Live Concert",
                href: "https://youtu.be/GkyzmWZjFxE?si=ipf12_B7GX3THm5i",

            },
        ]
    },
    {
        id: 2,
        name: "Our Clubs",
        elements: [
            {
                id: 7,
                image: "assets/img/Clubs/Ava.jpg",
                name: "AVA",
                summary: "Beirut, Lebanon",
                href: "https://youtu.be/WpziTVP_DzY?si=I1ZBna5opwREuVZz"
            },
            {
                id: 8,
                image: "assets/img/Clubs/Seafront.jpg",
                name: "SEAFRONT",
                summary: "Kaslik, Lebanon",
                href: "https://youtube.com/shorts/8jxuLF0jQh0?si=0l434eKF3tMCDqmE"
            },
            {
                id: 9,
                image: "assets/img/Clubs/Kai.jpg",
                name: "KAI",
                summary: "Batroun, Lebanon",
                href: "https://youtube.com/shorts/jCzdL_QE47A?si=vw43hFm4YPFc18Xp"
            },
            {
                id: 10,
                image: "assets/img/Clubs/Kloud.jpg",
                name: "KLOUD",
                summary: "Dbaye, Lebanon",
                href: "https://youtube.com/shorts/6cyvM5eIm_w?si=0X7gHm-6kvuqpJmI"
            },
            // {
            //     id: 11,
            //     image: "assets/img/Clubs/Andalucia.jpg",
            //     name: "ANDALUCIA",
            //     summary: "Monot, Lebanon",
            //     href: "https://youtube.com/"
            // }
        ]
    },
    {
        id: 3,
        name: "Our Weddings & Events",
        elements: [
            {
                type: "video",
                src: "assets/img/Weddings&Events/W&E.jpg",
                link: "https://youtu.be/zzk59n-Yunc?si=wwRWNL6mhBPHCvo9",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/7C2A9699.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/7C2A9022.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/M_L_4251.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/R_M19486.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/5W4A4828.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/R_M10816.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/ALY_0219.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/MAZ5136.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/R_M19046.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/R_M19144.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/Post9.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/R_M19199.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/IAM_1304.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/RODD3360.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/IAM_1407.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/M_L_4396.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/R_M10677.jpg",
            },
            {
                type: "image",
                src: "assets/img/Weddings&Events/MAZ5220.jpg",
            },
        ]
    }
]

function choreographyTabs() {
    var tabs = ``;
    var grids = ``;
    var modal = `<div id="galleryModal" class="modal">
                    <i onclick="closeModal()" class="fas fa-close"></i>
                    <div class="modal-content">
                        <img id="galleryImg">
                    </div>
                </div>`;

    choreoTabs.forEach((tab, index) => {
        tabs += `<a onclick="serviceShow(${index + 1})" ${index === 0 ? 'class="green"' : ''}>${tab.name}</a>`;

        grids += `<div class="grid service-${index + 1} ${index !== 0 ? 'd-none' : ''} ${tab.name === 'Our Weddings & Events' ? 'displayCatalogue' : ''}">`;
        if (tab.name != "Our Weddings & Events") {
            tab.elements.forEach(grid => {
                grids += `<a ${grid.href ? `href=${grid.href} target="_blank"` : `href="choreographyService.html?id=${tab.id}?name=${grid.name}"`}>
                            <div class="service">
                                <img src="${grid.image}" alt="Img">
                                ${
                                    grid.name || grid.summary ?
                                    `<div class="information">
                                        ${grid.name ? `<div class="name">${grid.name}</div>` : ''}
                                        ${grid.summary ? `<div class="summary">${grid.summary}</div>` : ''}
                                    </div>` :
                                    ''
                                }
                            </div>
                        </a>`;
            });
        } else {
            grids += `<div class="row">`;
            let rowFill = 0;

            tab.elements.forEach(grid => {
                if (grid.type === "image") {
                    rowFill += 25;
                    if (rowFill <= 100) {
                        grids += `<div class="${grid.type}"><img onclick="showModal(this)" src="${grid.src}" alt="Img"></div>`;
                    } else {
                        rowFill = 25;
                        grids += `</div>
                                <div class="row">
                                    <div class="${grid.type}"><img onclick="showModal(this)" src="${grid.src}" alt="Img"></div>`;
                    }
                } else if (grid.type === "video") {
                    rowFill += 50;
                    if (rowFill <= 100) {
                        grids += `<div class="${grid.type}"><img onclick="socialMedia('${grid.link}')" src="${grid.src}" alt="Video"></div>`;
                    } else {
                        rowFill = 50;
                        grids += `</div>
                                <div class="row">
                                    <div class="${grid.type}"><img onclick="socialMedia('${grid.link}')" src="${grid.src}" alt="Video"></div>`;
                    }
                }
            });
            grids += `</div>`;
        }
        grids += `</div>`;
    });

    $(".servicesGrid .tabs").append(tabs);
    $(".servicesGrid .wrap").append(grids);
    $(".servicesGrid .wrap").append(modal);
}

var designTabs = [
    {
        id: 1,
        name: "Our Projects",
        elements: [
            {
                id: 1,
                image: "assets/img/Rectangle.png",
                name: "CHICAGO ARABIA",
                summary: "Roy El Khouri - Broadway Musical",
                type: "grid",
                images: [
                    {
                        type: "video",
                        src: "assets/img/Rectangle.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                ],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
            },
            {
                id: 2,
                image: "assets/img/Rectangle.png",
                name: "LEA MAKHOUL",
                summary: "Artist - Photoshoot",
                type: "grid",
                images: [
                    {
                        type: "video",
                        src: "assets/img/Rectangle.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                ],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
            },
            {
                id: 3,
                image: "assets/img/Rectangle.png",
                name: "MAROUN CONSTANTINE",
                summary: "Jewelery Design - Photoshoot",
                type: "grid",
                images: [
                    {
                        type: "video",
                        src: "assets/img/Rectangle.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                ],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
            },
            {
                id: 4,
                image: "assets/img/Rectangle.png",
                name: "NADA ABOU FARHAT",
                summary: "Artist - Photoshoot",
                type: "grid",
                images: [
                    {
                        type: "video",
                        src: "assets/img/Rectangle.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                ],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
            },
            {
                id: 5,
                image: "assets/img/Rectangle.png",
                name: "EBKI",
                summary: "Karl Husein - Music Video",
                type: "grid",
                images: [
                    {
                        type: "video",
                        src: "assets/img/Rectangle.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                ],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
            },
            {
                id: 6,
                image: "assets/img/Rectangle.png",
                name: "RATATA",
                summary: "Lea Makhoul - Music Video",
                type: "grid",
                images: [
                    {
                        type: "video",
                        src: "assets/img/Rectangle.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                    {
                        type: "image",
                        src: "assets/img/Square.png",
                    },
                ],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
            },
            {
                id: 7,
                image: "assets/img/Rectangle.png",
                name: "ZAKKI BLINK",
                summary: "Al Makassed - Commercial",
                type: "descriptive",
                images: [
                    "assets/img/Rectangle(2).png",
                    "assets/img/Rectangle(2).png",
                    "assets/img/Rectangle(2).png",
                ],
                // concept: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
                info: {
                    "Lyrics and Composition": "Test",
                    "Music Designer": "Test",
                    "Recording": "Test",
                    "Mix and Mastering": "Test",
                    "Directed By": "Test",
                    "Choreographer & Stylist": "Test",
                }
            },
            {
                id: 8,
                image: "assets/img/Rectangle.png",
                name: "MEMOTILES",
                summary: "Commercial",
                type: "descriptive",
                images: [
                    "assets/img/Rectangle(2).png",
                    "assets/img/Rectangle(2).png",
                    "assets/img/Rectangle(2).png",
                ],
                // concept: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
                info: {
                    "Lyrics and Composition": "Test",
                    "Music Designer": "Test",
                    "Recording": "Test",
                    "Mix and Mastering": "Test",
                    "Directed By": "Test",
                    "Choreographer & Stylist": "Test",
                }
            },
        ]
    },
    {
        id: 2,
        name: "Our Designs",
        elements: [
            {
                id: 9,
                image: "assets/img/Rectangle.png",
                name: "CHRISTMAS",
                // summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
                type: "slide",
                images: [
                    [
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                    ],
                    [
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                    ],
                ]
            },
            {
                id: 10,
                image: "assets/img/Rectangle.png",
                name: "FOLKLORE",
                // summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
                type: "slide",
                images: [
                    [
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                    ],
                    [
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                    ],
                ]
            },
            {
                id: 11,
                image: "assets/img/Rectangle.png",
                name: "ORIENTALE",
                // summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
                type: "slide",
                images: [
                    [
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                    ],
                    [
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                    ],
                ]
            },
            {
                id: 12,
                image: "assets/img/Rectangle.png",
                name: "STREETSTYLE",
                // summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
                type: "slide",
                images: [
                    [
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                    ],
                    [
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                        "assets/img/Rectangle(2).png",
                    ],
                ]
            }
        ]
    }
]

function stylingTabs() {
    var tabs = ``;
    var grids = ``;

    designTabs.forEach((tab, index) => {
        tabs += `<a onclick="serviceShow(${index + 1})" ${index === 0 ? 'class="pink"' : ''}>${tab.name}</a>`;

        grids += `<div class="grid service-${index + 1} ${index !== 0 ? 'd-none' : ''}">`;
        tab.elements.forEach(grid => {
            grids += `<a href="designService.html?id=${tab.id}?name=${grid.name}">
                        <div class="service">
                            <img src="${grid.image}" alt="Img">
                            <div class="information">
                                <div class="name">${grid.name}</div>
                                ${grid.summary ? `<div class="summary">${grid.summary}</div>` : ''}
                            </div>
                        </div>
                    </a>`;
        });
        grids += `</div>`;
    });

    $(".servicesGrid .tabs").append(tabs);
    $(".servicesGrid .wrap").append(grids);
}

var artTabs = [
    {
        id: 1,
        image: "assets/img/ArtisticDirection/MrLebCover.jpg",
        name: "MR LEBANON 2024",
        summary: "Haifa Wehbe - Casino Du Liban",
        type: "grid",
        images: [
            {
                type: "video",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_100.jpg",
                link: "https://youtu.be/pYrZMdjldPo?si=6s3_QvrMGXMqsjLc",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_101.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_102.jpeg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_103.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_104.jpeg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_105.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_106.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_107.jpeg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_108.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_109.jpeg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_1010.jpeg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_1011.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_1012.jpeg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_1013.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_1014.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_1015.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_1016.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_1017.jpeg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_1018.jpeg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_1019.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_1020.jpeg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_1021.jpeg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/MrLeb/mrLeb_1022.jpeg",
            },
        ],
        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
    },
    {
        id: 2,
        image: "assets/img/ArtisticDirection/AhlamCover.jpg",
        name: "DIAMOND NIGHT",
        summary: "Ahlam Al Shamsi - Al Riyadh, KSA",
        type: "grid",
        images: [
            {
                type: "video",
                src: "assets/img/ArtisticDirection/Ahlam/AH_100.jpg",
                link: "https://youtu.be/m2i9zXV9qcA?si=UmwVBVd0g_8WS1wx",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Ahlam/AH_101.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Ahlam/AH_102.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Ahlam/AH_103.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Ahlam/AH_104.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Ahlam/AH_105.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Ahlam/AH_106.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Ahlam/AH_107.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Ahlam/AH_108.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Ahlam/AH_109.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Ahlam/AH_1010.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Ahlam/AH_1011.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Ahlam/AH_1012.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Ahlam/AH_1013.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Ahlam/AH_1014.png",
            },
        ],
        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
    },
    {
        id: 3,
        image: "assets/img/ArtisticDirection/KultCover.jpg",
        name: "KULT",
        summary: "Beirut, Lebanon",
        type: "grid",
        images: [
            {
                type: "video",
                src: "assets/img/ArtisticDirection/Kult/VAR_100.jpg",
                link: "https://youtu.be/moe2qFIx7qc?si=VfXmNJSsvx6Ad3bI",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_101.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_102.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_103.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_104.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_105.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_106.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_107.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_108.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_109.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_1010.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_1011.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_1012.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_1013.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_1014.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_1015.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_1016.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_1017.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Kult/VAR_1018.jpg",
            },
        ],
        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
    },
    {
        id: 4,
        image: "assets/img/ArtisticDirection/SayfCover.jpg",
        name: "SAYF",
        summary: "Waterfront Beirut, Lebanon",
        type: "grid",
        images: [
            {
                type: "video",
                src: "assets/img/ArtisticDirection/Sayf/SA_001.jpg",
                link: "https://youtu.be/lQAdLBk-6g0?si=SaTp1gXeghJVzu3W",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Sayf/SA_002.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Sayf/SA_003.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Sayf/SA_004.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Sayf/SA_005.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Sayf/SA_006.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Sayf/SA_007.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Sayf/SA_008.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Sayf/SA_009.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Sayf/SA_010.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/Sayf/SA_011.jpg",
            },
        ],
        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
    },
    {
        id: 5,
        image: "assets/img/ArtisticDirection/TATCover.jpg",
        name: "TETE A TETE",
        summary: "Christina Haddad, Casino Du Liban",
        type: "grid",
        images: [
            {
                type: "video",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_001.jpg",
                link: "https://youtu.be/h_QfzLDR3v8?si=NFBh60IcRV3HDkgQ",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_002.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_003.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_004.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_005.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_006.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_007.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_008.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_009.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0010.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0011.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0012.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0013.png",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0014.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0015.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0016.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0017.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0018.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0019.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0020.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0021.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0022.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0023.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0024.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0025.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0026.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0027.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0028.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0029.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0030.jpg",
            },
            {
                type: "image",
                src: "assets/img/ArtisticDirection/TeteATete/TAT_0031.jpg",
            },
        ],
        // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nec.",
    },
]

function directionTabs() {
    $(".servicesGrid .tabs").addClass("solo");
    $(".servicesGrid .tabs").text("OUR PROJECTS");

    var grids = `<div class="grid">`;

    artTabs.forEach(grid => {
        grids += `<a href="artService.html?id=${grid.id}?name=${grid.name}">
                    <div class="service">
                        <img src="${grid.image}" alt="Img">
                        <div class="information">
                            <div class="name">${grid.name}</div>
                            <div class="summary">${grid.summary}</div>
                        </div>
                    </div>
                </a>`;
        });
        grids += `</div>`;

    $(".servicesGrid .wrap").append(grids);
}

var styleCoaching = [
    {
        id: 1,
        img: "assets/img/StyleCoaching/Style.JPG",
        name: "Style Personality",
        summary: "Unlock your style potential with the Style Personality Assessment. It helps you find your unique fashion identity by understanding what you like, how you live, and what you dream of ensuring you spread confidence and charm on every occasion.",
        button: "BOOK A SESSION",
    },
    {
        id: 2,
        img: "assets/img/StyleCoaching/Body.jpg",
        name: "Body Shape Analysis",
        summary: "Discover the perfect fit with our Body Shape Analysis. Our style coach will guide you in understanding the aspects of your body type, to help you enhance your silhouette ensuring you always look your best. <br> Say goodbye to unsuitable outfits and hello to a wardrobe tailored just for you.",
        button: "BOOK A SESSION",
    },
    {
        id: 3,
        img: "assets/img/StyleCoaching/Color.jpg",
        name: "Color Analysis",
        summary: "Dive into the enchanting realm of color theory, where every shade matters. Decode undertones, master wardrobe selection, spice up your routine with professional tips.",
        button: "BOOK A SESSION",
    },
    {
        id: 4,
        img: "assets/img/StyleCoaching/Wardrobe.jpg",
        name: "Wardrobe Decluttering",
        summary: "Is your closet overflowing with clothes, but you never seem to find anything to wear? It's time to embark on a wardrobe decluttering journey! Our style coach will help you to declutter your wardrobe! You’ll feel lighter, more refreshed, and ready to take on the day with confidence!",
        button: "BOOK A SESSION",
    },
    {
        id: 5,
        img: "assets/img/StyleCoaching/Personal.jpg",
        name: "Personal Shopping",
        summary: "Whether you're searching for a special occasion ensemble or simply updating your everyday wardrobe, our expert stylist is here to help. No more endless scrolling or aimless wandering through stores—we'll do the legwork to find pieces that fit your needs and flatter your figure. Sit back, relax, and let us make shopping enjoyable and effortless for you.",
        button: "BOOK A SESSION",
    },
    {
        id: 6,
        img: "assets/img/StyleCoaching/Full.jpg",
        name: "Full Program",
        summary: "Experience the ultimate makeover with our all-in-one package, combining body shape analysis, personality testing, color analysis, wardrobe decluttering, and personal shopping. This comprehensive service not only makes the process enjoyable and fun but also delivers visible results in no time. Get ready to transform your life and elevate your personal style with ease!",
        button: "REGISTER NOW",
    },
]

function coachingList() {
    var list = `<div class="servicesList">`;
    var quantity;

    if (styleCoaching.length % 2 === 0) {
        quantity = "even";
    } else {
        quantity = "odd";
    };

    styleCoaching.forEach((topic, i) => {
        list += `<div class="list ${(quantity === 'even' && i % 2 === 0) ? 'odd' : ((quantity === 'odd' && i % 2 !== 0) ? 'odd' : 'even')}">
                    <div class="wrap">
                        <div class="demo">
                            <img src="${topic.img}" alt="Img">
                        </div>
                        <div class="information">
                            <div class="name">${topic.name}</div>
                            <div class="summary">${topic.summary}</div>
                            <div class="button peachBtn">
                                <a onclick="scrollToContact()">${topic.button}</a>
                            </div>
                        </div>
                    </div>
                </div>`
    });
    list += `</div>`;
    $(".serviceOptions").append(list);
}

var serviceTab

function showService(tab, name, color) {
    $(".breadCrumbs .serviceName span").text(tab);
    $(".breadCrumbs .projectName").text(name);

    var show = ``;

    if (serviceTab.type === "descriptive") {
        var imagesHTML = serviceTab.images.map(image => `<img onclick="showModal(this)" src="${image}" alt="Img">`).join('');
        var infosHTML = serviceTab.info
                        ? Object.entries(serviceTab.info).map(([key, value]) => `<div class="row"><div class="position">${key}</div><div class="name">${value}</div></div>`).join('')
                        : '';
        show += `<div class="galleryProject">
                    <img onclick="updateGallery(-1)" class="leftArrowLite" src="assets/img/leftArrowLite.png" alt="Img">
                    <div class="gallery">
                        ${imagesHTML}
                    </div>
                    <div id="galleryModal" class="modal">
                        <i onclick="closeModal()" class="fas fa-close"></i>
                        <div class="modal-content">
                            <img id="galleryImg">
                        </div>
                    </div>
                    <img onclick="updateGallery(1)" class="rightArrowLite" src="assets/img/rightArrowLite.png" alt="Img">
                </div>
                <div class="infoProject" ${serviceTab.concept ? "" : "style='justify-content: end'"}>
                    <div class="concept ${serviceTab.concept ? "" : "d-none"}">
                        <div class="title">CONCEPT</div>
                        <div class="details">${serviceTab.concept}</div>
                    </div>
                    <div class="projectInfo ${serviceTab.info ? "" : "d-none"}">
                        <div class="title">PROJECT INFO</div>
                        <div class="infoList">
                            ${infosHTML}
                        </div>
                    </div>
                    <div class="button ${color}">
                        <a onclick="scrollToContact()">Get In Touch</a>
                    </div>
                </div>`
    } else if (serviceTab.type === "grid") {
        var rows = `<div class="row">`;
        let rowFill = 0;

        serviceTab.images.forEach(grid => {
            if (grid.type === "image") {
                rowFill += 25;
                if (rowFill <= 100) {
                    rows += `<div class="${grid.type}"><img onclick="showModal(this)" src="${grid.src}" alt="Img"></div>`;
                } else {
                    rowFill = 25;
                    rows += `</div>
                            <div class="row">
                                <div class="${grid.type}"><img onclick="showModal(this)" src="${grid.src}" alt="Img"></div>`;
                }
            } else if (grid.type === "video") {
                rowFill += 50;
                if (rowFill <= 100) {
                    rows += `<div class="${grid.type}"><img onclick="socialMedia('${grid.link}')" src="${grid.src}" alt="Video"></div>`;
                } else {
                    rowFill = 50;
                    rows += `</div>
                            <div class="row">
                                <div class="${grid.type}"><img onclick="socialMedia('${grid.link}')" src="${grid.src}" alt="Video"></div>`;
                }
            }
        });
        rows += `</div>`;

        show += `<div class="displayProject">
                    <div class="display wrap">
                        <div class="projectDescription ${serviceTab.description ? "" : "d-none"}">
                            ${serviceTab.description}
                        </div>
                        <div id="displayCatalogue">
                            <div class="displayCatalogue displayCatalogue-1">
                                ${rows}
                            </div>
                        </div>
                        <div id="galleryModal" class="modal">
                            <i onclick="closeModal()" class="fas fa-close"></i>
                            <div class="modal-content">
                                <img id="galleryImg">
                            </div>
                        </div>
                        <div class="button ${color}">
                            <a onclick="scrollToContact()">Get In Touch</a>
                        </div>
                    </div>
                </div>`
    } else if (serviceTab.type === "slide") {
        for (let i = 0; i < serviceTab.images.length; i++) {
            
            var imagesHTML = serviceTab.images[i].map(image => `<img onclick="showModal(this)" src="${image}" alt="Img">`).join('');
            show += `<div class="galleryProject" ${i === serviceTab.images.length - 1 ? `style='padding-bottom: 16px'` : ''}>
                        <img onclick="updateGallery(-1)" class="leftArrowLite" src="assets/img/leftArrowLite.png" alt="Img">
                        <div class="gallery">
                            ${imagesHTML}
                        </div>
                        <img onclick="updateGallery(1)" class="rightArrowLite" src="assets/img/rightArrowLite.png" alt="Img">
                    </div>`
        }
        show += `<div id="galleryModal" class="modal">
                    <i onclick="closeModal()" class="fas fa-close"></i>
                    <div class="modal-content">
                        <img id="galleryImg">
                    </div>
                </div>`
    }

    $(".showService").append(show);
}

$(document).ready(function () {
    var pathName = window.location.pathname.slice(1);
    var params = window.location.href.split('?');
    if (params.length > 1) {
        var id = params[1].split('=')[1];
        var name = params[2].split('=')[1];
        name = name.replace(/%20/g, ' ');
    }

    setTimeout(function () {
        renderService();
        if (pathName === "choreography.html") {
            chooseService();
            choreographyTabs();
        } else if (pathName === "choreographyService.html") {
            var oneTab = choreoTabs.find(tabs => tabs.id == id);
            serviceTab = oneTab.elements.find(service => service.name == name);
            showService(`Movement & Choreography / ${oneTab.name}`, name, "green");
        } else if (pathName === "design.html") {
            chooseService();
            stylingTabs();
        } else if (pathName === "designService.html" || pathName === "designservice") {
            var oneTab = designTabs.find(tabs => tabs.id == id);
            serviceTab = oneTab.elements.find(service => service.name == name);
            showService(`Costume Design & Styling / ${oneTab.name}`, name, "pink");
        } else if (pathName === "art.html") {
            chooseService();
            directionTabs();
        } else if (pathName === "artService.html" || pathName === "artservice") {
            var oneTab = artTabs.find(tabs => tabs.id == id);
            serviceTab = oneTab;
            showService(`Artistic Direction / Our Projects`, name, "purple");
        } else if (pathName === "coaching.html") {
            chooseService();
            coachingList();
        };
        renderValue();
        renderClient();
        renderTestimonial();
        renderJob();
    }, 1000)
});

$(window).resize(function () {
    renderClient();
});