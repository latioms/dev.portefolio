import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "latioms",
    lastName: "",
    initials: "ls", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Douala, CM'
        },
        {
            emoji: "💼",
            text: "Freelance Developer, actually at Rutyfashion.com"
        },
        {
            emoji: "📧",
            text: "latioms@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/belrickstephane",
            icon: "fa fa-facebook",
            label: "facebook"
         },
         {
            link: "https://instagram.com/latiomsan",
            icon: "fa fa-instagram",
            label: "instagram"
         },
         {
            link: "https://github.com/latioms",
            icon: "fa fa-github",
            label: "github"
         },
         {
            link: "https://www.linkedin.com/in/stephane-tiomela-63b752248/",
            icon: "fa fa-linkedin",
            label: "linkedin"
         },
         {
            link: "https://twitter.com/lbelrick",
            icon: "fa fa-twitter",
            label: "twitter"
         }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Experienced software developer with 3 years of experience in software development. Proficient in Python, HTML/CSS, SQL, PHP and Bash, as well as Python libraries such as BeautifulSoup and OpenCV. Able to adapt quickly to new technologies and find creative solutions to problems. Diverse professional experience ranging from web design to image processing applications. Motivated and passionate about computers, looking for new professional challenges.",
    skills:
        {
            proficientWith: ['python','expressjs', 'react-native', 'php', 'git', 'github', 'html5', 'css3','javascript', 'WordPress', 'figma'],
            exposedTo: ['java','C', 'react', 'Angular', 'electron', 'shopify'],
            Librairies: ['opencv','matplotlib','pandas','sk-learn','beautifulsoup','tkinter','flask', 'bootstrap'],
            Techs: ['Laravel', 'Docker', 'Tauri', 'Django', 'Vercel', 'gcloud & gcloud-apis']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'comedies',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Portefolio-template",
            live: "https://latioms.tk", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/latioms", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Some Enterprise's Portefolio",
            live: "https://wte-sarl.com",
            image: mock2
        },
        {
            title: "Private Desktop App",
            image: mock3
        },
        {
            title: "Private Ecommerce App",
            image: mock4
        },
        {
            title: "Forked Streaming App",
            image: mock5
        }
    ]
}