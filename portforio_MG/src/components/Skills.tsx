const Skills = () => {
    return (
        <section className='grid max-h-full h-5/6 w-full py-12 px-4 gap-1 lg:px-10  grid-cols-12 grid-rows-12'>
            <div className='col-start-2 col-span-4'>
                <h3 className='indent-2 pb-1 border-b-2 border-b-black text-justify tracking-widest  text-xl'>
                    習得技術
                </h3>
            </div>
            <ul className='row-start-3 row-span-full col-span-4 bg-red-100 p-2 m-2'>
                <li
                    className=' text-lg py-1 pl-1 pr-3 mb-2 w-fit'
                    style={{
                        background:
                            "linear-gradient(transparent 70%, rgba(220, 38, 38,0.3) 30%)",
                    }}
                >
                    資格
                </li>
                <li
                    className='w-full py-1'
                    style={{
                        background: "rgba(255,255,255,0.8)",
                    }}
                >
                    基本情報技術者
                </li>
            </ul>
            <ul className='row-start-3 row-span-full col-span-8 bg-amber-100 p-2 m-2'>
                <li
                    className='text-lg py-1 pl-1 pr-3 mb-2 w-fit'
                    style={{
                        background:
                            "linear-gradient(transparent 70%, rgba(217, 119, 6,0.3) 30%)",
                    }}
                >
                    言語
                </li>
                <li
                    className='w-full p-1 my-1'
                    style={{
                        background: "rgba(255,255,255,0.8)",
                    }}
                >
                    <p>HTML/CSS</p>
                    <p className='text-xs'>
                        学習期間5ヶ月
                        <br />
                        デザインの忠実な再現が可能です。
                    </p>
                </li>
                <li
                    className='w-full p-1 my-1'
                    style={{
                        background: "rgba(255,255,255,0.8)",
                    }}
                >
                    <p>javascript</p>
                    <p className='text-xs'>
                        学習期間7ヶ月
                        <br />
                        Vue React jQuerry
                        といったフレームワークの知識があります。
                    </p>
                </li>
                <li
                    className='w-full p-1 my-1'
                    style={{
                        background: "rgba(255,255,255,0.8)",
                    }}
                >
                    <p>php</p>
                    <p className='text-xs'>
                        学習期間4ヶ月
                        <br />
                        フォーム、ログイン、データベース連携等の知識があります。
                    </p>
                </li>
                <li
                    className='w-full p-1 my-1'
                    style={{
                        background: "rgba(255,255,255,0.8)",
                    }}
                >
                    <p>その他</p>
                    <p className='text-xs'>
                        SQL シェルスクリプト等の知識があります。
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Skills;
