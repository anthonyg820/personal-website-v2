import SkillsIcon from "../res/icons/laptop.svg"
import EducationIcon from "../res/icons/education.svg"
import ProjectsIcon from "../res/icons/tools.svg"
import ExperienceIcon from "../res/icons/experience.svg"
import ContactIcon from "../res/icons/email2.svg"

export default function GetNavigationList() {
    return [
        {
            text: "Skills",
            icon: SkillsIcon,
            to: "section-header1"
        },
        {
            text: "Education",
            icon: EducationIcon,
            to: "section-header2"
        },
        {
            text: "Projects",
            icon: ProjectsIcon,
            to: "section-header3"
        },
        {
            text: "Experience",
            icon: ExperienceIcon,
            to: "section-header4"
        },
        {
            text: "Contact",
            icon: ContactIcon,
            to: "section-header5"
        }
    ]

}
