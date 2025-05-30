document.addEventListener('DOMContentLoaded', () => {
    // Define blog posts
    const posts = {
        '1': {
            title: "Wintech Cambodia",
            image: "/image/winteach.jpg",
            imageAlt: "Coding setup",
            author: "Ly Kimhab",
            date: "5 February 2024",
            content: `
               <p class="mb-4">Join Wintech Cambodia for an immersive 7-day training program designed to transform you into a proficient full-stack web developer. This hands-on course focuses on building a modern web application, such as a Khmer News App, using PHP, JavaScript, React, Laravel, and Figma for UX/UI design. Guided by our expert trainers, you’ll work through a structured curriculum culminating in a live demo.</p>
                <h2 class="font-orbitron text-primary text-lg mb-3">Program Overview</h2>
                <p class="mb-4">This intensive training equips you with practical skills in full-stack development, leveraging Wintech Cambodia’s expertise in creating innovative solutions like Angkor Tep POS and WinTech HR. Each day builds on the previous, guiding you from planning to deployment.</p>
                <ul class="list-disc pl-5 mb-4">
                    <li><strong>Day 1: Introduction to Wintech Cambodia</strong>: Learn about Wintech’s mission, projects, and the role of full-stack development in creating impactful applications.</li>
                    <li><strong>Day 2: Planning & Team Division</strong>: Form frontend and backend teams, plan the project, and explore UX/UI design with Figma.</li>
                    <li><strong>Day 3: Design Planning with PHP, JavaScript, React, Laravel</strong>: Define the project’s architecture, focusing on Laravel for backend and React for frontend.</li>
                    <li><strong>Day 4: Coding Frontend & Backend</strong>: Start coding the frontend with React and backend with Laravel and PHP.</li>
                    <li><strong>Day 5: Coding & Integration</strong>: Integrate frontend and backend, ensuring seamless communication using APIs.</li>
                    <li><strong>Day 6: Testing</strong>: Perform unit, integration, and user acceptance testing to ensure functionality and reliability.</li>
                    <li><strong>Day 7: Demo Day</strong>: Present your completed project to peers and instructors at Wintech Cambodia.</li>
                </ul>
                <h2 class="font-orbitron text-primary text-lg mb-3">Daily Breakdown</h2>
                <p class="mb-4"><strong>Day 1: Introduction to Wintech Cambodia</strong><br>Begin with an overview of Wintech Cambodia’s innovative projects, including the Khmer News App, Angkor Tep POS, and WinTech HR. Understand the company’s focus on user-centric solutions and the importance of full-stack development. Participate in a Q&A session with industry experts to set the stage for the week.</p>
                <p class="mb-4"><strong>Day 2: Planning & Team Division</strong><br>Divide into frontend (React, JavaScript) and backend (PHP, Laravel) teams. Collaborate on project planning, defining user stories and technical requirements for a news app. Use Figma to create wireframes and mockups, focusing on intuitive UX/UI design to enhance user engagement.</p>
                <p class="mb-4"><strong>Day 3: Design Planning with PHP, JavaScript, React, Laravel</strong><br>Plan the project’s technical architecture. Design the backend with Laravel, setting up routes, controllers, and models for news content management. For the frontend, outline React components and state management. Use Figma to refine UX/UI designs based on feedback.</p>
                <p class="mb-4"><strong>Day 4: Coding Frontend & Backend</strong><br>Start coding: frontend teams build responsive interfaces with React and JavaScript, using Tailwind CSS for styling. Backend teams implement Laravel APIs with PHP, connecting to a PostgreSQL database for data storage. Collaborate to ensure alignment between teams.</p>
                <p class="mb-4"><strong>Day 5: Coding & Integration</strong><br>Continue coding and integrate frontend and backend using RESTful APIs. Use JavaScript (Axios) to fetch data from Laravel endpoints. Test integration points to ensure seamless data flow, focusing on features like news article display and user authentication.</p>
                <p class="mb-4"><strong>Day 6: Testing</strong><br>Conduct comprehensive testing: unit tests for Laravel backend logic, integration tests for API endpoints, and user acceptance testing for the React frontend. Use tools like PHPUnit and Jest to identify and fix bugs, ensuring a robust application.</p>
                <p class="mb-4"><strong>Day 7: Demo Day</strong><br>Deploy the application using Docker for consistency. Present the completed Khmer News App to instructors and peers at Wintech Cambodia. Showcase features like news browsing, user authentication, and responsive design. Receive feedback and certificates of completion.</p>
                <div class="flex flex-col sm:flex-row gap-4 mb-4">
                    <img src="/myportfolio/image/1.jpg" alt="Wintech Cambodia training session" class="w-full sm:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-[1.02]">
                    <img src="/myportfolio/image/3.jpg" alt="Project demo screenshot" class="w-full sm:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-[1.02]">
                </div>
                <h2 class="font-orbitron text-primary text-lg mb-3">Why Train with Wintech Cambodia?</h2>
                <p class="mb-4">Wintech Cambodia combines industry expertise with hands-on training, empowering you to build real-world applications. Our trainers, experienced in developing solutions like the Khmer News App, guide you through modern tools and best practices. Whether you’re a beginner or advancing your skills, this program prepares you for a tech career.</p>
                <p class="mb-4">Register now! Contact us at <a href="mailto:info@wintech.com.kh" class="text-primary hover:underline">info@wintech.com.kh</a> or visit <a href="https://wintech.com.kh" class="text-primary hover:underline">wintech.com.kh</a> for details.</p>
            `
        },
        '2': {
            title: "LY Kun MEDIA",
            image: "/image/likun.jpg",
            imageAlt: "Developer profile",
            author: "Ly Kimhab",
            date: "June 22, 2022",
            content: `
               <p class="mb-4">Join Ly Kun Media in Phnom Penh, Cambodia, for an intensive 7-day training program designed to equip you with essential skills in UI/UX design and frontend development. This hands-on course guides you through creating user-centric interfaces and building dynamic web applications, inspired by projects like the Khmer News App, using tools like Figma, Adobe XD, HTML, CSS, JavaScript, React, and Vite.</p>
                <h2 class="font-orbitron text-primary text-lg mb-3">Program Overview</h2>
                <p class="mb-4">Led by Ly Kun Media’s experienced instructors, this training combines design and coding to prepare you for a career in frontend development and UI/UX design. Each day builds toward a final project, ensuring practical, industry-relevant skills.</p>
                <ul class="list-disc pl-5 mb-4">
                    <li><strong>Day 1: Introduction to Ly Kun Media</strong>: Discover Ly Kun Media’s mission and its role in creating innovative media solutions.</li>
                    <li><strong>Day 2: UI/UX Tools and Color Theory</strong>: Explore Figma, Adobe XD, and color principles for effective UI/UX design.</li>
                    <li><strong>Day 3: Project Design with Figma</strong>: Design UI/UX wireframes and posters for a news app using Figma.</li>
                    <li><strong>Day 4: Understanding Frontend Development</strong>: Learn the fundamentals of HTML, CSS, JavaScript, and modern frameworks.</li>
                    <li><strong>Day 5: Coding with HTML, CSS, JS, React, and Vite</strong>: Build a responsive frontend for the news app.</li>
                    <li><strong>Day 6: Review Frontend Project Results</strong>: Test and refine the frontend project for functionality and design.</li>
                    <li><strong>Day 7: Final Project Check</strong>: Present and evaluate the completed project at Ly Kun Media.</li>
                </ul>
                <h2 class="font-orbitron text-primary text-lg mb-3">Daily Breakdown</h2>
                <p class="mb-4"><strong>Day 1: Introduction to Ly Kun Media</strong><br>Get to know Ly Kun Media, a dynamic media company in Phnom Penh focused on innovative digital solutions, including apps like the Khmer News App. Learn about its mission to create user-centric media experiences and the role of UI/UX and frontend development in achieving this. Engage in a Q&A with industry professionals to set goals for the training.</p>
                <p class="mb-4"><strong>Day 2: UI/UX Tools and Color Theory</strong><br>Dive into UI/UX design fundamentals, focusing on color theory (e.g., color psychology, contrast, harmony) and tools like Figma and Adobe XD. Participate in hands-on exercises to create basic layouts, learning how to use Figma’s collaborative features and Adobe XD’s prototyping capabilities to design intuitive interfaces.</p>
                <p class="mb-4"><strong>Day 3: Project Design with Figma</strong><br>Start designing a news app project, creating wireframes, mockups, and promotional posters in Figma. Focus on user flows, responsive layouts, and visual hierarchy to ensure an engaging UI/UX. Receive feedback from instructors to refine designs for the Khmer News App.</p>
                <p class="mb-4"><strong>Day 4: Understanding Frontend Development</strong><br>Explore the core concepts of frontend development, including HTML for structure, CSS for styling, and JavaScript for interactivity. Learn about frameworks like React for building dynamic UIs and Vite as a modern build tool for faster development. Practice setting up a project environment with Vite.</p>
                <p class="mb-4"><strong>Day 5: Coding with HTML, CSS, JS, React, and Vite</strong><br>Begin coding the frontend of the news app. Use HTML and CSS (with Tailwind CSS for rapid styling), JavaScript for interactivity, and React to create reusable components. Set up the project with Vite for optimized development and build a responsive interface for news browsing and user interaction.</p>
                <p class="mb-4"><strong>Day 6: Review Frontend Project Results</strong><br>Test the frontend project for functionality, responsiveness, and design fidelity. Use tools like Jest for unit testing React components and browser dev tools to debug issues. Refine the UI based on user testing feedback to ensure a polished experience.</p>
                <p class="mb-4"><strong>Day 7: Final Project Check</strong><br>Present the completed Khmer News App frontend to instructors and peers at Ly Kun Media. Demonstrate features like news article display, responsive layouts, and interactive elements. Receive constructive feedback, discuss improvements, and earn a certificate of completion.</p>
                <div class="flex flex-col sm:flex-row gap-4 mb-4">
                    <img src="/myportfolio/image/likun1.jpg" alt="Ly Kun Media training session" class="w-full sm:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-[1.02]">
                    <img src="/myportfolio/image/likun2.jpg" alt="Frontend project screenshot" class="w-full sm:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-[1.02]">
                </div>
                <h2 class="font-orbitron text-primary text-lg mb-3">Why Train with Ly Kun Media?</h2>
                <p class="mb-4">Ly Kun Media is dedicated to fostering creativity and technical expertise in Cambodia’s tech scene. Our trainers bring real-world experience in UI/UX and frontend development, ensuring you gain practical skills for projects like the Khmer News App. Whether you’re a beginner or enhancing your skills, this program prepares you for a dynamic career in tech.</p>
                <p class="mb-4">Ready to start? Contact us at <a href="mailto:info@lykunmedia.com" class="text-primary hover:underline">info@lykunmedia.com</a> or visit our <a href="https://lykunmedia.com" class="text-primary hover:underline">website</a> for registration details!</p>
            `
        },
        '3': {
            title: "First Cambodia",
            image: "/image/firstcambodia.jpg",
            imageAlt: "Python code",
            author: "Ly Kimhab",
            date: "24 April 2023",
            content: `
            <p class="mb-4">Join First Cambodia for an intensive 7-day training program in Phnom Penh, designed to master C# and ASP.NET Core for building robust web applications with database integration. This hands-on course guides you through developing a project, such as a Khmer News App, culminating in a live demo, leveraging First Cambodia’s expertise in IT solutions.</p>
                <h2 class="font-orbitron text-primary text-lg mb-3">Program Overview</h2>
                <p class="mb-4">This training, led by First Cambodia’s expert instructors, equips you with practical skills in C#, ASP.NET Core, and database management. Through a project-based approach, you’ll build a fully functional web application, preparing you for real-world development challenges.</p>[](https://www.h2kinfosys.com/courses/dotnet-online-training-course-details/)
                <ul class="list-disc pl-5 mb-4">
                    <li><strong>Day 1: Introduction to First Cambodia</strong>: Learn about First Cambodia’s mission and IT solutions.</li>
                    <li><strong>Day 2: Introduction to C# and ASP.NET</strong>: Explore C# fundamentals and ASP.NET Core for web development.</li>
                    <li><strong>Day 3: Database Fundamentals</strong>: Understand database design and integration using SQL Server.</li>
                    <li><strong>Day 4: Team Project with C# and Database</strong>: Start building a web application as a team.</li>
                    <li><strong>Day 5: Testing the Project</strong>: Conduct unit and integration testing to ensure functionality.</li>
                    <li><strong>Day 6: Final Project Cleanup</strong>: Refine and optimize the project for deployment.</li>
                    <li><strong>Day 7: Project Demo</strong>: Present the completed application at First Cambodia.</li>
                </ul>
                <h2 class="font-orbitron text-primary text-lg mb-3">Daily Breakdown</h2>
                <p class="mb-4"><strong>Day 1: Introduction to First Cambodia</strong><br>Discover First Cambodia’s role as a leading IT solutions provider in Cambodia, delivering projects like cloud solutions and custom software. Learn how C# and ASP.NET power their innovative applications, such as the Khmer News App. Engage in a Q&A with instructors to understand the training goals and industry expectations.</p>
                <p class="mb-4"><strong>Day 2: Introduction to C# and ASP.NET</strong><br>Dive into C# programming, covering syntax, object-oriented principles, and data structures. Explore ASP.NET Core for building modern web applications, focusing on MVC architecture, controllers, and views. Set up a development environment in Visual Studio and create a simple “Hello World” ASP.NET app.</p>[](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=vs-2022)[](https://www.guru99.com/asp-net-first-program.html)
                <p class="mb-4"><strong>Day 3: Database Fundamentals</strong><br>Learn database concepts, including relational database design and SQL Server integration with ASP.NET Core. Explore Entity Framework Core for data access, creating models and performing CRUD operations. Design a database schema for a news app to store articles and user data.</p>[](https://www.skillsoft.com/course/aspnet-mvc-web-applications-databases-entity-framework-0d78d2d9-a91c-11e7-b050-7a420a93a8e4)[](https://www.h2kinfosys.com/courses/dotnet-online-training-course-details/)
                <p class="mb-4"><strong>Day 4: Team Project with C# and Database</strong><br>Form teams to build a web application (e.g., a Khmer News App) using C# and ASP.NET Core. Implement backend logic with controllers and Entity Framework, connecting to a SQL Server database. Develop a frontend with Razor views and Bootstrap for responsive design. Collaborate to define project features like news browsing and user authentication.</p>[](https://learn.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=vs-2022)[](https://www.aspdotnet-suresh.com/2015/09/aspnet-mvc-example-demo-project-application-with-database-download.html)
                <p class="mb-4"><strong>Day 5: Testing the Project</strong><br>Test the application using unit tests for C# logic (with xUnit or MSTest) and integration tests for API endpoints. Validate frontend functionality and database interactions, ensuring features like article retrieval work seamlessly. Debug issues using Visual Studio tools and refine based on test results.</p>[](https://learn.microsoft.com/en-us/dotnet/samples-and-tutorials/)[](https://www.h2kinfosys.com/courses/dotnet-online-training-course-details/)
                <p class="mb-4"><strong>Day 6: Final Project Cleanup</strong><br>Optimize the project by refactoring code, improving performance, and ensuring security best practices (e.g., input validation, secure API endpoints). Prepare the application for deployment using Docker containers for consistency across environments. Finalize documentation and user guides.</p>[](https://learn.microsoft.com/en-us/dotnet/samples-and-tutorials/)
                <p class="mb-4"><strong>Day 7: Project Demo</strong><br>Deploy the application to a local or cloud environment (e.g., Azure App Service) and present it to instructors and peers at First Cambodia. Showcase features like news display, user login, and responsive design. Receive feedback, discuss improvements, and earn a certificate of completion.</p>[](https://github.com/Azure-Samples/dotnet-sqldb-tutorial)
                <div class="flex flex-col sm:flex-row gap-4 mb-4">
                    <img src="/myportfolio/image/first1.jpg" alt="First Cambodia training session" class="w-full sm:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-[1.02]">
                    <img src="/myportfolio/image/first2.jpg" alt="C# ASP.NET project screenshot" class="w-full sm:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-[1.02]">
                </div>
                <h2 class="font-orbitron text-primary text-lg mb-3">Why Train with First Cambodia?</h2>
                <p class="mb-4">First Cambodia is a trusted IT leader in Cambodia, offering cutting-edge solutions and professional training in Microsoft technologies. Our instructors bring real-world experience, ensuring you gain practical skills for projects like the Khmer News App. This program is ideal for beginners and developers looking to advance their careers.</p>[](https://www.h2kinfosys.com/courses/dotnet-online-training-course-details/)
                <p class="mb-4">Ready to join? Contact us at <a href="mailto:info@firstcambodia.com.kh" class="text-primary hover:underline">info@firstcambodia.com.kh</a> or visit <a href="https://firstcambodia.com.kh" class="text-primary hover:underline">firstcambodia.com.kh</a> for registration details!</p>
            `
        },
         '4': {
            title: " Chief (Cambodia) Commercial Bank Plc",
            image: "/image/chiefbank.jpg",
            imageAlt: "Python code",
            author: "Ly Kimhab",
            date: "August 21, 2023",
            content: `
               <p class="mb-4">Join Chief (Cambodia) Commercial Bank Plc. in Phnom Penh for a 5-day practical training program designed to enhance your skills in software development for banking applications. This intensive course covers the project lifecycle, code security, and the waterfall model, culminating in a quiz to solidify your learning. Tailored for aspiring IT professionals, this training leverages Chief Cambodia’s expertise in financial technology.</p>
                <h2 class="font-orbitron text-primary text-lg mb-3">Program Overview</h2>
                <p class="mb-4">Led by Chief Cambodia’s experienced IT professionals, this training equips you with practical knowledge for building secure and reliable banking applications. Through interactive sessions and hands-on exercises, you’ll learn industry-standard practices applicable to projects like a banking transaction app.</p>
                <ul class="list-disc pl-5 mb-4">
                    <li><strong>Day 1: Introduction to Chief Cambodia</strong>: Explore Chief (Cambodia) Commercial Bank’s mission and IT operations.</li>
                    <li><strong>Day 2: Project Lifecycle</strong>: Understand the stages of software development in a banking context.</li>
                    <li><strong>Day 3: Code Security</strong>: Learn best practices for securing code in financial applications.</li>
                    <li><strong>Day 4: Waterfall Model</strong>: Dive into the waterfall methodology for structured project development.</li>
                    <li><strong>Day 5: Quiz on Lessons Learned</strong>: Test your knowledge with a comprehensive quiz.</li>
                </ul>
                <h2 class="font-orbitron text-primary text-lg mb-3">Daily Breakdown</h2>
                <p class="mb-4"><strong>Day 1: Introduction to Chief Cambodia</strong><br>Discover Chief (Cambodia) Commercial Bank Plc., a leading financial institution in Phnom Penh, and its commitment to innovative banking solutions. Learn about the role of IT in supporting services like online banking and transaction systems. Engage in a Q&A with IT leaders to understand the bank’s technology goals and training objectives.</p>
                <p class="mb-4"><strong>Day 2: Project Lifecycle</strong><br>Explore the software development lifecycle (SDLC) tailored to banking applications. Cover stages like requirements gathering, design, implementation, testing, and maintenance. Participate in a group exercise to map out the lifecycle for a banking app, such as a transaction or news portal, ensuring alignment with business needs.</p>
                <p class="mb-4"><strong>Day 3: Code Security</strong><br>Learn best practices for securing code in financial applications, including input validation, encryption, and protection against vulnerabilities like SQL injection and XSS. Study secure coding standards (e.g., OWASP guidelines) and analyze real-world examples using languages like C# or Python, relevant to banking systems.</p>
                <p class="mb-4"><strong>Day 4: Waterfall Model</strong><br>Dive into the waterfall model, a structured approach to software development. Understand its phases (requirements, design, implementation, verification, maintenance) and how they apply to banking projects. Work on a case study to design a project plan for a banking app using the waterfall methodology, ensuring clarity and documentation.</p>
                <p class="mb-4"><strong>Day 5: Quiz on Lessons Learned</strong><br>Test your understanding of the training through a comprehensive quiz covering the project lifecycle, code security, and the waterfall model. Engage in a group review session to discuss answers and clarify concepts. Receive feedback from instructors and a certificate of completion from Chief Cambodia.</p>
                <div class="flex flex-col sm:flex-row gap-4 mb-4">
                    <img src="/myportfolio/image/chief1.jpg" alt="Chief Cambodia training session" class="w-full sm:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-[1.02]">
                    <img src="/myportfolio/image/chief2.jpg" alt="Banking app screenshot" class="w-full sm:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-[1.02]">
                </div>
                <h2 class="font-orbitron text-primary text-lg mb-3">Why Train with Chief Cambodia?</h2>
                <p class="mb-4">Chief (Cambodia) Commercial Bank Plc. is a trusted name in Cambodia’s financial sector, leveraging advanced IT to deliver secure banking solutions. Our trainers bring expertise in financial technology, ensuring you gain practical skills for real-world applications. This program is ideal for those aiming to excel in banking IT.</p>
                <p class="mb-4">Ready to join? Contact us at <a href="mailto:info@chiefcambodia.com" class="text-primary hover:underline">info@chiefcambodia.com</a> or visit <a href="https://chiefcambodia.com" class="text-primary hover:underline">chiefcambodia.com</a> for registration details!</p>
            `
        },
          '5': {
            title: "Beltei International School",
            image: "/image/b15.jpg",
            imageAlt: "Python code",
            author: "Ly Kimhab",
            date: "October 5, 2022",
            content: `
              <p class="mb-4">Join Beltei International School in Cambodia for a 5-day training program designed to teach students essential digital skills using Microsoft Office (Word, Excel, PowerPoint) and Gmail. This hands-on course, led by experienced instructors, empowers students to create documents, analyze data, design presentations, and set up email accounts, fostering IT literacy for academic and professional success.</p>
                <h2 class="font-orbitron text-primary text-lg mb-3">Program Overview</h2>
                <p class="mb-4">This training equips students with practical skills in Microsoft Office and email management, tailored to Beltei International School’s commitment to quality education. Through interactive lessons and guided exercises, students will gain confidence in using essential tools for school and beyond.</p>
                <ul class="list-disc pl-5 mb-4">
                    <li><strong>Day 1: Introduction to Microsoft Office</strong>: Learn the basics of Microsoft Office and its applications.</li>
                    <li><strong>Day 2: Microsoft Word</strong>: Create documents with page layouts and tables of contents.</li>
                    <li><strong>Day 3: Microsoft Excel</strong>: Perform calculations like sum, average, and total scores.</li>
                    <li><strong>Day 4: Microsoft PowerPoint</strong>: Design engaging presentation slides.</li>
                    <li><strong>Day 5: Gmail Account Creation</strong>: Set up and manage Gmail accounts.</li>
                </ul>
                <h2 class="font-orbitron text-primary text-lg mb-3">Daily Breakdown</h2>
                <p class="mb-4"><strong>Day 1: Introduction to Microsoft Office</strong><br>Explore the basics of Microsoft Office, including Word, Excel, and PowerPoint. Understand their role in academic and professional tasks, such as document creation, data analysis, and presentations. Participate in a hands-on session to navigate the Office interface and discuss how these tools support student projects.</p>
                <p class="mb-4"><strong>Day 2: Microsoft Word</strong><br>Learn to use Microsoft Word to create professional documents. Practice formatting pages, inserting headers and footers, and creating tables of contents. Complete an exercise to design a report with a title page and structured content, suitable for school assignments.</p>
                <p class="mb-4"><strong>Day 3: Microsoft Excel</strong><br>Dive into Microsoft Excel to perform calculations. Learn to use functions like SUM, AVERAGE, and basic formulas to calculate total scores for a sample student dataset. Create simple charts to visualize data, enhancing skills for academic and data-driven tasks.</p>
                <p class="mb-4"><strong>Day 4: Microsoft PowerPoint</strong><br>Master Microsoft PowerPoint to create engaging presentation slides. Learn to design layouts, add text, images, and transitions, and organize content for clarity. Create a short presentation on a topic like “Why Digital Skills Matter” to practice for school or community events.</p>
                <p class="mb-4"><strong>Day 5: Gmail Account Creation</strong><br>Learn how to create and manage Gmail accounts. Understand email basics, including composing, sending, and organizing emails. Practice setting up a Gmail account, configuring security settings, and using features like labels and filters. Complete a task to send a sample email to instructors.</p>
                <div class="flex flex-col sm:flex-row gap-4 mb-4">
                    <img src="/myportfolio/image/b151.jpg" alt="Beltei International School training session" class="w-full sm:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-[1.02]">
                    <img src="/myportfolio/image/b152.jpg" alt="Microsoft Office project screenshot" class="w-full sm:w-1/2 h-64 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-[1.02]">
                </div>
                <h2 class="font-orbitron text-primary text-lg mb-3">Why Train with Beltei International School?</h2>
                <p class="mb-4">Beltei International School is a leading educational institution in Cambodia, dedicated to empowering students with practical skills. Our experienced instructors provide hands-on training in Microsoft Office and digital literacy, preparing students for academic success and future careers. This program is ideal for beginners and young learners.</p>
                <p class="mb-4">Ready to join? Contact us at <a href="mailto:info@beltei.edu.kh" class="text-primary hover:underline">info@beltei.edu.kh</a> or visit <a href="https://www.beltei.edu.kh" class="text-primary hover:underline">www.beltei.edu.kh</a> for registration details!</p>
            `
        }
    };

    // Parse query parameter and update content
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id') || '1'; // Default to first post
    const post = posts[postId] || posts['1']; // Fallback if id invalid

    // Update DOM elements
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-image').src = post.image;
    document.getElementById('post-image').alt = post.imageAlt;
    document.getElementById('post-author').textContent = post.author;
    document.getElementById('post-date').textContent = post.date;
    document.getElementById('post-content').innerHTML = post.content;

    // Set active tab
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.getAttribute('href') === './Blog.html') {
            tab.classList.add('active', 'bg-primary/10', 'text-primary');
        } else {
            tab.classList.remove('active', 'bg-primary/10', 'text-primary');
        }
    });
});