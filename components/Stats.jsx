"use client";
import React from 'react'
import CountUp from "react-countup";
const stats = [
    {
      num: 1,
      text: "Years of experience",
    },
    {
      num: 100,
      text: "Projects completed",
    },
    {
      num: 200,
      text: "Code Commits",
    },
  ];

const Stats = () => {

  return (
    <section className=' pt-4 pb-12 xl:pt-0 xl:pb-0 '>
      <div className="container mx-auto">
        <div className=' flex flex-wrap gap-6 max-w-[80px]  mx-auto xl:max-w-none'>
          {stats.map((item, index) => (
            <div key={index} className=' flex-1 gap-6  items-center justify-center xl:justify-start'>
              <CountUp
                end={item.num}
                     duration={5}
                          delay={2}
                className="text-3xl xl:text-6xl font-extrabold"
              />
              <p className="text-xl">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
