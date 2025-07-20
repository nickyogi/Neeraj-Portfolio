import React from 'react';
import { motion } from 'framer-motion';
import { useLoading, Grid } from '@agney/react-loading';

function StaggerText() {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Grid width="100" color="white" />,
    });

    const string = "Projects".split("");

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.1 * index,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div id="Projects" className="min-h-96 pt-32 px-4 md:px-0">
            <div className="relative flex flex-col items-center justify-center text-white">
                <div className="text-center sm:pr-32">
                    <h1 className="text-stroke  mr-3 pr-2  text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-none">
                    <div className='relative flex justify-center'>
                    <h1 className="flex justify-center text-white absolute top-0 -left-1 sm:-left-2  text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold leading-none">
                        {string.map((item, index) => (
                            <motion.div
                                key={`bottom-${index}`}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={index + 1.5}
                                className="hover:text-purple-500"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </h1>
                    <section
                    className="hidden sm:inline-block absolute mt-16 animate-bounce -right-32 translate-x-0"
                    {...containerProps}
                >
                    {indicatorEl}
                </section>
                        {string.map((item, index) => (
                            <motion.div
                                key={`top-${index}`}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={index}
                                className="hover:text-purple-500"
                                >
                                {item}
                            </motion.div>
                        ))}
                        </div>
                    </h1>

                    
                </div>

                
            </div>
        </div>
    );
}

export default StaggerText;
