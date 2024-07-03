import Btn from "./Btn";
import Data from "../components/data/products.json";
import { SetStateAction, useState } from "react";
import ProductThumb from "./ProductThumb";
import Footer from "./Footer";
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
            html: boolean;
            css: boolean;
            javascript: boolean;
            php: boolean;
            description: string;
            comment: string;
            rule: string;
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
            <section className='grid max-h-full  lg:h-5/6 w-full lg:mx-auto lg:w-5/6 xl:w-4/6 py-12 px-4 lg:px-10  grid-cols-12 grid-rows-12 '>
                <div className='col-span-4 col-start-1 row-span-7 row-start-1 bg-red-300'>
                    <img
                        src={Select.thumb}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='text-xs row-start-8 row-span-3 col-start-1 col-span-4 p-1 border-y-2  py-1 my-1 border-slate-700 text-justify flex'>
                    <p className='self-center indent-2'>{Select.comment}</p>
                </div>
                <div className='row-start-11 col-start-1 col-span-4 flex justify-between'>
                    <a
                        className='cursor-pointer'
                        href={Select.source}
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        <Btn name='GitHub' />
                    </a>
                    <a
                        className='cursor-pointer'
                        href={Select.link}
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        <Btn name='サンプル' />
                    </a>
                </div>
                <div className='cols-start-5 col-span-7 row-start-1 row-span-2 flex items-end px-3 ml-2 py-1 pb-4 text-3xl border-l-8 border-slate-700'>
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
                <div className='pl-2 col-start-5 col-span-8 row-start-3 row-span-10 grid grid-cols-3 grid-rows-3 gap-0'>
                    {data.map((data, index) => (
                        <ProductThumb
                            data={data}
                            key={index}
                            changeSelect={changeSelect}
                            guide={data == Select ? true : false}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Products;
