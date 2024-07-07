import TerraformIcon from '../res/icons/terraform.svg';
import AppdynamicsIcon from '../res/icons/appdynamics.svg';
import DockerIcon from '../res/icons/docker-filled.svg';
import GCPIcon from '../res/icons/gcp.svg';
import GlobalIcon from '../res/icons/global.svg';
import UniversityIcon from '../res/icons/education-black-filled.svg';

export default function GetEducationList() {

    return [
            {
                icon: DockerIcon,
                date: "In Progress",
                name: "Docker Certified Associate (DCA)",
                type: "CERTIFICATE"
            },
            {
                icon: TerraformIcon,
                date: "In Progress",
                name: "Hashicorp Certified Terraform Associate (003)",
                type: "CERTIFICATE"
            },
            {
                icon: GCPIcon,
                date: "Dec. 2023",
                name: "Google Cloud Certified Associate Cloud Engineer",
                type: "CERTIFICATE"
            },
            {
                icon: GlobalIcon,
                date: "Aug. 2021",
                name: "CompTIA Network+",
                type: "CERTIFICATE"
            },
            {
                icon: AppdynamicsIcon,
                date: "Aug. 2020",
                name: "AppDynamics Associate Performance Analyst",
                type: "CERTIFICATE"
            },
            {
                icon: UniversityIcon,
                date: "Dec. 2018",
                name: "B.S in Computer Engineering from FIU",
                type: "DEGREE"
            }
        ]
    
}
