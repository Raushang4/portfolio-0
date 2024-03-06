import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white">Raushan kumar</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Full Stack Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
        I am a skilled MERN stack developer with two years of experience in college projects and freelancing.
         I have a strong understanding of the MERN stack, which includes MongoDB, Express.js, React, and Node.js.
          I have contributed to team projects and have experience working with databases, APIs, and front-end development. 
          I am proficient in JavaScript, HTML, CSS, and have a good understanding of version control systems like Git. 
        I am a team player and can work well in a collaborative environment. 
        My skills and experience make me a valuable asset to any team or project.
        </p>
      </div>
    </div>
  );
};

export default Banner;
