
import ShipIcon from '../res/icons/ship.svg';
import CartIcon from '../res/icons/shopping-cart.svg';
import BulletIcon from '../res/icons/bullet.svg';
import PokedexIcon from '../res/icons/pokedex.svg';
import ChatIcon from '../res/icons/chat.svg';
import TictactoeIcon from '../res/icons/tictactoe.svg';
import AvatarIconV1 from '../res/avatar-grayscale.svg';
import AvatarIconV2 from '../res/avatar-grayscale-v2.svg';

export default function GetProjectList() {
    return [
        {
            image: AvatarIconV2,
            name: "Personal Website V2",
            description: `The current version of my personal website. At first glance, it may look similar to V1, 
            but was built from the ground up using ReactJS instead of vanilla JavaScript, and follows a much more
            modern and consistent design.`,
            techUsed: "REACTJS | HTML | CSS",
            githubLink: "https://github.com/anthonyg820/personal-website-v2",
            projectLink: ""
        },
        {
            image: BulletIcon,
            name: "Ansibullet",
            description: `A web application similar to Ansible Tower. Manage your Ansible collections and execute 
                playbooks using a point-and-click UI.`,
            techUsed: "ANSIBLE | REACTJS | NODEJS | EXPRESSJS | CSS",
            githubLink: "",
            projectLink: ""
        },
        // {
        //     image: DevopsIcon,
        //     name: "DevOps Hangout",
        //     description: `A platform used to teach devops ideologies.`,
        //     techUsed: "REACTJS | NODEJS | JAVASCRIPT | CSS",
        //     githubLink: "#",
        //     projectLink: "#"
        // },
        {
            image: AvatarIconV1,
            name: "Personal Website V1",
            description: `The first version of my personal website. I implemented a slideshow-based UI.`,
            techUsed: "HTML | CSS | JAVASCRIPT",
            githubLink: "https://github.com/anthonyg820/personal-website",
            projectLink: "projects/personal-website-v1/main.html"
        },
        {
            image: CartIcon,
            name: "Shopping Cart",
            description: `A mock shopping cart application. I made this as part of my take-home interview exam for Royal Caribbean
                to prove foundational knowledge of programming and CRUD operations.`,
            techUsed: "HTML | CSS | PHP | POSTGRESSQL",
            githubLink: "https://github.com/anthonyg820/Shopping-cart",
            projectLink: ""
        },
        {
            image: ShipIcon,
            name: "Battleship",
            description: `An implementation of the classic battleship game built entirely 
                from HTML, CSS, and vanilla JavaScript. Play against an AI computer opponent on a 10x10 grid.`,
            techUsed: "HTML | CSS | JAVASCRIPT",
            githubLink: "https://github.com/anthonyg820/Battleship",
            projectLink: "projects/Battleship/Splash.html"
        },
        {
            image: TictactoeIcon,
            name: "Tic Tac Toe",
            description: `A simple tic-tac-toe program to teach myself the basics of CSS grid.`,
            techUsed: "HTML | CSS | JAVASCRIPT",
            githubLink: "https://github.com/anthonyg820/Tic-Tac-Toe-using-CSS-Grid",
            projectLink: "projects/Tic-Tac-Toe-using-CSS-Grid/Main.html"
        },
        {
            image: PokedexIcon,
            name: "Pokedex",
            description: `A simple web program to learn how to interact with public REST APIs.`,
            techUsed: "HTML | CSS | JAVASCRIPT",
            githubLink: "https://github.com/anthonyg820/Pokedex",
            projectLink: "projects/Pokedex/Main.html"
        },
        {
            image: ChatIcon,
            name: "JMessenger",
            description: `A java-based intranet chat tool.`,
            techUsed: "JAVA",
            githubLink: "https://github.com/anthonyg820/JMessenger-Client",
            projectLink: ""
        }
    ]

}
