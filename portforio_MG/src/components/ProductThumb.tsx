const ProductThumb = (props) => {
    const data = props.data;
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault;
        props.changeSelect(data);
    };
    return (
        <>
            <div
                className={`col-span-2 md:col-span-1  w-full h-full border-4 transition hover:border-red-400 mb-1 ${
                    props.guide ? " border-indigo-500" : "border-slate-200"
                }`}
                onClick={handleClick}
            >
                <img
                    className='w-full h-full object-cover hover:opacity-60  transition'
                    src={data.thumb}
                />
            </div>
        </>
    );
};

export default ProductThumb;
