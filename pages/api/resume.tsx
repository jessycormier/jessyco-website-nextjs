import type { NextApiRequest, NextApiResponse } from 'next';
import { getContactInformation } from '../../app/resume/get-contact-information.function';
import { Resume } from '../../app/resume/resume.interface';
import { Section } from '../../app/resume/section.enum';

export default function resumeAPI(req: NextApiRequest, res: NextApiResponse) {
    const contactInformation = getContactInformation(req);

    const options = {
        displayContactDetailLabels: false
    };

    res.status(200).json({
        contactInformation,
        options,
        sections: [
            [Section.Summary,
                'I am an avid learner, a problem solver, and passionate about my work. I value, growth, excellence, and making a difference. In my personal time, I take on projects to improve my technical skills and use the opportunity to help people around me. As a creative outlet, I have developed a passion for black and white photography and music.'
            ],
            [Section.ProfessionalExperience, [
                {
                    company: 'Aspen University',
                    jobTitle: 'Senior Front-End Developer',
                    startDate: '2017',
                    endDate: '2022',
                    data: [
                        'Delivered a custom-built customer relationship management system (CRM)',
                        'Delivered a student application platform that supports older browser technology',
                        'Created a library (API) to communicate between internal products and 3rd party products',
                        'Developed stand-alone libraries and components that can be consumed by other developers via NPM / NuGet using the Azure DevOps Artifacts platform',
                        'Developed design system components using Bootstrap, Tailwind, and Storybooks',
                        'Delivered low-fidelity designs using Figma, and Adobe XD',
                        'Responsible for managing project dependency, upgrades, and releases',
                        'Developed processes for our DevOps team for automation and deployments',
                        'Being a team player, hosting scrum meetings, and mentoring developers',
                        'On-boarding new hires about our processes and technology',
                        'Setup and admin developer communication software'
                    ]
                },
                {
                    company: 'Ironflow Technologies',
                    jobTitle: 'Developer',
                    startDate: '2012',
                    endDate: '2017',
                    data: [
                        'Create and maintain our products in ASP.NET MVC/WebForms in both C# and VB',
                        'Front-end development including building front-end design framework(s) for other developers and products, design UI and UX',
                        'Project research and planning',
                        'Database development and planning',
                        'Managing communication tools and provide education for the team',
                        'Working with customer service team to resolve products/client issues'
                    ]
                },
                {
                    company: 'New Brunswick Community College (NBCC)',
                    jobTitle: 'Instructor',
                    startDate: '2014',
                    endDate: '2014',
                    data: [
                        'Creating and Reviewing course curriculum for students in PHP & MySQL',
                        'Deliver course curriculum through Blackboard Learning Management System and help them catch up on any missing lessons from other courses',
                        'Creating websites for clients, providing technical support and education'
                    ]
                },
                {
                    company: 'Atrinsic ',
                    jobTitle: 'Developer',
                    startDate: '2009',
                    endDate: '2011',
                    data: [
                        'Development on sites such as Kazaa (Python), corporate site, ez-tracks (Cold Fusion), ShopIt (PHP), Select Machinery INC (ASP.Net), BlueworldPools (ASP.Net)',
                        'Team meetings to create site wireframe, database design',
                        'Development of sites, troubleshooting existing, enhancements and refactoring',
                        'Integrating into social media platforms and using 3rd party APIs'
                    ]
                }
            ]],
            [Section.SkillsAndAbilities,
            ['Frameworks and Technologies', [
                ['Angular (v4+)', 'ReactJS', 'NextJS', 'Vue'],
                ['TypeScript', 'JavaScript', 'Query'],
                ['Node', 'Deno', 'Electron'],
                ['npm', 'yarn', 'webpack', 'gulp', 'grunt'],
                ['SOLID', 'KISS', 'DRY'],
                ['DI Pattern', 'Observer Pattern', 'Lazy Module Pattern', 'Singleton Pattern']
            ]],
            ['Design', [
                ['HTML', 'Markdown', 'Emmet'],
                ['CSS', 'Less', 'Sass', 'PostCSS'],
                ['Tailwind', 'Bootstrap'],
                ['Storybooks', 'Figma', 'Adobe XD'],
                ['Responsive design', 'UX & UI design']
            ]],
            ['Tools', [
                ['VS code', 'Visual Studio', 'Sublime'],
                ['Notepad++', 'Beyond Compare'],
                ['Git', 'SVN', 'Git Kraken', 'Github', 'DevOps'],
                ['Jenkins', 'Azure Pipelines', 'Azure Artifacts']
            ]],
            ['Database and APIs', [
                ['GraphQL', 'Neo4J', 'MongoDB', 'Firebase'],
                ['T-SQL', 'MySQL'],
                ['Postman', 'SQL Server', 'Json Server']
            ]],
            ['Testing', [
                ['E2E client-side testing'],
                ['Unit testing using Protractor'],
                ['Test legacy technology with BrowserStack']
            ]]
            ],
            [Section.Education, [
                'Internet Application Developer Diploma From NBCC'
            ]],
            [Section.Other, [
                'Foundations of User Experience (UX) Design - Coursera by Google',
                'Introduction to Project Management (PM101) - Missing Link Technologies Ltd',
                'NBCC - Dean\'s List (2008 Computer Programmer Jr, 2009 Computer Programmer Sr)',

            ]]
        ]
    } as Partial<Resume>);
}
