import { useNavigate } from "react-router-dom";

const Header = () => {
    const nav = useNavigate();
    const lnk = {
        top() {
            nav("/");
        },
        product() {
            nav("/products");
        },
        skill() {
            nav("/skills");
        },
    };
    const listStyle = {
        red: "py-1 px-2  border-l-4  border-b-transparent border-b-2 border-l-red-600  hover:font-bold hover:border-b-red-600 transition",
        amber: "py-1 px-2  border-l-4  border-b-transparent border-b-2 border-l-amber-600  hover:font-bold hover:border-b-amber-600 transition",
        lime: "py-1 px-2  border-l-4  border-b-transparent border-b-2 border-l-lime-600  hover:font-bold hover:border-b-lime-600 transition",
        emerald:
            "py-1 px-2  border-l-4  hover:border-b-2 border-l-emerald-600  hover:font-bold hover:border-b-emerald-600 transition",
    };
    return (
        <>
            <header className='ml-auto mr-auto py-3 bg-slate-100 bg-opacity-50 sticky top-0 hover:bg-opacity-95'>
                <nav>
                    <ul className='grid grid-cols-4 md:grid-cols-6 ml-auto mr-auto  xl:w-4/6 px-4 text-gray-800 gap-2'>
                        <li className={listStyle.amber} onClick={lnk.product}>
                            制作物
                        </li>

                        <li className={listStyle.lime} onClick={lnk.skill}>
                            技術
                        </li>

                        <li
                            className={`col-start-4 md:col-start-6 col-end-7 ${listStyle.red}`}
                            onClick={lnk.top}
                        >
                            トップ
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
