import Footer from "./Footer";

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
            <section className='grid max-h-full h-5/6 w-full gap-1 lg:mx-auto lg:w-5/6 xl:w-4/6 py-12 px-4 lg:px-10  grid-cols-12 grid-rows-12 '>
                <div className='col-start-2 col-span-4'>
                    <h3 className='indent-2 pb-1 border-b-2 border-b-black text-justify tracking-widest  text-xl'>
                        習得技術
                    </h3>
                </div>
                <div className='row-start-3 row-span-full col-span-3 bg-red-100 p-2 m-2'>
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
                                className='w-full py-1 px-4 mb-1 bg-white/80'
                                key={index}
                            >
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='row-start-3 row-span-full col-span-9 bg-amber-100 p-2 m-2'>
                    <h3
                        className='text-lg py-1 pl-1 pr-3 mb-2 w-fit font-bold'
                        style={{
                            background:
                                "linear-gradient(transparent 70%, rgba(217, 119, 6,0.3) 30%)",
                        }}
                    >
                        言語
                    </h3>
                    <ul className='grid grid-cols-2 gap-1.5'>
                        {language.map((item, index) => (
                            <li className='p-1 my-1 bg-white/80' key={index}>
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
                                    <p className='pl-4 text-xs mb-1'>
                                        実務経験{item.learning}ヶ月
                                    </p>
                                ) : (
                                    item.learning != 0 && (
                                        <p className='pl-4 text-xs mb-1'>
                                            学習期間{item.learning}ヶ月
                                        </p>
                                    )
                                )}

                                <p className='text-xs px-4 text-justify mb-1'>
                                    {item.description}
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
