import test from './assets/test.jpg';
import test2 from './assets/test2.jpg';
import me from './assets/me.jpg';
import test4 from './assets/OI.png';
//import test5 from './assets/test5.jpeg';
import test6 from './assets/PXTCH.png';
import test7 from './assets/LAZY.png';
//import osdev from './assets/hooo.png';

const logotext = "❖";
const meta = {
    title: "Olubiyi Oluwaseun",
    description: "Olubiyi's portfolio.",
};

const introdata = {
    title: "Oluwaseun Olubiyi",
    animated: {
        first: "FrontEnd Dev.",
        second: "Javascript Dev.",
        third: "UI/UX Designer.",
    },
    description: "Hello world, i'm Oluwaseun a software developer writting and pushing code 4ALF 🛸.",
    scription: "",
   //your_img_url: osdev, // Bug 17 to be fixed ! still trying to fix this BUG!!! 
};

const dataabout = {
    title: "abit about my self",
    aboutme:"Over the past 02 years, i've built products for companies and individuals around africa ranging from a landingpage website to responsive solutions and enterprise apps with focus on fast, elegant and accessible user experience.",
    aboutme2:"Curently, i work at spectrangle as a Junior Developer crafting thoughtful and inclusive experience that adher to all web standards.",
    aboutme3:"Before now, interned at NIIT where i worked on coverting Figma UIs to interactive codes for orgs and individuals. Prior to NIIT, i was building product for individuals around the world on fiver and upwork as a freelance developer while building my skills as a front-developer.",
    aboutme4:"When i'm not swamped with work or working on a personal project, i like to solve brain tesers, read books, play video games, hangout with friend, cook, travell and most importantly enjoy my own personal space.",
}
const worktimeline = [{
        jobtitle: "Frontend Developer",
        where: "Spectrangle",
        date: "Present",
    },
    {
        jobtitle:"Freelancer",
        where: "Upwork",
        date: "Present",
     },
     {
        jobtitle:"Freelancer",
        where: "fiver",
        date: "Present",
     },
    {
        jobtitle: "Intern",
        where: "Colab",
        date: "2021",
    },
    {
        jobtitle: "Intern",
        where: "NIIT",
        date: "2020",
    },
    {
        jobtitle: "Enginer",
        where: "OilTech Limited",
        date: "2019",
    },
];
/* 
const skills = [{
        name: "Javascript",
        value: 60,
    },
    {
        name: "Typescript",
        value: 30,
    },
    {
        name: "Vuejs",
        value: 40,
    },
    {
        name: "Reactjs",
        value: 60,
    },
    {
        name: "Firebase",
        value: 80,
    },
    {
        name: "git",
        value: 85,
    },
    {
        name: "bootstrap",
        value: 85,
    },

    
];
*/

const services = [{
    title: "Mobile-First Approach",
    description: "The only industry standard that i know is mobile-first, so you can be assured that agility and responsiveness will be embedded in every aspect of your front-end development project. Backed by international certifications and a full-service portfolio of technology & enterprise solutions,",
    },
    {
        title: "Tailored Development",
        description: "I develop dedicated software and applications with an efficient and functional front-end. I rely on proven technology and frameworks.",
    },
    {
        title: "Javascript Development",
        description: "I create front-end based on JS frameworks such as React.js and Vue.js. I also write dedicated solutions from scratch.",
    },
    {
        title: "Cross-Platform Development",
        description: "Based on cross-platform frameworks and PWA standards, i create applications that provide native experiences on multiple systems simultaneously.",
    },
    {
        title: "Re-engineering & Maintenance",
        description: "I provide end-to-end support for modernizing or uplifting your apps. With the right tech stack usage, i empower you to outperform in a highly competitive IT landscape. i'll continue to add value to my clients success with solutions that help you rank higher, boost conversions, drive revenue, and enhance the end-user experience. Accelerate the growth of your business with my full-cycle tech support.",
    },
    
];
// update img with the right image!
const dataportfolio = [{
        img: test7,
        desctiption: "The Offical fashion website for lazyboy.",
        link: "https://lazzyboi.netlify.app",
    },
    {
        img: test6,
        desctiption: "Built with Reactjs,Scss and AOS for a Delivery company",
        link: "https://pxtchee.web.app",
    },
    {
        img: test2,
        desctiption: "A Node.js web scrapper.AKA (NNS) Nigerian News Scrapper ",
        link: "https://github.com/Oluwa-Seun/NNS",
    },
    {
        img: test4,
        desctiption: "Tenzy Paul's Photography Studio Page",
        link: "https://tenzypvul.web.app",
    },
    {
        img: test,
        desctiption: "Built a face for the fitbit smartwatch that works across all devices and on all fitbit products.",
        link: "https://github.com/Oluwa-Seun/watch-face",
    },

   // {
  //      img: test5,
   //     desctiption: "Nastroid website built on Nasa Api fetching real time data from nasa.",
   //     link: "#",
  //  },
    {
        img: me,
        desctiption: "My little shelf(portfolio) where all of my recent project are being hosted on. You are here",
        link: "https://osportfo.web.app",
    },

];

const contactConfig = {
    YOUR_EMAIL: "oluwaseunolubiyione@gmail.com",
    YOUR_FONE: "+2348154926454",
    description: "If you’re still in doubt,i will help you find the answers you need.Lets software together",
    // creat an emailjs.com account when you are ready for production
    // connecting the backend of the email to the frontend of this application 
    // to recive email from users
    // note to future self!...  
    // incase your memory preceeds you use next line 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    // juju was here..
    YOUR_SERVICE_ID: "service_v49pu4q",
    YOUR_TEMPLATE_ID: "template_cr6koem",
    YOUR_USER_ID: "HwkQIRg9l3R8PsJMd",
};
// put social links !
const socialprofils = {
    github: "https://github.com/oluwa-seun",
    linkedin: "https://www.linkedin.com/in/oluwaseun-olubiyi-b8763b1ba",
    behance: "https://www.behance.net/Os-dev",
    twitter: "https://twitter.com/@2alifa",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
   // skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
