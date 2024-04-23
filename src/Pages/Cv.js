import React from "react";
import cvData from '../CvData.json';
import './CV.css';

const Cv=()=>{
    return(
        
        <div className="container">

            <div className="cvcontent">
                <h2>Personl Information</h2>
                <p>Name: {cvData.personalInformation.firstName} {cvData.personalInformation.lastName}</p>
                <p>Email: {cvData.personalInformation.email}</p>
                <p>Phone: {cvData.personalInformation.phone}</p>
                <p>Address: {cvData.personalInformation.address}</p>
            </div>

            <div className="cvcontent">
                <h2>Summary</h2>
                <p>{cvData.summary}</p>
            </div>

            <div className="cvcontent">
                <h2>Education</h2>
                <p>Degree: {cvData.education.degree}</p>
                <p>School: {cvData.education.school}</p>
                <p>Graduation Year: {cvData.education.graduationYear}</p>
            </div>

    
            <div className="cvcontent">
                <h2>Skills</h2>
                <p>{cvData.skills.skill1}</p>
                <p>{cvData.skills.skill2}</p>
                <p>{cvData.skills.skill3}</p>
            </div>

            <div className="cvcontent">
                <h2>Languages</h2>
      
                {cvData.languages.map((cv) => (
                    <div key={cv.Id}>
                        <p>{cv.language}: {cv.proficiency}</p>
        
                    </div>
                ))}
            </div>
        </div>
        
    )
}
export default Cv;