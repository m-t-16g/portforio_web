import { useState } from "react";
const ProductThumb = (props) => {
    const data = props.data;
    const [Hov, setHov] = useState(false);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault;
        props.changeSelect(data);
    };
    return (
        <>
            <div
                className={`col-span-2 md:col-span-1  w-full h-full relative border-4 transition hover:border-red-400 mb-1 ${
                    props.guide ? " border-indigo-500" : "border-slate-200"
                }`}
                onClick={handleClick}
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
            >
                <img
                    className={`w-full h-full object-cover   transition ${Hov ? "opacity-60" : "opacity-100"}`}
                    src={data.thumb}
                />
                <div
                    className={`absolute bottom-0 w-full h-1/3 
                    ${
                        Hov
                            ? "bg-red-400 opacity-100"
                            : props.guide
                              ? "bg-indigo-500 opacity-100"
                              : "bg-slate-200 opacity-90"
                    }  transition flex`}
                >
                    <p
                        className={`pt-1 pl-1 text-xs ${Hov ? "text-white" : props.guide ? "text-white" : "text-slate-900"}`}
                    >
                        {data.title}
                    </p>
                </div>
            </div>
        </>
    );
};

export default ProductThumb;
