import React from "react";
import ReactHtmlParser from 'react-html-parser';
import movieImg from "./ProjectsImg/movie.jpeg";
import ipImg from "./ProjectsImg/ipImg.jpeg";
import newswebsite from "./ProjectsImg/newswebsite.jpeg";
import CountImg from "./ProjectsImg/CountImg.jpeg";
import tipImg from "./ProjectsImg/tipImg.jpeg";



const myProjects = [
    {
        id: 1,
        name: 'React-Movie-App',
        link: 'https://jutsued.github.io/React-Movie-App/',
        img: movieImg,
        sourceCode: 'https://github.com/Jutsued/React-Movie-App',
        techUsed: ["https://img.icons8.com/color/48/000000/html-5--v1.png","https://img.icons8.com/color/48/000000/javascript--v2.png", "https://img.icons8.com/nolan/64/react-native.png", "https://img.icons8.com/color/48/000000/css3.png", "https://img.icons8.com/nolan/64/api-settings.png"]
    },
    {
        id: 2,
        name: 'Tracker',
        link: 'https://jutsued.github.io/ip-address-tracker/',
        img: ipImg,
        sourceCode: 'https://github.com/Jutsued/ip-address-tracker',
        techUsed: ["https://img.icons8.com/color/48/000000/html-5--v1.png","https://img.icons8.com/color/48/000000/javascript--v2.png", "https://img.icons8.com/color/48/000000/css3.png", "https://img.icons8.com/nolan/64/api-settings.png", "https://img.icons8.com/nolan/64/xml.png"]
    },
    {
        id: 3,
        name: 'News Website',
        link: 'https://jutsued.github.io/News-Website/',
        img: newswebsite,
        sourceCode: 'https://github.com/Jutsued/News-Website',
        techUsed: ["https://img.icons8.com/color/48/000000/html-5--v1.png","https://img.icons8.com/color/48/000000/javascript--v2.png", "https://img.icons8.com/nolan/64/xml.png", "https://img.icons8.com/color/48/000000/css3.png", "https://img.icons8.com/nolan/64/api-settings.png"]
    },
    {
        id: 4,
        name: 'Countdown',
        link: 'https://jutsued.github.io/Launch-countdown-timer/',
        img: CountImg,
        sourceCode: 'https://github.com/Jutsued/Launch-countdown-timer',
        techUsed: ["https://img.icons8.com/color/48/000000/html-5--v1.png", "https://img.icons8.com/color/48/000000/javascript--v2.png", "https://img.icons8.com/color/48/000000/css3.png"]
    },
    {
        id: 5,
        name: 'Tip Calculator',
        link: 'https://jutsued.github.io/tip-calculator-app/',
        img: tipImg,
        sourceCode: 'https://github.com/Jutsued/tip-calculator-app',
        techUsed: ["https://img.icons8.com/color/48/000000/html-5--v1.png", "https://img.icons8.com/color/48/000000/javascript--v2.png", "https://img.icons8.com/color/48/000000/css3.png"]
    },
];

export default function Projects() {

    var projectArray = [];

    myProjects.forEach((project, i) => {
        const title = `${project.name}`;
        const imgURL = `${project.img}`;
        const code = `${project.sourceCode}`;
        const live = `${project.link}`;
        const id = `${project.id}`;

        const projectEl = document.createElement('div');
        projectEl.classList.add('project');
        

        projectEl.innerHTML = `
        <div class="boxLines">
        <img src="${imgURL}" alt="${title}" key="${id}" class="colorLines"/>
        </div>
            <p key="${id}">${title}</p>
            <div class="overtop" key="${id}">
            <h3 key="${id}" >Tech Used: </h3>
            <img src="${project.techUsed[0]}" class="smallTech" alt="smallTech" key="${id}"/>
            <img src="${project.techUsed[1]}" class="smallTech" alt="smallTech" key="${id}"/>
            <img src="${project.techUsed[2]}" class="smallTech" alt="smallTech" key="${id}"/>
            <img src="${project.techUsed[3] ? project.techUsed[3] : ""}" class="smallTech" alt="smallTech" />
            <img src="${project.techUsed[4] ? project.techUsed[4] : ""}" class="smallTech" alt="smallTech" />
                <a href="${live}" target="_blank" key="${id}">
                    <span key="${id}">Live Site</span>
                </a>
                <a href="${code}" target="_blank" key="${id}">
                    <span key="${id}">Source Code</span>
                </a>
            </div>

        `;
        projectArray.push(projectEl)


    })
    console.log(projectArray[1])

    return (<>
        <div className="descp">
            <h4>Here are some of my work</h4>
        </div>
        <div id="app">

            {projectArray.map((item, i) => (
                <>
                    <div key={item.id} className={item.classList}>
                        {ReactHtmlParser(item.innerHTML)}
                    </div>


                </>
            ))}
        </div>
    </>)

}