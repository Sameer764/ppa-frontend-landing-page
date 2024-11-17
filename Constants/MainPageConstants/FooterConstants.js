import ProgramImg1 from '../../public/resources/images/footer-program-img-1.png'
import ProgramImg2 from '../../public/resources/images/footer-program-img-2.png'
import ProgramImg3 from '../../public/resources/images/footer-program-img-3.png'
import PhoneIcon from '../../public/resources/images/contact-phone-icon.png'
import MapIcon from '../../public/resources/images/contact-map-icon.png'
import MailIcon from '../../public/resources/images/contact-mail-icon.png'
import TelegramIcon from '../../public/resources/images/social-telegram-icon.png'
import FacebookIcon from '../../public/resources/images/social-facebook-icon.png'
import LinkedinIcon from '../../public/resources/images/social-linkedin-icon.png'
import InstagramIcon from '../../public/resources/images/social-instagram-icon.png'
import YoutubeIcon from '../../public/resources/images/social-youtube-icon.png'

const AboutUs=[
    {
        id:1,
        aboutTxt:"Join our Community",
        aboutLink:`${process.env.NEXT_PUBLIC_COMMUNITY_URL}`
    },
    {
        id:2,
        aboutTxt:"Success Stories",
        aboutLink:`${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}crack-coding-interviews/stories`
    },
    {
        id:3,
        aboutTxt:"Blogs",
        aboutLink:`${process.env.NEXT_PUBLIC_BLOGS_URL}`
    },
    {
        id:4,
        aboutTxt:"Events",
        aboutLink:`${process.env.NEXT_PUBLIC_EVENTS_URL}`
    },
    {
        id:5,
        aboutTxt:"Terms & Conditions",
        aboutLink:`${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}terms-and-conditions`
    },
    {
        id:6,
        aboutTxt:"Refund Policy",
        aboutLink:`${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}refund-policy`
    }
]

const PopularPrograms=[
    {
        id:1,
        programImg:ProgramImg1,
        programName:"Tech Fellowship Program",
        programLink:`${process.env.NEXT_PUBLIC_FRONTEND_MAIN_URL}tech-fellowship-program`
    },
    {
        id:2,
        programImg:ProgramImg2,
        programName:"Renaissance for Top Tech  Companies",
        programLink:`${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}`
    },
    {
        id:3,
        programImg:ProgramImg3,
        programName:"Low Level Design & Concurrency",
        programLink:`${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}low-level-design`
    },
]

const Courses=[
    {
        id:1,
        courseName:"Backend Development with Java Spring Boot",
        courseLink:`${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}java-springboot`
    },
    {
        id:2,
        courseName:"Data Structures & Algorithms Essential",
        courseLink:`${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}dsa-and-algorithms-essentials`
    },
    {
        id:3,
        courseName:"Become a Python Expert",
        courseLink:`${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}begin-with-python`
    },
    {
        id:4,
        courseName:"Begin with Programming in C++",
        courseLink:`${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}begin-with-c++`
    },
    {
        id:5,
        courseName:"Frontend Engineering Pro",
        courseLink:`${process.env.NEXT_PUBLIC_FRONTEND_RENAISSANCE_PAGE_URL}become-a-frontend-engineer`
    },
]

const Contacts=[
    {
        id:1,
        contactIcon:PhoneIcon,
        contactTxt:"+91 9871723495"
    },
    {
        id:2,
        contactIcon:MapIcon,
        contactTxt:"514, Iconic Corenthum Tower, Noida Sector 62, Noida."
    },
    {
        id:3,
        contactIcon:MailIcon,
        contactTxt:"help@programmingpathshala.com"
    },
]

const Socials=[
    {
        id:1,
        socialIcon:YoutubeIcon,
        socialLink:"https://www.youtube.com/channel/UC4uPfwRHPbYlmjNMiKIdWNg"
    },
    {
        id:2,
        socialIcon:InstagramIcon,
        socialLink:"https://www.instagram.com/programmingpathshala/?igsh=MWd4YzBzbWs0ZmZhdQ%3D%3D"
    },
    {
        id:3,
        socialIcon:LinkedinIcon,
        socialLink:"https://www.linkedin.com/school/programming-pathshala/"
    },
    {
        id:4,
        socialIcon:FacebookIcon,
        socialLink:"https://www.linkedin.com/school/programming-pathshala/"
    },
]

export {AboutUs,PopularPrograms,Courses,Contacts,Socials};