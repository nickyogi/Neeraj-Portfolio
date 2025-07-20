import React from 'react';
import Card from './Card';

function Cards() {
  const cardData = [
    {
      width: "w-full md:w-[30%]",
      para: true,
      head: false,
      hover: "hover:bg-zinc-700 p-5 duration-100",
      padding: "hover:px-2 duration-300",
      smHead: "Up Next: About",
      bigHead: "Who am I"
    },
    {
      width: "w-full md:w-[70%]",
      para: false,
      head: true,
      hover: "hover:bg-violet-500 duration-100",
      padding: "hover:px-2 duration-300",
      smHead: "Get In Touch",
      bigHead: "Let's get to it, together"
    }
  ];

  return (
    <div className='w-full bg-inherit pb-32 px-4'>
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-4">
        {cardData.map((item, index) => (
          <Card
            key={index}
            width={item.width}
            para={item.para}
            head={item.head}
            hover={item.hover}
            padding={item.padding}
            smHead={item.smHead}
            bigHead={item.bigHead}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
