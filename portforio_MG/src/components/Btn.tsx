const Btn = (props) => {
    const name = props.name ? props.name : "Button";
    return (
        <div className='transition hover:bg-red-500 lg:text-lg text-gray-50 min-w-32 py-1 lg:px-2 bg-slate-700 inline-flex justify-center items-center'>
            {name}
        </div>
    );
};

export default Btn;
