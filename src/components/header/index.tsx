import '../header/style.scss'
import { useState } from 'react';
import cbcenf from '../../assets/images/cbcenf.png'
import LogoCbcenfHeader from "../../assets/images/cbcenf.png"
import logoCofenHeader from "../../assets/images/cofen.png"
export default function Header() {
    const [openBot, setOpenBot] = useState(false)

    return (
        <>
            <div className="bg-white">
                <div className="container">
                    <div className='md:flex items-center justify-between h-24'>
                        <div className="hidden md:block">
                            <img src={LogoCbcenfHeader} alt="" />
                        </div>
                        <div className={`md:hidden md:mb-4 mt-4 ${openBot && 'ativado'}`}  >
                            <div className="flex justify-around md:p-0">
                                <div className='logo-cbcenfs'>
                                    <img src={cbcenf} width='260px' alt="" />
                                </div>
                                <button className="" onClick={() => setOpenBot(!openBot)}>
                                    <span className="hamburguer" ></span>
                                </button>
                            </div>
                        </div>
                        <div className={`mt-10 md:mt-0 relative z-10 h-72 md:h-full md:block menu-header ${openBot ? "block" : "hidden"}`}>
                            <ul className="md:flex">
                                <li> <a href="#">inicio</a>  </li>
                                <li> <a href="#">Sobre</a>  </li>
                                <li><a href="#">Programação</a>  </li>
                                <li><a href="#">Noticias</a>  </li>
                                <li><a href="#">Redes Sociais</a> </li>
                            </ul>
                        </div>
                        <div className="hidden md:block">
                            <img src={logoCofenHeader} alt="" />

                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}