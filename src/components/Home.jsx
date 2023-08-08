import React from "react";
import IntroData from "../data/HomeData.json";
const Home = () => {
  const records = IntroData["Intro"];
  return (
    <div className="container mx-auto md:px-6">
    <section className="py-12">
      {records.map((record)=>(
        <div key={record["id"]} className="flex flex-wrap">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
          <div className="flex lg:py-5">
            <img src={record["avatar"]} className="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]" alt={record["title"]}/>
          </div>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 static">
          <div className="flex h-full items-center rounded-lg bg-zinc-800 p-6 text-center text-white lg:pl-12 lg:text-left">
            <div className="lg:pl-12">
              <h2 className="mb-8 text-3xl font-bold">{record["title"]}</h2>
              <p className="mb-8 pb-2 lg:pb-0">
                {record["body"]}
              </p>

              <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
                <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Best team
                </p>

                <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Best quality
                </p>

                <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Best experience
                </p>
              </div>

              <p>
                With years of experience in web development, I can
                confidently say that I am the best developer for your
                business. So, if you're looking for an experienced, reliable
                and creative web developer, look no further. I am here to
                help you take your business to the next level.
              </p>
            </div>
          </div>
        </div>
      </div>
      ))}      
    </section>
  </div>
  );
};

export default Home;
