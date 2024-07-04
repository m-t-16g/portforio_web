import { FaCaretSquareUp, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const nav = useNavigate();
    const lnk = {
        top() {
            nav("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
    };
    return (
        <footer className='w-full h-20 pt-4 bg-black'>
            <div className='pl-8 mx-auto xl:w-4/6 text-white text-sm flex flex-wrap'>
                <p
                    className='mr-6 hover:text-red-500 flex flex-wrap items-center cursor-pointer'
                    onClick={lnk.top}
                >
                    トップへ戻る
                    <span className='ml-0.5 pt-0.5'>
                        <FaCaretSquareUp />
                    </span>
                </p>
                <a
                    className='cursor-pointer'
                    href='https://github.com/m-t-16g/portforio_web'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <p className='hover:text-sky-500 flex flex-wrap items-center'>
                        ソース(Github)
                        <span className='ml-1 pt-1 '>
                            <FaGithub />
                        </span>
                    </p>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
