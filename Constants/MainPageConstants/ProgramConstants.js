import RenaissanceImg from '../../resources/images/renaissance-program-img.png'
import TechImg from '../../resources/images/tech-program-img.png'

const Programs=[
    {
        id: 1,
        programMode:"Offline Program",
        programImg: TechImg,
        programAlt: "tech-img",
        programLocation: "The Iconic Corenthum, Noida Sector 62",
        programHead: "Tech Fellowship Program",
        programFeatures: ["🏢 Learn in a Corporate Ecosystem","💰 Assured Paid Internships","📚 In-depth Coursework",
            "👥 In-Person Full-Time Learning","👥 Tackle Live Industry Projects","🎓 Limited Seats Only"
        ],
        programBtn:"Apply Now"
    },
    {
        id: 2,
        programMode:"Online Program",
        programImg: RenaissanceImg,
        programAlt: "Renaissance-img",
        programLocation: "",
        programHead: "Renaissance for Top Tech Companies",
        programFeatures: ["🏢 Flexible Learning","💰 Mock interview & Career Support ","📚 Personalised Plans",
            "👥 1 on 1 Mentorship","👥 Full Stack Projects","🎓 600+ DSA Problems"
        ],
        programBtn:"Start 7-Days Free Trial"   
    }
]

export {Programs};