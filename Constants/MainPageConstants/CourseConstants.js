import BackendImg from '../../public/resources/images/course-backend-img.png'
import LowLevelImg from '../../public/resources/images/course-low-level-img.png'
import DsaImg from '../../public/resources/images/course-dsa-img.png'
import CppImg from '../../public/resources/images/course-cpp-img.png'
import PythonImg from '../../public/resources/images/course-python-img.png'
import FrontendImg from '../../public/resources/images/course-frontend-img.png'
import courseEnrolled from '../../public/resources/images/course-enrolled.png'
import CourseRating from '../../public/resources/images/course-rating.png'
import StudentFriendly from '../../public/resources/images/student-friendly-icon.png'
import ProfessionalFriendly from '../../public/resources/images/professional-friendly-icon.png'

const Courses=[
    {
        id:1,
        courseImg: BackendImg,
        courseAlt: "backend-img",
        courseHead:"Backend with Java Spring Boot",
        courseEnrolled:courseEnrolled,
        courseRating:CourseRating,
        courseType:StudentFriendly
    },
    {
        id:2,
        courseImg: LowLevelImg,
        courseAlt: "low-level-img",
        courseHead:"Low Level Design & Concurrency",
        courseEnrolled:courseEnrolled,
        courseRating:CourseRating,
        courseType:ProfessionalFriendly
    },
    {
        id:3,
        courseImg: DsaImg,
        courseAlt: "dsa-img",
        courseHead:"Data Structures & Algorithms",
        courseEnrolled:courseEnrolled,
        courseRating:CourseRating,
        courseType:StudentFriendly
    },
    {
        id:4,
        courseImg: CppImg,
        courseAlt: "cpp-img",
        courseHead:"Begin Programming with C++",
        courseEnrolled:courseEnrolled,
        courseRating:CourseRating,
        courseType:StudentFriendly
    },
    {
        id:5,
        courseImg: PythonImg,
        courseAlt: "python-img",
        courseHead:"Became Python Expert",
        courseEnrolled:courseEnrolled,
        courseRating:CourseRating,
        courseType:StudentFriendly
    },
    {
        id:6,
        courseImg: FrontendImg,
        courseAlt: "frontend-img",
        courseHead:"Become a  Frontend Engineer",
        courseEnrolled:courseEnrolled,
        courseRating:CourseRating,
        courseType:StudentFriendly
    },
]

export {Courses};