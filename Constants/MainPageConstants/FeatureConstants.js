import FlexibleTxt from '../../resources/images/flexible-txt-icon.png'
import FlexibleImage from '../../resources/images/flexible-image.png'
import ProjectsTxt from '../../resources/images/hands-projects-txt-icon.png'
import ProjectsImage from '../../resources/images/hands-projects-image.png'
import DoubtTxt from '../../resources/images/doubt-txt-icon.png'
import DoubtImage from '../../resources/images/doubt-image.png'
import CertificationTxt from '../../resources/images/certification-txt-icon.png'
import CertificationImage from '../../resources/images/certification-image.png'
import CohortTxt from '../../resources/images/cohort-txt-icon.png'
import CohortImage from '../../resources/images/cohort-image.png'
import MentorTxt from '../../resources/images/mentor-txt-icon.png'
import MentorImage from '../../resources/images/mentor-image.png'


const Features=[
    {
        id:1,
        featureTxt:FlexibleTxt,
        featureTxtWidth:"flexible-width",
        featureImg:FlexibleImage,
        featureAlt:"flexible-img",
        featureDirection: false,
    },
    {
        id:2,
        featureTxt:ProjectsTxt,
        featureTxtWidth:"project-width",
        featureImg:ProjectsImage,
        featureAlt:"projects-img",
        featureDirection:true,
    },
    {
        id:3,
        featureTxt:CohortTxt,
        featureTxtWidth:"cohort-width",
        featureImg:CohortImage,
        featureAlt:"cohort-img",
        featureDirection:false,
    },
    {
        id:4,
        featureTxt:MentorTxt,
        featureTxtWidth:"mentor-width",
        featureImg:MentorImage,
        featureAlt:"mentor-img",
        featureDirection:false,
        
    },
    {
        id:5,
        featureTxt:CertificationTxt,
        featureTxtWidth:"certificate-width",
        featureImg:CertificationImage,
        featureAlt:"certification-img",
        featureDirection:false,
    },
    {
        id:6,
        featureTxt:DoubtTxt,
        featureTxtWidth:"doubt-width",
        featureImg:DoubtImage,
        featureAlt:"doubt-img",
        featureDirection:true,
    }
]

export {Features};
