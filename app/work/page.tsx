import React from "react";
import WorkInProgress from "../components/WorkInProgress";

const CURRENTPAGE = "WorkExperience";

const WorkExperiencePage = () => {
  console.log("PAGEINPROGRESS", process.env.PAGEINPROGRESS);
  if (process.env.PAGEINPROGRESS?.includes(CURRENTPAGE))
    return <WorkInProgress />;

  return (
    <div>
      <h1>Work Experience Page</h1>
      <p>
        {`
        
        Work Experience
        This page contains my all Work Experience

        Anafore - ReferralCandy(Singapore)
        Sr. Software Engineer
>> Contributed timely valuable inputs to the core technology meetings as a Senior Developer with experience shaping the tech stack.
>> Achieved on-time business requirements by spearheading the coordination of the product team and release management processes.
>> Improved User Experience (UX) through a demonstrated ease of server-side rendering and by writing, clean and compliant code.
>> Enhanced scalability by engaging in design discussions for the re-architecture of tightly coupled frameworks, such as multi-campaigns.
>> Created technical solutions using the React-based framework and Next.js, (frontend/ backend) and deployed them to the AWS cloud.
>> Migrated dashboard and other new designs with functionalities to the new framework.
>> Optimized SEO processes and performance with Next.js best practices.
>> Oversaw the code review process for pull requests while maintaining a blameless culture.
>> Championed the release of a new dashboard project (frontend/backend) to production.
>> Introduced solutions such as Feature Flags for the periodic release of new features to clients.
>> Supported the team in gaining a deeper understanding of frameworks and maintaining code.
>> Presented solutions to ensure the current tech stack was developer-friendly.
>> Evangelized new ideas and workflow designs by collaborating with senior leadership.
>> Collaborated with end users to analyze problems and implement solutions using Scrum.
        
        DBS Bank (Singapore)
        Sr. Software Engineer
        Employer: Capgemini / Kelly Services
>> Contributed to the TS team in building end-to-end solutions for analyzing the impact of incidents in different countries and multiple applications in a bank, mitigating future risks.
>> Championed front-end design using React-Redux and D3 Visualizations.
>> Authenticated users and controlled sessions using JWT/session storage and session cookies.
>> Designed a visually appealing UI to meet business needs using Material UI and React.js.
>> Designed fancy UI to meet Business needs using Material UI and react.js
>> Created component-based architecture restructuring for the React.js codebase.
>> Evangelised cutting-edge visualizations using D3 and React.js.
>> Integrated complex visualization libraries including React-vis and created complex features using D3 to meet business needs.
>> Created RESTful APIs to serve required data from the DB using Node-Express
>> Integrated complex databases like IBM Db2 and MariaDB to node server
>> Hands-on experience in product deployments (Manual & automated) and feature release
>> Introduced RESTful APIs to serve required data from the DB using Node-Express.
>> Integrated complex databases like IBM Db2 and MariaDB to node server.
>> Conducted user interviews, gathered requirements, and designed workflows (using BPMN).

        FIGS INC (Singapore)
        Sr. Lead Developer - Frontend
>> Took full management responsibility for the front-end team and helped the management decide on features and releases.
>> Architectural component-based framework to support business logic and UI needs.
>> Created language-supportive applications for Chinese, Japanese, and English.
>> Developed applications based on the specification of product management.
>> Solved problems related to UI and Logic in the Angular codebase.
>> Participated in Agile development (Scrum).
>> Contributed ideas and developed tools to support business needs in partnership with the Head of Development and CTO.
>> Resolved technical challenges with POCs and delivered products within a defined timeline to achieve timely market releases.
>> Led and mentored the Front-end Development Team.
>> Maintained the sanity of code in multiple environments using deployment tools like Jenkins.
>> Wrote, tested, and reviewed code.

        Tarento Technologies (India)
        Senior JavaScript Engineer / Canvas Developer / Creative Content Creator
>> Supervised 10 developers with task assignments and code reviews.
        Recreated environments using AngularJS.
>> Took lead in writing test cases using the Jasmine Karma Framework with maximum coverage.
>> Designed and implemented new features and integrated new modules into the system.
>> Assumed full responsibility for the frontend codebase and its maintenance.
>> Piloted feature releases and builds for deployment.
>> Created an XML-based language, ECML to create games using images, audio, shapes, etc.
>> Implemented telemetry, plugins, and REST API services for the project.
>> Upgraded Telemetry Service to feed accurate data to Elasticsearch API, and created a data visualization dashboard on Kibana.
>> Constructed various JavaScript libraries for external content developers.
>> Authored BDD test cases for all the plugins in the project.
>> Spearheaded the overall build, deployment, and feature planning of each project release.
>> Created interactive games using JavaScript and led the integration to the Genie canvas system.
>> Directed the content creation team and trained with the design best practices.
>> Optimized content using best practices and programming methodologies.
>> Converted a flex-based application to a purely HTML5 and AngularJS-based application.
>> Developed pixel-perfect application screens as per the design.
>> Leveraged MVC Framework and AngularJS routing instead of Flex.
>> Contribution to other Projects: Ek-Step, Touch Guide, Cimplyfive, Edukul, Metrozip, Inbrix, iNet


↑Back to Top

`}
      </p>
    </div>
  );
};

export default WorkExperiencePage;
