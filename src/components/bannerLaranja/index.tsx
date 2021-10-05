import Balao1 from "../../assets/images/balão1.png";
import Balao2 from "../../assets/images/balão2.png";
import Balao3 from "../../assets/images/balão3.png";

import "../../components/bannerLaranja/style.scss"

export default function BannerLaranja(){
    return(
        <>
        
        <div className='box-laranja my-36 relative'>
                <div className='box-ims'>
                    <img className='absolute balao1' src={Balao1} alt="" />
                    <img className='absolute balao2 hidden md:block' src={Balao2} alt="" />
                    <img className='absolute balao3' src={Balao3} alt="" />
                </div>
                <div className='container p-4 md:p-0 my-9 md:flex justify-around'>
                    <div className='div-laranja-text my-36 md:w-96 md:my-10 ml-10 text-4xl md:text-5xl '>
                        <p className='box-laranja-text py-16 '><b>
                            Participe do 
                            maior evento 
                            da Enfermagem na
                            América <br className='md:hidden' /> Latina
                        </b> </p>
                    </div>
                    <div className='inscrevaSe-div -mt-40 sm:mb-10 md:mt-40 '>
                        <a className='inscrevaSe-a'><b>INSCREVA-SE AGORA</b></a>
                    </div>
                </div>
            </div>
        </>
    )
}


