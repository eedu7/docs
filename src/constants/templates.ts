export const templates: {id: string, label: string, imageUrl: string, initialContent: string}[] = [
    {
        id: "blank",
        label: "Blank document",
        imageUrl: "/documents/blank-document.svg",
        initialContent: "<p></p>",
    },
    {
        id: "software-proposal",
        label: "Software development proposal",
        imageUrl: "/documents/software-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>
            <p><strong>Client:</strong> [Client Name]</p>
            <p><strong>Date:</strong> [Date]</p>
            <h2>Project Overview</h2>
            <p>[Provide a high-level overview of the project goals and expectations]</p>
            <h2>Scope of Work</h2>
            <ul>
                <li>Requirement gathering</li>
                <li>Design & Architecture</li>
                <li>Development</li>
                <li>Testing & QA</li>
                <li>Deployment</li>
            </ul>
            <h2>Timeline</h2>
            <p>[Estimated start and end date]</p>
            <h2>Budget</h2>
            <p>[Estimated budget]</p>
        `,
    },
    {
        id: "project-proposal",
        label: "Project proposal",
        imageUrl: "/documents/project-proposal.svg",
        initialContent: `
            <h1>Project Proposal</h1>
            <p><strong>Prepared for:</strong> [Client/Stakeholder Name]</p>
            <p><strong>Prepared by:</strong> [Your Name or Company]</p>
            <h2>Executive Summary</h2>
            <p>[Brief summary of the project and its objectives]</p>
            <h2>Goals & Objectives</h2>
            <p>[State the goals and expected outcomes of the project]</p>
            <h2>Methodology</h2>
            <p>[Explain how the project will be executed]</p>
            <h2>Timeline</h2>
            <p>[Outline key milestones and deadlines]</p>
        `,
    },
    {
        id: "business-letter",
        label: "Business letter",
        imageUrl: "/documents/business-letter.svg",
        initialContent: `
            <p>[Your Name]<br>[Your Position]<br>[Your Company]</p>
            <p>[Date]</p>
            <p>[Recipient's Name]<br>[Recipient's Position]<br>[Recipient's Company]</p>
            <p>Dear [Recipient's Name],</p>
            <p>[Introduce the purpose of the letter]</p>
            <p>[Details of your message]</p>
            <p>Sincerely,<br>[Your Name]</p>
        `,
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/documents/resume.svg",
        initialContent: `
            <h1>[Your Name]</h1>
            <p>Email: [Your Email] | Phone: [Your Phone] | Location: [City, Country]</p>
            <h2>Summary</h2>
            <p>[Brief summary of your professional experience and skills]</p>
            <h2>Experience</h2>
            <p><strong>[Job Title]</strong> – [Company], [Years]</p>
            <ul>
                <li>[Responsibility or achievement]</li>
            </ul>
            <h2>Education</h2>
            <p><strong>[Degree]</strong> – [Institution], [Years]</p>
            <h2>Skills</h2>
            <ul>
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
            </ul>
        `,
    },
    {
        id: "cover-letter",
        label: "Cover letter",
        imageUrl: "/documents/cover-letter.svg",
        initialContent: `
            <p>[Your Name]<br>[Your Address]<br>[City, State, Zip Code]</p>
            <p>[Date]</p>
            <p>[Hiring Manager’s Name]<br>[Company Name]<br>[Company Address]</p>
            <p>Dear [Hiring Manager’s Name],</p>
            <p>I am writing to express my interest in the [Job Title] position at [Company Name].</p>
            <p>[Highlight relevant experience and skills]</p>
            <p>Thank you for considering my application. I look forward to the opportunity to contribute to your team.</p>
            <p>Sincerely,<br>[Your Name]</p>
        `,
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/documents/letter.svg",
        initialContent: `
            <p>[Your Name]<br>[Your Address]</p>
            <p>[Date]</p>
            <p>[Recipient's Name]<br>[Recipient's Address]</p>
            <p>Dear [Recipient's Name],</p>
            <p>[Write the body of your letter here]</p>
            <p>Sincerely,<br>[Your Name]</p>
        `,
    },
];
