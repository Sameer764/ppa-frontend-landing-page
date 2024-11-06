import BackendImg from '../../resources/images/course-backend-img.png'
import LowLevelImg from '../../resources/images/course-low-level-img.png'
import DsaImg from '../../resources/images/course-dsa-img.png'
import CppImg from '../../resources/images/course-cpp-img.png'
import PythonImg from '../../resources/images/course-python-img.png'
import FrontendImg from '../../resources/images/course-frontend-img.png'
import courseEnrolled from '../../resources/images/course-enrolled.png'
import CourseRating from '../../resources/images/course-rating.png'
import CourseType from '../../resources/images/course-type.png'

const Courses=[
    {
        id:1,
        courseImg: BackendImg,
        courseAlt: "backend-img",
        courseHead:"Backend with Java Spring Boot",
        courseEnrolled:courseEnrolled,
        courseRating:CourseRating,
        courseType:CourseType
    },
    {
        id:2,
        courseImg: LowLevelImg,
        courseAlt: "low-level-img",
        courseHead:"Low Level Design & Concurrency",
        courseEnrolled:courseEnrolled,
        courseRating:CourseRating,
        courseType:CourseType
    },
    {
        id:3,
        courseImg: DsaImg,
        courseAlt: "dsa-img",
        courseHead:"Data Structures & Algorithms",
        courseEnrolled:courseEnrolled,
        courseRating:CourseRating,
        courseType:CourseType
    },
    {
        id:4,
        courseImg: CppImg,
        courseAlt: "cpp-img",
        courseHead:"Begin Programming with C++",
        courseEnrolled:courseEnrolled,
        courseRating:CourseRating,
        courseType:CourseType
    },
    {
        id:5,
        courseImg: PythonImg,
        courseAlt: "python-img",
        courseHead:"Became Python Expert",
        courseEnrolled:courseEnrolled,
        courseRating:CourseRating,
        courseType:CourseType
    },
    {
        id:6,
        courseImg: FrontendImg,
        courseAlt: "frontend-img",
        courseHead:"Become a  Frontend Engineer",
        courseEnrolled:courseEnrolled,
        courseRating:CourseRating,
        courseType:CourseType
    },
]

export {Courses};