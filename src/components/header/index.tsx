import '../header/style.scss'
import { useState } from 'react';

export default function Header() {
    const [openBot, setOpenBot] = useState(false)

    return (
        <>
            <div className="bg-white">
                <div className="container">
                    <div className='md:flex items-center justify-around h-24'>
                        <div className='logo-cbcenf-header'> </div>
                        <div className={`md:hidden md:mb-4 mt-4 ${openBot && 'ativado'}`}  >
                            <div className="flex  md:p-0">
                                <button className="" onClick={() => setOpenBot(!openBot)}>
                                    <span className="hamburguer" ></span>
                                </button>
                            </div>
                        </div>
                        <div className={`mt-16 md:mt-0 md:block menu-header ${openBot ? "block" : "hidden"}`}>
                            <ul className="md:flex">
                                <li> <a href="#">inicio</a>  </li>
                                <li> <a href="#">Sobre</a>  </li>
                                <li><a href="#">Programação</a>  </li>
                                <li><a href="#">Noticias</a>  </li>
                                <li><a href="#">Redes Sociais</a> </li>
                            </ul>
                        </div>
                        <div className='logo-cofen-header'>

                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}