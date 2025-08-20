import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BookOpen, Award, Users, Check } from 'lucide-react';
import './Programs.css';

const Programs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const programs = [
    {
      name: "Abacus Program",
      description: "Mental math mastery using colorful beads – perfect for kids aged 4–14",
      features: [
        "8 Fun Learning Levels",
        "Online & Offline Classes",
        "Competitions & Games",
        "Boosts Focus & Concentration"
      ],
      icon: <BookOpen color="white" size={32} />,
      category: "EducationalCourse",
      timeRequired: "PT6M"
    },
    {
      name: "Vedic Math",
      description: "Fast tricks from ancient India – ideal for exams & quick calculations",
      features: [
        "8 Learning Levels", 
        "Solve Math in Seconds",
        "Great for Olympiads",
        "For Ages 13+"
      ],
      icon: <Award color="white" size={32} />,
      category: "MathCourse",
      timeRequired: "PT8M"
    },
    {
      name: "Teacher Training",
      description: "Fun, interactive program to train educators in abacus & Vedic math",
      features: [
        "Certified in 40 Hours",
        "Teaching Kits Included",
        "Practice Sheets Provided",
        "Lifetime Support"
      ],
      icon: <Users color="white" size={32} />,
      category: "TeacherTraining",
      timeRequired: "PT40H"
    }
  ];

  return (
    <section id="programs" className="programs-section" itemScope itemType="https://schema.org/ItemList">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title1" itemProp="name">🎓 Our Programs</h2>
          <p className="section-subtitle" itemProp="description">
            Explore learning paths designed to spark joy and confidence in math!
          </p>
        </div>

        <div className="row g-4">
          {programs.map((program, index) => (
            <div 
              className="col-lg-4" 
              data-aos="fade-up" 
              data-aos-delay={`${index * 100}`}
              key={index}
              itemScope
              itemType={`https://schema.org/${program.category}`}
            >
              <div className="program-card" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <meta itemProp="position" content={index + 1} />
                <div className="icon-circle" aria-hidden="true">
                  {program.icon}
                </div>
                <h3 itemProp="name">{program.name}</h3>
                <p itemProp="description">{program.description}</p>
                <ul>
                  {program.features.map((feature, i) => (
                    <li key={i}>
                      <Check size={16} className="icon-check" aria-hidden="true" />
                      <span itemProp="knowsAbout">{feature}</span>
                    </li>
                  ))}
                </ul>
                <meta itemProp="timeRequired" content={program.timeRequired} />
                <meta itemProp="educationalLevel" content="Beginner to Advanced" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": programs.map((program, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": program.category,
              "name": program.name,
              "description": program.description,
              "timeRequired": program.timeRequired,
              "educationalLevel": "Beginner to Advanced"
            }
          }))
        })}
      </script>
    </section>
  );
};

export default Programs;