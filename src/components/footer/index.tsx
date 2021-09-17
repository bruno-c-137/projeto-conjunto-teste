import '../footer/style.scss'
import cbcenf from '../../assets/images/cbcenf.png'
import cofen from '../../assets/images/Frame-footer.png'

export default function Footer() {
    return (
        <>
            <div className='footer-container'>


                <div className='menu-footer'>
                    <div className='logo-cbcenf-mobile'></div>
                    <a href="#">CONGRESSO BRASILEIRO DOS CONSELHOS DE ENFERMAGEM </a>
                </div>
                <div className='logo-cbcenf-footer'>
                    <img src={cbcenf} alt="" />
                </div>

                <div className='logos-baixo-footer'>
                    <div className='logo-cofenn-footer mx-4'>
                        <img src={cofen} alt="" />
                    </div>
                    <div className='logo-cofen-footer'>
                        <img src={cofen} alt="" />
                    </div>
                </div>


            </div>
            <div className='rodape'></div>
        </>

    );
}