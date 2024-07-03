import { Link } from "react-router-dom";

const Header = () => {
    const listStyle = {
        red: "py-1 px-2  border-l-4  border-b-transparent border-b-2 border-l-red-600  hover:font-bold hover:border-b-red-600 transition",
        amber: "py-1 px-2  border-l-4  border-b-transparent border-b-2 border-l-amber-600  hover:font-bold hover:border-b-amber-600 transition",
        lime: "py-1 px-2  border-l-4  border-b-transparent border-b-2 border-l-lime-600  hover:font-bold hover:border-b-lime-600 transition",
        emerald:
            "py-1 px-2  border-l-4  hover:border-b-2 border-l-emerald-600  hover:font-bold hover:border-b-emerald-600 transition",
    };
    return (
        <>
            <header className='ml-auto mr-auto py-3 bg-slate-100 bg-opacity-50'>
                <nav>
                    <ul className='grid grid-cols-6 ml-auto mr-auto max-w-[1280px] px-4 text-gray-800 gap-2'>
                        <Link to='/'>
                            <li className={listStyle.red}>トップ</li>
                        </Link>
                        <Link to='products'>
                            <li className={listStyle.amber}>制作物</li>
                        </Link>
                        <Link to='skills'>
                            <li className={listStyle.lime}>技術</li>
                        </Link>
                        <Link to='others'>
                            <li className={listStyle.emerald}>その他</li>
                        </Link>
                        {/* <li className='col-start-6 col-end-7'>icon</li> */}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
