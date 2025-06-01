document.addEventListener('DOMContentLoaded', () => {
    // Language icon colors
    const languageColors = {
        'fab fa-python': '#3776AB', // Python blue
        'fab fa-js': '#F7DF1E', // JavaScript yellow
        'fab fa-html5': '#E34F26', // HTML5 orange
        'fab fa-golang': '#00ADD8', // Go cyan
        'fab fa-css3-alt': '#1572B6', // CSS3 blue
        'fab fa-figma': '#F24E1E' // Figma orange-red
    };

    // Built tech icon colors
    const builtColors = {
        'fab fa-react': '#61DAFB', // React cyan
        'fab fa-django': '#092E20', // Django green
        'fas fa-database': '#003087', // PostgreSQL blue
        'fab fa-firebase': '#FF9900', // AWS orange
        'fab fa-vuejs': '#4FC08D', // Vue.js green
        'fab fa-vercel': '#000000', // Vercel black
        'fab fa-docker': '#2496ED', // Docker blue
        'fab fa-github': '#181717', // GitHub dark gray
        'fab fa-node-js': '#339933', // Node.js green
        'fab fa-flutter': '#61DAFB',
    };

    // Define projects
    const projects = {
        '1': {
            title: "Khmer News App",
            image: "/myportfolio/image/p1.png",
            imageAlt: "E-commerce screenshot",
            description: "Full-stack online store with secure payments",
            languages: [],
            built: ['fas fa-database', 'fab fa-flutter', 'fab fa-firebase'],
            // github: "https://github.com/kimhab/ecommerce-platform",
            hosting: "https://homeworkauth-6ba05.web.app/"
        },
        '2': {
            title: "Booking Salon",
            image: "/myportfolio/image/p5.png",
            imageAlt: "Task app screenshot",
            description: "Team task tracking with real-time updates",
            languages: [],
            built: ['fas fa-database', 'fab fa-flutter', 'fab fa-firebase'],
            github: "https://github.com/lykimhab/bookingsalon",
            hosting: "https://kimhablogin.web.app/",
            demo: "https://www.facebook.com/share/v/1G7uRoQRPr/?mibextid=wwXIfr"
        },
        '3': {
            title: "Movie App",
            image: "/myportfolio/image/p2.png",
            imageAlt: "CLI tool screenshot",
            description: "Automate Python development tasks",
            languages: [],
            built: ['fas fa-database', 'fab fa-flutter', 'fab fa-firebase'],
            github: "https://github.com/lykimhab/movieappui"
        },
        '4': {
            title: "Inventory and Invoice management system",
            image: "/myportfolio/image/p6.png",
            imageAlt: "Portfolio screenshot",
            description: "Responsive portfolio showcasing projects",
            languages: ['fab fa-js', 'fab fa-html5', 'fab fa-css3-alt', 'fab fa-python'],
            built: ['fab fa-react', 'fab fa-vercel', 'fab fa-django'],
            github: "https://github.com/projectteamyear4/invoiceandinventory"
        },
        '5': {
            title: "Clone Website Zando",
            image: "/myportfolio/image/p7.png",
            imageAlt: "Chat app screenshot",
            description: "Instant messaging with WebSocket",
            languages: ['fab fa-js', 'fab fa-html5', 'fab fa-css3-alt'],
            built: [],
            github: "https://github.com/lykimhab/projecttrainning"
        },
        '6': {
            title: "Ahsora Wprld UX/UI(FIGMA)",
            image: "/myportfolio/image/p3.png",
            imageAlt: "API screenshot",
            description: "Scalable API for mobile apps",
            languages: ['fab fa-figma'],
            built: [],
            github: "https://www.figma.com/design/BSv6uIXQxmKU4oQ7so1wOh/Tshirtproject?node-id=0-1&p=f&t=Nnd8AR4Uj8W1rkCB-0"
        },
        '7': {
            title: "Khmer Streaming Music Website",
            image: "/myportfolio/image/p3.png",
            imageAlt: "API screenshot",
            description: "Scalable API for mobile apps",
            languages: ['fab fa-js', 'fab fa-html5', 'fab fa-css3-alt'],
            built: [],
            github: "https://github.com/lykimhab/music-webiste"
        },
        '8': {
            title: "Pet Shop Website",
            image: "/myportfolio/image/p3.png",
            imageAlt: "API screenshot",
            description: "Scalable API for mobile apps",
            languages: ['fab fa-js', 'fab fa-html5', 'fab fa-css3-alt'],
            built: [],
            github: "https://github.com/lykimhab/Frontend_PetShop"
        },
        '9': {
            title: "Khmer Food Website UX/UI(FIGMA)",
            image: "/myportfolio/image/p3.png",
            imageAlt: "API screenshot",
            description: "Scalable API for mobile apps",
            languages: ['fab fa-figma'],
            built: [],
            github: "https://www.figma.com/design/LxcadiLXGlFUksV4m7Fm4p/ProjectUXUI?node-id=0-1&p=f&t=qjz4yvdWth5Ffvr5-0"
        },
        '10': {
            title: "Emergency Service App UX/UI(FIGMA)",
            image: "/myportfolio/image/p3.png",
            imageAlt: "API screenshot",
            description: "Scalable API for mobile apps",
            languages: ['fab fa-figma'],
            built: [],
            github: "https://www.figma.com/design/2m8xEiEF1y0zAtQVqgyivU/emergency-app?node-id=0-1&p=f&t=0BVqSo0NlRvBracy-0"
        },
    };

    // Populate project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const projectId = card.getAttribute('data-project-id');
        const project = projects[projectId];

        if (!project) {
            console.error(`No project data found for ID: ${projectId}`);
            return;
        }

        try {
            // Populate language icons with brand colors
            const languagesContainer = card.querySelector('.languages');
            if (languagesContainer) {
                languagesContainer.innerHTML = project.languages.map(icon => `
                    <i class="${icon} text-xl transition-colors duration-300" style="color: ${languageColors[icon] || '#ff0000'};"></i>
                `).join('');
            } else {
                console.warn(`Languages container not found for project ID: ${projectId}`);
            }

            // Populate built tech icons with brand colors
            const builtContainer = card.querySelector('.built');
            if (builtContainer) {
                builtContainer.innerHTML = project.built.map(icon => `
                    <i class="${icon} text-xl transition-colors duration-300" style="color: ${builtColors[icon] || '#ff0000'};"></i>
                `).join('');
            } else {
                console.warn(`Built container not found for project ID: ${projectId}`);
            }

            // Populate links with appropriate icons, only showing available links
            const linksContainer = card.querySelector('.links');
            if (linksContainer) {
                let linksHTML = '';
                if (project.github) {
                    const isFigmaLink = project.github.includes('figma.com');
                    linksHTML += `
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="text-primary flex items-center gap-2 hover:underline transition-all duration-300">
                            <i class="${isFigmaLink ? 'fab fa-figma' : 'fab fa-github'} text-lg"></i> ${isFigmaLink ? 'Figma Design' : 'Source Code'}
                        </a>
                    `;
                }
                if (project.hosting) {
                    linksHTML += `
                        <a href="${project.hosting}" target="_blank" rel="noopener noreferrer" class="text-primary flex items-center gap-2 hover:underline transition-all duration-300">
                            <i class="fas fa-server text-lg"></i> Hosting
                        </a>
                    `;
                }
                if (project.demo) {
                    linksHTML += `
                        <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="text-primary flex items-center gap-2 hover:underline transition-all duration-300">
                            <i class="fas fa-external-link-alt text-lg"></i> Demo
                        </a>
                    `;
                }
                linksContainer.innerHTML = linksHTML;
            } else {
                console.warn(`Links container not found for project ID: ${projectId}`);
            }
        } catch (error) {
            console.error(`Error populating project card ${projectId}:`, error);
        }
    });
});