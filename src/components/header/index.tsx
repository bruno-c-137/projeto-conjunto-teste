import '../header/style.scss'


export default function Header() {
    return (
        <>
            <div className='header-container'>
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
        </>

    );
}