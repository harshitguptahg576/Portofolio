import React from 'react'
import Title from '../Title';
import IntroButton from '../IntroButton'

const Project = () => {
  return (
    <div className="project my-5">
      <Title title="Project Details" subTitle="My projects gives me motivation !" />

      <div className="about-box container my-5">
        <div className="bio">
          <div className="">
            <p className="bio-short">@H-Coder</p>
            <h1 className="bio-title">
              Full Stack Developer | Python Developer
            </h1>
            <p className="bio-desc my-3">
              I am Harshit Gupta from India. I have done my Master's Degre in
              the discipline of Computer Applications and Engineering in GLA
              University with an aggregate of 90%.
            </p>
          </div>
          <div className="highlights">
             <p className="h-title my-4">
             In Working State 🔽
            </p>
           {/* <ul>
              <li>
                I have good command in{" "}
                <span className="bio-highlights">
                  Python, JavaScript, ML, Django, React{" "}
                </span>{" "}
                along with the knowledge of{" "}
                <span className="bio-highlights">
                  HTML, CSS, C#, Java, .NET, Pandas, Selenium
                </span>{" "}
                and Many More...
              </li>
              <li>My hobbies are Singing, Programming, Writing, Travelling.</li>
              <li>
                {" "}
                My strength is positive attitude, Dedication and self
                confidence.{" "}
              </li>
              <li>
                My weakness is I never feel comfortable until I finish off my
                work in time.
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project