import React from "react"
import Image from "next/image"
import ProgressSlider from "@/components/progress-slider";
import BizChatMockup1 from "@/public/bizchatmockup1.png"
import BizChatMockup2 from "@/public/bizchatmockup2.png"
import BizChatMockup3 from "@/public/bizchatmockup3.png"
import BizChatMockup4 from "@/public/bizchatmockup4.png"
import Img1Icon from "@/public/number1-square.svg"
import Img2Icon from "@/public/number2-square.svg"
import Img3Icon from "@/public/number3-square.svg"
import Img4Icon from "@/public/number4-square.svg"

export default function BizChat() {
  const images = [
    {
      img: BizChatMockup1,
      description: 'Setting goals',
      buttonIcon: Img1Icon,
    },
    {
      img: BizChatMockup2,
      description: 'Simplify steps',
      buttonIcon: Img2Icon,
    },
    {
      img: BizChatMockup3,
      description: 'Scaffolding',
      buttonIcon: Img3Icon,
    },
    {
      img: BizChatMockup4,
      description: 'Accountability',
      buttonIcon: Img4Icon,
    },
  ];
  
  return (
    <main className="flex flex-col items-center px-4">
      <section className="w-[48rem] max-h-[30rem] bg-gray-50 rounded-lg">
        <Image
          src="/bizchatImg.png"
          alt="Mockup of a screen from BizChat"
          width="7000"
          height="7000"
          quality={100}
          priority={true}
          className="py-10 px-20 w-full"
        />
      </section>
      <section className="flex flex-col w-[48rem] py-7">
        <h2 className="text-3xl text-left">BizChat</h2>
        <h3 className="text-xl">Using generative AI to aid small-scale entrepreneurs in creating business plans</h3>
      </section>
      <section className="flex w-[48rem] gap-7 justify-between">
        <div>
          <h5 className="text-lg font-extralight mb-2">Role</h5>
          <ul>
            <li>Researcher</li>
            <li>UX Designer</li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-extralight mb-2">Timeline</h5>
          <p>Jan 2024 - May 2024</p>
        </div>

        <div>
          <h5 className="text-lg font-extralight mb-2">Tools</h5>
          <ul>
            <li>Figma</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-extralight mb-2">Team</h5>
          <ul>
            <li><a href="https://ykotturi.github.io/" target="_blank" className="underline">Yasmine Kotturi</a></li>
            <li><a href="https://quentinromerolauro.com/" target="_blank" className="underline">Quentin Romero Lauro</a></li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col w-[48rem] pt-7 justify-between">
        <div className="flex flex-col gap-4 font-light text-[0.95rem]">
          <p>As we all know, generative AI is permeating many fields, with many potentialy benefits to explore. One such intersection we have decided to explore is genAI and entrepreneurs - specifically in the context of business plans and small-scale entrepreneurs.</p>
          <p>Though there is much potential for genAI to be integrated into entrepreneurs' businesses and tasks, previous research has shown that higher-performing entrepreneurs get higher quality advice from AI assistance, thus our focus on small-scale entrepreneurs. This ties into the general disparity in genAI users' technical background and other disparities surrounding genAI usage. For example, current genAI tools often assume users' digital literacy levels. Many of these tools need pre-processing (e.g. prompt engineering) and post-processing (e.g. editing a generated image). Furthermore, genAI often can cause techno-anxiety in those unfamiliar with genAI, causing further disinterest and disuse in similar tools.</p>
          </div>
        <div className="flex gap-3 text-[0.8rem] text-center text-nowrap pt-7">
            <a 
              href="https://docs.google.com/presentation/d/1LQKugmxkObRhy8uIF92CgqDIMOgue_WQ-WW8Cyq4JDs/edit?usp=sharing" 
              target="_blank"
              className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
            >View Presentation</a>
            <a 
              href="https://drive.google.com/file/d/1eZyAYxCHKJOqE8OBH1vH5FQnlGvTeH6Z/view" 
              target="_blank"
              className="bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full"
            >Watch Presentation</a>
          </div>
      </section>

      <section className="flex flex-col w-[48rem] pt-14 justify-between gap-5">
        <div className="flex w-[48rem] justify-between">
          <h3 className="text-xl text-nowrap">Overview</h3>
          <div className="border-t border-gray-500 w-full mt-3 ml-5"></div>
        </div>
        
        <h4>Research Question</h4>
        <p className="font-light -mt-3 text-[0.95rem]">How might a system account for disparities in use of generative AI systems, specifically in the context of small-scale entrepreneurs?</p>

        <h4>Outcome</h4>
        <p className="font-light -mt-3 text-[0.95rem]">The system is currently still in development. As of May 2024, Quentin and I have presented to our lab the initial mockups and demos.</p>
      </section>

      <section className="flex flex-col w-[48rem] pt-14 justify-between gap-5">
        <div className="flex w-[48rem] justify-between">
          <h3 className="text-xl text-nowrap">Process</h3>
          <div className="border-t border-gray-500 w-full mt-3 ml-5"></div>
        </div>
        <div className="flex flex-col gap-5">
          <h4>1. Initial sketches</h4>
          <p className="font-light -mt-3 text-[0.95rem]">When we started the project, we had not yet decided to focus on business plans. We only knew we wanted to explore the intersection of genAI and entrepreneurs. I created 7 different sketches.</p>
        </div>
        <div className="flex flex-col gap-5">
          <h4>2. Lab feedback on sketches</h4>
          <p className="font-light -mt-3 text-[0.95rem]">Once I finished sketching the original ideas, I translated them into lo-fi wireframes to better communicate the ideas to a larger audience to get feedback.</p>
        </div>
        <div className="flex flex-col gap-5">
          <h4>3. Hi-fi wireframing</h4>
          <p className="font-light -mt-3 text-[0.95rem]">After getting feedback from the lab, we decided to focus on business plans. I started creating various mid-fi, and eventually, hi-fi wireframes for BizChat.</p>
        </div>
        <div className="flex flex-col gap-5">
          <h4>4. Development</h4>
          <p className="font-light -mt-3 text-[0.95rem]">Once the hi-fi wireframes were done, our team moved to development, where we carefully chose our tech stack to best reflect important values, such as privacy and accessibility, to small-scale entrepreneurs.</p>
        </div>
      </section>
      <section className="flex flex-col w-[48rem] pt-14 justify-between gap-5">
        <div className="flex w-[48rem] justify-between">
          <h3 className="text-xl text-nowrap">Design Goals</h3>
          <div className="border-t border-gray-500 w-full mt-3 ml-5"></div>
        </div>
        
        <p className="font-light"><span className="font-semibold">Reduce and simplify steps</span> by prompt scaffolding, inline editing, and section partitions</p>

        <p className="font-light"><span className="font-semibold">Support user agency in privacy</span> for sensitive information by model selection and open-source software</p>

        <p className="font-light"><span className="font-semibold">Foster critical thinking</span> by double-checking, explanations, step-by-step scaffolding, and tangible outcomes</p>
      </section>
      <section className="flex flex-col w-[48rem] pt-14 justify-between gap-5">
        <div className="flex w-[48rem] justify-between">
          <h3 className="text-xl text-nowrap">Mockups</h3>
          <div className="border-t border-gray-500 w-full mt-3 ml-5"></div>
        </div>
        <ProgressSlider items={images} />
      </section>
      <section className="flex flex-col w-[48rem] pt-14 justify-between gap-5">
        <div className="flex w-[48rem] justify-between">
          <h3 className="text-xl text-nowrap">Tech Stack</h3>
          <div className="border-t border-gray-500 w-full mt-3 ml-5"></div>
        </div>
        <Image 
          src="/bizchattechstack.png"
          alt="BizChat's tech stack diagram, which includes React, LangChain, Ollama, Google Cloud, Docker, Supabase, etc."
          width="7000"
          height="7000"
          quality={100}
          className="py-10 px-20 w-full"

        />
        <p className="font-light">BizChat's tech stack was chosen carefully with our second design goal, supporting user agency in privacy, in mind. Therefore, in much of our tech stack, we opted for open-source alternatives.</p>
      </section>
      <section className="flex flex-col w-[48rem] pt-14 justify-between gap-5">
        <div className="flex w-[48rem] justify-between">
          <h3 className="text-xl text-nowrap">What's next?</h3>
          <div className="border-t border-gray-500 w-full mt-3 ml-5"></div>
        </div>
        <p className="font-light">BizChat is an ongoing research project and it is also continuously being developed.</p>

        <p>Here are some of the next steps we outlined:</p>
        <ol className="list-decimal list-inside font-light">
          <li className="mb-2">Continued iterations and development
            <ul className="list-disc list-inside ml-4">
              <li>Prompt engineering suggestions</li>
              <li>Saving, uploading, exporting generated plans</li>
            </ul>
          </li>
          <li className="mb-2">Pilot user study
            <ul className="list-disc list-inside ml-4">
              <li>Moderated think-aloud with 5-10 entrepreneurs from local community hubs</li>
              <li>Pre and post-use questionnaire to assess differences in techno-anxieties and usability issues</li>
            </ul>
          </li>
          <li className="mb-2">Larger deployment
            <ul className="list-disc list-inside ml-4">
              <li>Recruit from online business forums and local community hubs, snowball sampling with 500 entrepreneurs</li>
            </ul>
          </li>
        </ol>

        <p>To learn more...</p>
        <div className="flex justify-between gap-14">
          <div className="flex flex-col gap-3">
            <p className="font-light">Feel free to view our presentation deck, which contains a demo of BizChat:</p>
            <a 
              href="https://docs.google.com/presentation/d/1LQKugmxkObRhy8uIF92CgqDIMOgue_WQ-WW8Cyq4JDs/edit?usp=sharing" 
              target="_blank"
              className="bg-gray-900 text-white text-nowrap px-7 py-3 flex justify-center rounded-full"
            >View Presentation</a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-light">Or alternatively, watch Quentin and I present BizChat with the presentation here:</p>
            <a 
              href="https://drive.google.com/file/d/1eZyAYxCHKJOqE8OBH1vH5FQnlGvTeH6Z/view" 
              target="_blank"
              className="bg-white text-gray-900 px-7 py-3 flex justify-center rounded-full"
            >Watch Presentation</a>
          </div>
        </div>
      </section>
    </main>
  )
}
