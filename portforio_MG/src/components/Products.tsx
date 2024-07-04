import Btn from "./Btn";
import Data from "../components/data/products.json";
import { SetStateAction, useState } from "react";
import ProductThumb from "./ProductThumb";

const Products = () => {
    const data = [...Data.products].reverse();
    const [Select, setSelect] = useState(data[0]);
    const [Fade, setFade] = useState(false);
    const changeSelect = (
        newData: SetStateAction<{
            date: string;
            title: string;
            thumb: string;
            genre: string;
            comment: string;
            link: string;
            source: string;
        }>
    ) => {
        if (Select !== newData) {
            setFade(true);
            setTimeout(() => {
                setSelect(newData);
                setTimeout(() => {
                    setFade(false);
                }, 150);
            }, 150);
        }
    };

    return (
        <>
            <section className='mt-6 mb-12 md:mb-20 md:h-dvh md:max-h-full lg:h-5/6 w-full lg:mx-auto lg:w-5/6 xl:w-4/6 pt-4 px-4  lg:px-10'>
                <h2 className='mb-10 w-fit ml-auto mr-auto text-4xl px-4 pb-2 border-b-4 border-b-amber-500'>
                    制作物
                </h2>
                <div className='md:aspect-video md:max-h-full md:grid grid-cols-12 grid-rows-12 '>
                    <div className=' md:col-start-7 md:col-span-6 md:row-start-1 md:row-span-1  lg:col-start-6 lg:col-span-7 lg:row-span-2 flex items-end px-3 py-1 md:pb-1 lg:pb-4 mb-2 md:mb-0 md:ml-1 lg:ml-2  text-2xl lg:text-3xl border-l-4 lg:border-l-8 border-amber-500'>
                        <p
                            style={
                                Fade
                                    ? {
                                          opacity: 0,
                                          transform: "scaleX(0.1)",
                                          transformOrigin: "0 0",
                                          transition: "all 0.15s",
                                      }
                                    : {
                                          opacity: 1,
                                          transformOrigin: "0 0",
                                          transition: "all 0.15s",
                                      }
                            }
                        >
                            {Select.title}
                        </p>
                    </div>
                    <div className='mb-2 md:mb-0 md:col-start-1 lg:col-start-1 md:row-start-1 lg:row-start-1 md:col-span-6 md:row-span-6 lg:col-span-5 lg:row-span-6 '>
                        <img
                            src={Select.thumb}
                            className='w-full h-60 md:h-full lg:h-full object-cover'
                        />
                    </div>
                    <div className='h-40 md:h-fit lg:h-full md:col-start-7 md:row-start-3 md:col-span-6 md:row-span-2  lg:row-start-7 lg:row-span-4 lg:col-start-1 lg:col-span-5 px-3 md:px-2 py-3 border-y-2 md:ml-1 lg:ml-0  md:py-1 my-2 md:my-1 border-slate-700 text-justify flex'>
                        <p className=' self-center indent-2 text-sm md:text-base md:my-6 items-center '>
                            {Select.comment}
                        </p>
                    </div>
                    <div className='w-full mb-2 lg:mt-2 md:mb-0 md:col-start-7 md:col-span-6 md:row-start-6 lg:row-start-11 lg:row-span-2 lg:col-start-1 lg:col-span-5 md:ml-1 lg:ml-0 flex justify-between'>
                        <a
                            className='cursor-pointer w-fit h-fit self-center'
                            href={Select.source}
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <Btn name='GitHub' />
                        </a>
                        <a
                            className='cursor-pointer w-fit h-fit self-center'
                            href={Select.link}
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <Btn name='サンプル' />
                        </a>
                    </div>

                    <div className='md:col-start-1 md:col-span-12 md:row-start-7 md:row-span-6 md:pl-0 lg:pl-2 lg:col-start-6 lg:col-span-7 lg:row-start-3 lg:row-span-10 md:mt-2 lg:mt-0 grid grid-cols-6 lg:grid-cols-3 grid-rows-3 gap-1 lg:gap-0'>
                        {data.map((data, index) => (
                            <ProductThumb
                                data={data}
                                key={index}
                                changeSelect={changeSelect}
                                guide={data == Select ? true : false}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;
