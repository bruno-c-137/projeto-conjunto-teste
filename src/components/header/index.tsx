import '../header/style.scss'


export default function Header() {
    return (
        <>
            <div className="bg-white">
                <div className="container">
                    <div className='flex items-center justify-around h-24'>
                        <div className='logo-cbcenf-header'> </div>
                        <div className='menu-header'>
                            <ul>
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