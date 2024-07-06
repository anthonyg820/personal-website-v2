import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';
import Avatar from "../../res/avatar.svg"
import TransparentBG from "../../res/images/shapes-texture.png"
import { useEffect } from 'react';

const Container = styled.div.attrs({ id: "splash-slide" })`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    display: flex;
    z-index: 20;
    background-color: var(--white);
    // background-image: url('${TransparentBG}');
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.8s ease-in-out;

    .splashCircle {
        display: block;
        position: absolute;
        border-radius: 100%;
        box-sizing: border-box;
        opacity: 0;
    }
    
    #splashCircleOuter {
        width: 200px;
        height: 200px;
        border: 6px solid var(--black);
        transition: 0.3s;
        animation-name: splashCircleOuter;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-delay: 1.2s;
    }
    
    #splashCircleInner {
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
        width: 140px;
        height: 140px;
        border: 1px solid var(--black);
        background: var(--white);
        transition: 0.3s;
        overflow: hidden;
        animation-name: splashCircleInner;
        animation-duration: 0.4s;
        animation-timing-function: linear;
    }
    
    #splashCircleInner img {
        position: relative;
        width: 90%;
        top: 20px;
        animation-name: splashAvatar;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
    }

    @keyframes splashCircleOuter {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    
    @keyframes splashCircleInner {
        0% {
            width: 0px;
            height: 0px;
            opacity: 0;
        }
        60% {
            width: 180px;
            height: 180px;
            opacity: 1;
        }
        100% {
            width: 140px;
            height: 140px;
            opacity: 1;
        }
    }
    
    @keyframes splashAvatar {
        0% {
            top: 200px;
        }
        50% {
            top: 200px;
        }
        100% {
            top: 20px;
        }
    }
`

export default function SplashSlide() {

    function hideSplash() {
        let splash = document.getElementById("splash-slide");
        let splashCircleOuter = document.getElementById("splashCircleOuter");
        let splashCircleInner = document.getElementById("splashCircleInner");

        setTimeout(() => { // SHRINK CENTER ICON
            splashCircleOuter.style.width = "0px";
            splashCircleOuter.style.height = "0px";
            splashCircleOuter.style.border = "0px";

            splashCircleInner.style.width = "0px";
            splashCircleInner.style.height = "0px";
            splashCircleInner.style.border = "0px";

            setTimeout(() => { // CLOSE SPLASH AND SHOW HOME
                splash.style.opacity = 0.0;
                setTimeout(() => { //Set splash display to none
                    splash.style.display = "none";
                }, 500)
            }, 200);
        }, 3000);
    }

    useEffect(() => {
        setTimeout(() => {
            hideSplash();
        })
    })

    return (
        <Container>

            <div id="splashCircleOuter" class="splashCircle"></div>
            <div id="splashCircleInner" class="splashCircle"> <img src={Avatar} alt="" /> </div>

        </Container >
    )
}