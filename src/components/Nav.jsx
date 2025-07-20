import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useLoading, ThreeDots } from '@agney/react-loading';

function Nav({code}) {

    const { containerProps, indicatorEl } = useLoading({
      loading: true,
      indicator: <ThreeDots width="50" color="white" />,
    });

  return (
    <div className="bg-zinc-900 w-full">
      {/* <div className="tabs absolute top-10 right-5 flex flex-col items-center mx-20">
            {["Home", "Skills", "", "Projects"].map((item, index) => {
              return item.length == 0 ? (
                <span
                  key={index}
                  className="w-[1px] h-5 mx-10 inline-block bg-zinc-500"
                ></span>
              ) : (
                <a
                  key={index}
                  className=" text-white text-s mx-5 flex items-center gap-1"
                  href={`#${item}`}
                >
                  {" "}
                  {index == code && (
                    <span
                      style={{ boxShadow: "0 0 0.8em #0efc26" }}
                      className=" inline-block rounded-full w-2 h-2 bg-green-500 animate-pulse"
                    ></span>
                  )}{" "}
                  {item}
                </a>
              );
            })}
          </div> */}
      <div className=" sm:max-w-6xl mx-auto px-4 sm:px-2 py-5 flex items-center justify-between border-b-[1px] border-zinc-700 ">
        <div className="navLeft flex items-center">
          <div className="logo flex items-center">
            
              <img className="h-5 w-5" src="/Icons/logo-icon.png" />
            

            {code == 1 && <section className='ml-2 mr-5' {...containerProps}>{indicatorEl}</section>}

            {code == 0 && <h1 className="text-white font-semibold text-5 ml-2">Portfolio</h1>}
          </div>
          <div className="tabs hidden sm:flex items-center mx-20">
            {["Home", "Skills", "", "Projects"].map((item, index) => {
              return item.length == 0 ? (
                <span
                  key={index}
                  className="w-[1px] h-5 mx-10 inline-block bg-zinc-500"
                ></span>
              ) : (
                <a
                  key={index}
                  className=" text-white text-s mx-5 flex items-center gap-1"
                  href={`#${item}`}
                >
                  {" "}
                  {index == code && (
                    <span
                      style={{ boxShadow: "0 0 0.8em #0efc26" }}
                      className=" inline-block rounded-full w-2 h-2 bg-green-500 animate-pulse"
                    ></span>
                  )}{" "}
                  {item}
                </a>
              );
            })}
          </div>
          
        </div>

        <Link to="/contact">
          <Button className="self-end" />
        </Link>
      </div>
    </div>
  );
}

export default Nav