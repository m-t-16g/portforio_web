const Others = () => {
    return (
        <section className='grid max-h-full h-5/6 w-full py-12 px-4 gap-1 lg:px-10  grid-cols-12 grid-rows-12'>
            <h2 className='col-span-4 row-span-2 '>
                <a
                    href='https://github.com/m-t-16g'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='flex items-center cursor-pointer'
                >
                    <p>
                        <span className='font-semibold mr-1'>Github:</span>
                        m-t-16g
                    </p>

                    <img
                        src='img/github-mark.png'
                        alt='githublogo'
                        className='ml-2 w-8 h-8'
                    />
                </a>
            </h2>
        </section>
    );
};

export default Others;
