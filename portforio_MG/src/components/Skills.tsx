import { FaCaretRight, FaCheck } from "react-icons/fa";

const Skills = () => {
    const qualification: Array<string> = ["基本情報技術者"];
    const language = [
        {
            lang: "HTML/CSS",
            learning: 7,
            career: 0,
            description: "デザインの忠実な再現が可能です。",
        },
        {
            lang: "javascript",
            learning: 6,
            career: 0,
            description: "React Vue 等のフレームワークの知識があります。",
        },
        {
            lang: "php",
            learning: 4,
            career: 0,
            description:
                "フォーム、ログイン、データベース連携等の知識があります",
        },
        {
            lang: "その他",
            learning: 0,
            career: 0,
            description:
                "Linuxコンソール、シェルスクリプト、SQLの知識があります",
        },
    ];
    return (
        <>
            <section className='mt-8 mb-8 md:grid max-h-full h-5/6 w-full gap-1 lg:mx-auto lg:w-5/6 xl:w-4/6 py-12 px-4 lg:px-10  grid-cols-12 grid-rows-12 '>
                <div className='mb-6 md:mb-0 col-start-2 col-span-4'>
                    <h3 className='m w-28 md:w-full indent-2 pb-1 border-b-4 border-b-lime-600 text-justify tracking-widest text-xl'>
                        習得技術
                    </h3>
                </div>
                <div className='row-start-3 row-span-full col-span-3 bg-red-100 p-2 pb-6 md:pb-2 mb-2 md:m-2'>
                    <h3
                        className=' text-lg py-1 pl-1 pr-3 mb-2 w-fit font-bold'
                        style={{
                            background:
                                "linear-gradient(transparent 70%, rgba(220, 38, 38,0.3) 30%)",
                        }}
                    >
                        資格
                    </h3>
                    <ul>
                        {qualification.map((value, index) => (
                            <li
                                className='flex flex-wrap items-center w-full py-1.5 pl-2 mb-1 bg-white/80'
                                key={index}
                            >
                                <span className='mr-1 text-emerald-500'>
                                    <FaCheck />
                                </span>
                                <p className='w-5/6'>{value}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='row-start-3 row-span-full col-span-9 bg-amber-100 p-2 pb-10 md:pb-2 md:m-2'>
                    <h3
                        className='text-lg py-1 pl-1 pr-3 mb-2 w-fit font-bold'
                        style={{
                            background:
                                "linear-gradient(transparent 70%, rgba(217, 119, 6,0.3) 30%)",
                        }}
                    >
                        言語
                    </h3>
                    <ul className='md:grid grid-cols-2 gap-1.5'>
                        {language.map((item, index) => (
                            <li
                                className='p-1 mb-2 md:my-1 bg-white/80'
                                key={index}
                            >
                                <p
                                    className='px-2 font-semibold mb-2 w-fit'
                                    style={{
                                        background:
                                            "linear-gradient(transparent 70%, rgba(217, 119, 6,0.3) 30%)",
                                    }}
                                >
                                    {item.lang}
                                </p>
                                {item.career != 0 ? (
                                    <p className='text-xs pl-3 text-justify mb-2 flex flex-wrap'>
                                        <span className='pt-0.5 mr-0.5'>
                                            <FaCaretRight />
                                        </span>
                                        実務経験{item.learning}ヶ月
                                    </p>
                                ) : (
                                    item.learning != 0 && (
                                        <p className='text-xs pl-3 text-justify mb-2 flex flex-wrap'>
                                            <span className='pt-0.5 mr-0.5'>
                                                <FaCaretRight />
                                            </span>
                                            学習期間{item.learning}ヶ月
                                        </p>
                                    )
                                )}

                                <p className='text-xs pl-3 text-justify mb-2 flex flex-wrap'>
                                    <span className='pt-0.5 mr-0.5'>
                                        <FaCaretRight />
                                    </span>
                                    <span className='w-5/6'>
                                        {item.description}
                                    </span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Skills;
