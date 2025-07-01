import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
        <h1>Hi, I'm Sandilya Mekala</h1>
        <p>
            <strong>Email:</strong> <a href="mailto:sandilyamekala@gmail.com">sandilyamekala@gmail.com</a> | <strong>Phone:</strong> 602-561-3152<br />
            <a href="https://www.linkedin.com/in/sandilya-mekala-42823115b/" target="_blank">LinkedIn</a> |{' '}
            <a href="https://github.com/SandilyaMekala" target="_blank">GitHub</a> |{' '}
            <a href={`${process.env.PUBLIC_URL}/files/Sandilya_Mekala_Resume.docx`} download className="download-button">
                Resume
            </a>
        </p>

        <section>
            <h1>About me</h1>
            <p>
                I'm an enthusiastic frontend developer with 3+ years of experience. I update myself with latest technologies and am a constant learner.
            </p>
        </section>

        <section>
            <h1>Education</h1>
            <p><strong>Master's in Information Technology</strong>, Arizona State University, CGPA: 4.0</p>
            <ul>
            <li>New American University (NAmU) scholarship recipient</li>
            <li>AZNext Career Leadership Fellowship – IBM, AWS professional development</li>
            </ul>
            <p><strong>B.Tech in Computer Science and Systems Engineering</strong>, Sree Vidyanikethan Engineering College, CGPA: 3.6</p>
        </section>

        <section>
            <h1>Professional Experience</h1>
            <h3>Engineering Volunteer – AiGenie (ASU)</h3>
            <ul>
                <li>Enhanced student regional learning using OpenAI API for chat bot with custom react chat component for 25% reusability.</li>
                <li>Coded WebGL avatar character with react-three package to improve interaction with user in teaching, answering questions by 20%.</li>
            </ul>

            <h3>Associate (Sr. Developer) – Cognizant</h3>
            <ul>
                <li>Architected user-friendly web applications for 2+ clients internationally with React, delivering scalability and accessibility.</li>
                <li>Employed agile methodology to improve workflows, utilizing Docker for 10% faster local development.</li>
                <li>Accelerated milestones and recognized by customers for incorporating 90% of feedback with internal framework components.</li>
                <li>Optimized test accuracy by 80% in Azure Board, deploying UI across 4 phases with Azure Pipelines and Git for version control.</li>
            </ul>

            <h3>Intern – Cognizant</h3>
            <ul>
                <li>Customized two single-page web applications using MaterialUI, d3.js, Ag Grid libraries.</li>
                <li>Designed UX wireframes to follow SEO principles, which incremented performance by 50%.</li>
                <li>Applied JavaScript, ReactJS, advanced concepts of React Hooks, Redux, creating 1 internal Proof of Concept automation project.</li>
                <li>Managed project planning to provide KT and JIRA tracking, promoting customer satisfaction rates by 20%.</li>
            </ul>
        </section>

        <section>
            <h1>Projects</h1>
            <p>
            <strong><a href="https://closed-bird-duck.glitch.me" target="_blank">AI Chatbot</a></strong><br />
                Integrated LLM models such as Mistral for text and stable-diffusion for image generation for an AI chatbot.
            </p>
            <p>
                <strong>AI for Export Compliance – Honeywell</strong><br />
                Implemented AI systems solution pitch with Honeywell to prevent export data penalties, averaging $46 million.
                Communicated with 10+ industry professionals, including CISO of Maricopa County and ASU, as part of customer discovery.
            </p>
            <p>
            <strong>FM Global – Curation</strong><br />
            	Collaborated with cross-Functional team to share Azure B2C login portal across 2 applications and GraphQL to fetch data from endpoints.
                Documented solution for 6+ screens using custom components for customer experience of eCommerce sites.
            </p>
            <p>
            <strong>Walmart – REP Distribution</strong><br />
                Created dashboard screens for retail in-store management, increasing 15% of tracking assets to order low stock products.
                Implemented unit test cases using JEST/Enzyme by 80% cleaner pipelines for Azure DevOps through GitHub.
            </p>
        </section>

        <section>
            <h1>Work Experience</h1>
            <h3>Grader/Teaching Assistant (ASU)</h3>
            <ul>
                <li>Guided 90 students in coursework to provide detailed feedback to students.</li>
                <li>Mentored in 20+ assignments with office hours, improving class performance by 10% in final test.</li>
            </ul>
        </section>

        <section>
            <h1>Skills</h1>
            <p><strong>Frontend:</strong> HTML5, CSS, ES6, JavaScript, ReactJS, Redux, JEST, Enzyme, Figma</p>
            <p><strong>Backend:</strong> Java, Python, GraphQL</p>
            <p><strong>Databases:</strong> MySQL, Microsoft SQL Server</p>
            <p><strong>Cloud:</strong> Microsoft Azure (AZ900), AWS (Cloud Operations, Security Foundations)</p>
        </section>
    </div>
  );
};

export default Home;
