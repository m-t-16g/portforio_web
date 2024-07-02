const ProductThumb = (props) => {
    const data = props.data;
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        props.changeSelect(data);
    };
    return (
        <>
            <div className='w-full h-full' onClick={handleClick}>
                <img
                    className='w-full h-full object-cover hover:opacity-80 hover:border-2 transition'
                    src={data.thumb}
                />
            </div>
        </>
    );
};

export default ProductThumb;
