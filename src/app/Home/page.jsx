"use client"; // تأكد من وضعها في أعلى الملف
import ParticlesComponent from "../ParticlesComponent";
import Image from "next/image"; // استخدم Image من Next.js
import imageOne from '../../assests/305911655_1281327379336317_5074921059612691428_n.jpg';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <ParticlesComponent />

      {/* حاوية لتنسيق الصورة والمعلومات */}
      <div className="absolute container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 z-20 w-full max-w-6xl p-4">
        {/* قسم الصورة */}
        <div className="col-span-5 flex items-center justify-center">
          <Image 
            src={imageOne} 
            alt="Profile Picture" 
            width={400} 
            height={400} // أضفنا ارتفاعاً متساوياً لجعل الصورة دائرية بشكل أفضل
            className="rounded-full object-cover" // لإضافة تأثير دائري
          />
        </div>

        {/* قسم المعلومات */}
        <div className="col-span-7 flex flex-col justify-center text-left">
          <h1 className="text-black text-4xl md:text-5xl font-bold mb-4">
            Welcome to My Portfolio
          </h1>
          <h2 className="text-black text-3xl md:text-4xl mb-2">
            <Typewriter
              options={{
                strings: [
                  'I build responsive user interfaces.',
                  'I create seamless web experiences.',
                  'I optimize web applications for speed.',
                  'I love working with React and Next.js!'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="text-gray-700 text-lg mt-4">
            Explore my projects and skills in front-end development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
