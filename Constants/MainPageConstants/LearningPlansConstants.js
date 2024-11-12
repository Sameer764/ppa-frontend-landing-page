import StepMap3 from '../../public/resources/images/step-3-map.png'
import StepMap4 from '../../public/resources/images/step-4-map.png'
import StepMap1 from '../../public/resources/images/step-1-map.png'
import StepMap2 from '../../public/resources/images/step-2-map.png'
import StudentImg from '../../public/resources/images/learning-plan-student.png'
import StudentDescImg from '../../public/resources/images/student-desc-img.png'

const StepsData=[
    {
        id:1,
        stepWidth:"step-width-blue",
        stepNo:"STEP 3",
        stepClass:"step-three",
        stepDesc:["Hands-on projects","Real-world practice","Build practical skills"],
        stepMap:[StepMap3,"blue-map"]
    },
    {
        id:2,
        stepWidth:"step-width-green",
        stepNo:"STEP 4",
        stepClass:"step-four",
        stepDesc:["Ongoing guidance","Mock interviews & doubts cleared"],
        stepMap:[StepMap4,"green-map"]
    },
    {
        id:3,
        stepWidth:"step-width-orange",
        stepNo:"STEP 1",
        stepClass:"step-one",
        stepDesc:["Personalized learning for your career goals","Prepares you for interviews and skills","From basics to mastery"],
        stepMap:[StepMap1,"orange-map"]
    },
    {
        id:4,
        stepWidth:"step-width-red",
        stepNo:"STEP 2",
        stepClass:"step-two",
        stepDesc:["Learn at your own pace","Custom milestones to fit your schedule","Tailored learning style"],
        stepMap:[StepMap2,"red-map"]
    },
    {
        id:5,
        stepWidth:"",
        stepNo:"",
        stepClass:"",
        stepDesc:null,
        stepMap:[],
        stepStudent:StudentImg,
        stepDescImg:StudentDescImg
    },
]

export {StepsData};