import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className='ml-auto mr-auto py-3 bg-slate-100 bg-opacity-50'>
                <nav>
                    <ul className='grid grid-cols-6 ml-auto mr-auto max-w-[1280px]  text-gray-800 '>
                        <Link to='/'>
                            <li className='py-1 px-1  border-b-2 border-transparent  hover:font-bold hover:border-gray-400'>
                                トップ
                            </li>
                        </Link>
                        <Link to='products'>
                            <li className='py-1 px-1 border-b-2 border-transparent  hover:font-bold hover:border-gray-400'>
                                制作物
                            </li>
                        </Link>
                        <Link to='skills'>
                            <li className='py-1 px-1 border-b-2 hover:font-bold border-transparent hover:border-gray-400'>
                                技術
                            </li>
                        </Link>
                        <Link to='others'>
                            <li className='py-1 px-1 border-b-2 hover:font-bold border-transparent hover:border-gray-400'>
                                その他
                            </li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
