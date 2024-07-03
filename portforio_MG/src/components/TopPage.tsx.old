import { useNavigate } from "react-router-dom";

const TopPage = () => {
    const navigate = useNavigate();
    const navProduct = () => {
        navigate("/products");
    };
    const navSkills = () => {
        navigate("/skills");
    };
    const navOthers = () => {
        navigate("/others");
    };

    return (
        <>
            <section className='grid max-h-full h-5/6 w-full py-12 px-4 gap-1 lg:px-10  grid-cols-12 grid-rows-12'>
                <ul className='col-span-8 row-start-3 row-span-8 grid grid-rows-2 grid-cols-2 gap-3'>
                    <li
                        className='border-l-amber-500 border-l-8  bg-gradient-to-b from-slate-50 to-gray-200 col-span-2 inline-flex justify-between pr-8 pb-4 hover:cursor-pointer hover:to-amber-300 transition hover:animate-button-hover'
                        style={{ boxShadow: "5px 5px 0px rgba(0,0,0,0.5)" }}
                        onClick={navProduct}
                    >
                        <p className='p-2 w-8/12 text-justify text-sm text-slate-600'>
                            制作物をソース、サンプル付きで掲載しています
                        </p>
                        <h2 className='min-w-28 text-4xl font-bold self-end justify-items-end'>
                            制作物
                        </h2>
                    </li>
                    <li
                        className='border-l-lime-500 border-l-8 bg-gradient-to-br from-slate-50 to-gray-300 inline-flex justify-between pr-8 pb-4 hover:cursor-pointer hover:to-lime-300 transition hover:animate-button-hover'
                        style={{ boxShadow: "5px 5px 0px rgba(0,0,0,0.5)" }}
                        onClick={navSkills}
                    >
                        <p className='p-2 w-8/12 text-justify text-sm text-slate-600'>
                            取得している資格、知識のある言語などを記載しています
                        </p>
                        <h2 className='text-right min-w-20 text-4xl font-bold self-end justify-items-end'>
                            技術
                        </h2>
                    </li>
                    <li
                        className='border-l-emerald-500 border-l-8 bg-gradient-to-br from-slate-50 to-gray-300 inline-flex justify-between pr-8 pb-4 hover:cursor-pointer hover:to-emerald-300 transition hover:animate-button-hover'
                        style={{ boxShadow: "5px 5px 0px rgba(0,0,0,0.5)" }}
                        onClick={navOthers}
                    >
                        <p className='p-2 text-justify text-sm text-slate-600'>
                            githubリンク等です
                        </p>
                        <h2 className='min-w-28 text-4xl font-bold self-end justify-items-end'>
                            その他
                        </h2>
                    </li>
                </ul>
                <div
                    className='col-start-9 col-span-4 row-start-1 row-span-2 border-l-red-500 border-l-8  pr-2 flex flex-wrap pb-1 '
                    style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                >
                    <h1
                        className='text-2xl  ml-2'
                        style={{
                            userSelect: "none",
                        }}
                    >
                        トップページ
                    </h1>
                    <p className=' text-xs ml-auto mt-auto'>
                        各コンテンツへのリンクを配置しています
                    </p>
                </div>
            </section>
        </>
    );
};

export default TopPage;
