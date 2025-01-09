import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react";

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText('anothayXXXX@gmail.com');
      setHasCopied(true);
  
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    };
  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols01 gap-5 h-full">

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/logo.png" alt="logo" className="w-full sm:h-[276px] h-fit object-contain" />

                    <div>
                        <p className="grid-headtext">Hi, I am Exz </p>
                        <p className="grid-subtext">I am a 3rd year student from Laos, currently pursuing my studies at the Information and Systems Engineering Course within the Department of Creative Engineering at Kitakyushu National Institute of Technology (NIT KIT) in Japan.
                        My academic journey at NIT KIT has exposed me to a comprehensive curriculum in information systems and engineering, where I'm developing a strong foundation in both theoretical concepts and practical applications. I am particularly interested in software development and have recently begun exploring the full stack of web development.
                      
                        </p>
                    </div>


                </div>

            </div>
            <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 33.8835, lng: 130.8752, text: 'Kitakyushu, Japan', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Our world!</p>
              <p className="grid-subtext">"Come explore this boundless Earth with me - every path is ours to discover"</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
           
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-sm font-medium text-gray_gradient text-white">xbecomputer12345@gmail.com</p>
              </div>
          </div>
        </div>






            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/skill.png" alt="skill" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">Beginner Skills  </p>
                        <p className="grid-subtext">My frontend journey includes basic familiarity with React, Next.js, and others, along with foundational JavaScript knowledge. On the backend, I am learning Django,Express.js,...  To manage my code , I learnt version control using Git and GitHub. While I am still at the beginning of my development journey, I am actively working on improving these skills and expanding my knowledge in both frontend and backend technologies.
                        </p>
                    </div>
                </div>
            </div>



           


    






        </div>

    </section>
  )
}

export default About