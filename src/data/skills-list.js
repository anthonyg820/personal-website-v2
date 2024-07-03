import CodeIcon from "../res/icons/code.svg";
import LoopIcon from "../res/icons/loop.svg";
import ChartIcon from "../res/icons/chart.svg";
import GearIcon from "../res/icons/gear.svg";

export default function GetSkillsList() {
    return [
            {
                pillar: "AUTOMATION & SCRIPTING",
                icon: LoopIcon,
                skills: [
                    "Ansible", "Terraform", "Terragrunt", "Terratest", "Packer", "GitHub Actions", "Bash", "Powershell"
                ]
            },
            {
                pillar: "DEVELOPMENT",
                icon: CodeIcon,
                skills: [
                    "JavaScript", "NodeJS", "ReactJS", "HTML", "CSS", "Java", "SQL", "Python"
                ]
            },
            {
                pillar: "MONITORING & LOGGING",
                icon: ChartIcon,
                skills: [
                    "Grafana", "DataDog", "AppDynamics", "Dynatrace", "Open Telemetry", "Splunk", "Kibana", "NXLog"
                ]
            },
            {
                pillar: "OTHER",
                icon: GearIcon,
                skills: [
                    "Google Cloud Platform (GCP)", "Docker", "Kubernetes", "Linux", "Windows", "PagerDuty", "Git", "Jira"
                ]
            }
        ]
    
}
