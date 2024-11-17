import BlogProfile from '../../public/resources/images/blog-profile-pic.png'
import BlogImage1 from '../../public/resources/images/blog-image-1.png'
import BlogImage2 from '../../public/resources/images/blog-image-2.png'
import BlogImage3 from '../../public/resources/images/blog-image-3.png'

const BlogsData=[
    {
        id:1,
        blogImg:BlogImage1,
        blogHead:"Sliding Window",
        blogPara:`When working with arrays, problems often involve looking at groups of elements, or "windows," within...`,
        blogProfile:BlogProfile,
        blogAuthor:"Programming Pathshala",
        blogTimeline:"September 21, 2024  8 Minutes",
        blogLink:`${process.env.NEXT_PUBLIC_BLOGS_URL}sliding-window-minimum-number-of-swaps-to-group-all-elements-together/99`
    },
    {
        id:2,
        blogImg:BlogImage2,
        blogHead:"Sieve of Eratosthenes",
        blogPara:"Time Complexity: O(KNlogK), where N is the total number of nodes across all lists. This complexity ari...",
        blogProfile:BlogProfile,
        blogAuthor:"Programming Pathshala",
        blogTimeline:"September 21, 2024  8 Minutes",
        blogLink:`${process.env.NEXT_PUBLIC_BLOGS_URL}sieve-of-eratosthenes/107`
    },
    {
        id:3,
        blogImg:BlogImage3,
        blogHead:"Intro to JDK, JRE, and JVM",
        blogPara:"I never thought I’d join Google because I already had my offer from Oracle, so I had the mindset that...",
        blogProfile:BlogProfile,
        blogAuthor:"Programming Pathshala",
        blogTimeline:"September 21, 2024  8 Minutes",
        blogLink:`${process.env.NEXT_PUBLIC_BLOGS_URL}jdk-jre-jvm/95`
    },
]

export {BlogsData};