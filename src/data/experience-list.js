import UKGLogo from "../res/images/UKG2.svg";
import RCGLogo from "../res/images/RCCL.svg";

export default function GetExperienceList() {
    return [
            {
                from: "SEP. 2021",
                to: "PRESENT",
                position: "SR. SITE RELIABILITY ENGINEER",
                company: "UKG",
                companyLogo: {
                    src: UKGLogo,
                    width: "200px"
                },
                heading: `"Our purpose is people"`,
                subHeading: `UKG (Ultimate Kronos Group) is a SaaS company offering HR, payroll, 
                and workforce management solutions.`,
                learnMoreLink: "https://www.ukg.com/",
                backgroundColors: {
                    slide: "var(--ukg-green)",
                    header: "var(--ukg-teal)",
                    focusArea: "var(--ukg-teal)",
                    learnMore: "var(--ukg-yellow)",
                    impact: "var(--ukg-green)",
                },
                textColors: {
                    header: "var(--ukg-green)",
                    focusArea: "var(--ukg-green)",
                    learnMore: "var(--ukg-green)",
                    impact: "var(--white)"
                },
                responsibilities: [
                    `Leveraged GitHub Actions, Ansible, and Terraform to create a CI/CD pipeline, reducing manual deployment times by 70%.`,
                    `Created a suite of continuous integration tests that improved pipeline stability by 50%.`,
                    `Utilized GitHub Actions and Terragrunt to create a composable and scalable continuous delivery pipeline.`,
                    `Instrumented and configured monitoring tools like DataDog, Splunk, Kibana, and Grafana to over 600 virtual machines.`,
                    `Used Grafana to create a collection of interconnected observability dashboards to reduce MTTR of production issues by 40%.`,
                    `Made use of DataDog to analyze historical metric data and define SLIs and SLOs for numerous applications.`,
                    `Led the migration of 30+ NGINX load balancers from CentOS to Rocky Linux 9.`,
                    `Programmed a web application that automated the generation of performance reports for target customer environments.`,
                    `Participated in PagerDuty on-call rotations, resolving over 100 production issues.`,
                ]
            },
            {
                from: "JAN. 2019",
                to: "SEP. 2021",
                position: "SITE RELIABILITY ENGINEER",
                company: "Royal Caribbean group",
                companyLogo: {
                    src: RCGLogo,
                    width: "400px"
                },
                heading: `Turning the Vacation of a Lifetime into a Lifetime of Vacations`,
                subHeading: `RCG is the parent company to Royal Caribbean International, Celebrity Cruises, and SilverSea.`,
                learnMoreLink: "https://www.royalcaribbeangroup.com/",
                backgroundColors: {
                    slide: "var(--rccl-blue)",
                    header: "var(--rccl-navy)",
                    focusArea: "var(--rccl-navy)",
                    learnMore: "var(--rccl-gold)",
                    impact: "var(--rccl-blue)",
                },
                textColors: {
                    header: "var(--white)",
                    focusArea: "var(--white)",
                    learnMore: "var(--rccl-navy)",
                    impact: "var(--white)"
                },
                responsibilities: [
                    `Built a web application using ReactJS, NodeJS, and Ansible that automated the deployment of AppDynamics agents to a fleet of 60+ cruise ships.`,
                    `Deployed and managed APM agents in Kubernetes/Openshift environments.`,
                    `Implemented metric-based dashboards that tied into incident response systems like PagerDuty, lowering MTTA and MTTR by 60% and 30% respectively.`,
                    `Created a web application to retrieve sailing history for a guest and provided it to tier-1 customer support, reducing toil by 20%.`,
                    `Leveraged AppDynamics to inspect application performance trends and determine SLIs and SLOs for various software.`,
                    `Utilized AppDynamics, PagerDuty, and bash/powershell to create automated remediation scripts to resolve more than 200 recurring issues.`,
                    `Took part in PagerDuty on-call shifts, resolving 200+ customer issues for ships located in various parts of the world.`,
                ]
            },
        ]
    
}
