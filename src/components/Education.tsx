import React from "react";
import { Card, CardContent } from "./Card"; // adjust path if needed
import  course1 from '../images/Coursera QY5J9YN4RLUJ (1)_page-0001.jpg'
import course2 from '../images/Responsive web desighn_page-0001.jpg'

const Education = () => {
  const educationData = [
    {
      degree: "🎓 B.Sc. Computer Science",
      school: "Abdul Wali Khan University, Mardan",
      duration: "2023 – Present",
      gpa: "GPA: 3.61 / 4.0",
    },
    {
      degree: "🎓 ICS ",
      school: "Peshawar Mpdel Degree College ",
      duration: "2020 – 2022",
      gpa: "Grade: A+",
    },
    {  
      degree : "📜 Certifiacte ",
      school : "HTML,CSS and JavaScript For Web DEVOLPERS",
      duration: "Jhon Hopkins University",
      image:  course1
    },
    {
       degree  :"📜 Certifiacte " ,
      school : "Responsive Web Desgin",
      duration : "Free Code Camp",
      image: course2
    }
  ];

  return (
    <section id="education" className="py-10 bg-[#1d2738]" >
      <h2 className="text-5xl font-bold mb-6 text-center  text-white ">Education</h2>

    <div  className="    flex items-center justify-center p-4" >
     
      <div className="grid md:grid-cols-2 gap-6 text-center ">
        {educationData.map((edu, index) => (
          <Card key={index}>
            <CardContent>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school}</p>
              <p className="text-sm text-gray-500">{edu.duration}</p>
              <p className="mt-2 text-sm font-medium">{edu.gpa}</p>
              <img src={edu.image} className=" mx-auto w-[300px] object-cover transition-transform duration-500 hover:scale-150 "></img>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Education;
