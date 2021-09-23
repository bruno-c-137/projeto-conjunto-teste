
import BannerDesktop1 from "components/bannerDesktop1";
import Frame1 from "../../assets/images/Frame.png"
import Frame2 from "../../assets/images/Frame(1).png"
import Frame3 from "../../assets/images/Frame(2).png"
import Balao1 from "../../assets/images/balão1.png"
import Balao2 from "../../assets/images/balão2.png"
import Balao3 from "../../assets/images/balão3.png"
import '../../pages/desktop1/style.scss'
import Programacao from "components/programacao";
import Noticia from "components/noticia";
import RedeSociais from "components/redeSociais";



export default function Desktop1() {

    return (
        <>
            <BannerDesktop1 />
            <div className='container-sobre my-12'>
                <div className='container md:flex justify-around'>
                    <div className='cont-sobre m-5'>
                        <h1 className='text-5xl title-sobre'><b> Sobre</b></h1>
                        <p className='traço-bd'></p>
                        <p className='w-80 md:w-96'>
                            O Congresso Brasileiro dos Conselhos
                            de Enfermagem (CBCENF) é o maior evento
                            científico da saúde na América Latina,
                            reunindo profissionais da Enfermagem,
                            pesquisadores e acadêmicos do Brasil
                            inteiro. Com o tema central
                            “Protagonismo e cuidado na Enfermagem:
                            cuidado, transdisciplinaridade e
                            politização”, o evento será realizado
                            pela primeira vez no formato virtual,
                            com transmissão sincrônica para todas
                            as regiões do país, nos dias 27, 28,
                            29 e 30 de setembro.
                        </p>
                    </div>
                    <div className='cont-video relative my-16'>
                        <div className='z-10 relative box-video w-96 bg-gray-200 h-64 md:rounded-3xl'>
                            {/* video */}
                        </div>
                        <img className='frame1 hidden md:block md:z-0 md:absolute' src={Frame1} alt="" />
                        <img className='frame2 hidden md:block md:z-0 md:absolute' src={Frame2} alt="" />
                        <img className='frame3 hidden md:block md:z-0 md:absolute' src={Frame3} alt="" />
                    </div>

                </div>
            </div>
            <Programacao />
            <Noticia />

          
            <div className="flex justify-center mb-10">
                <a className="button-noticia" href="#">mais notícias</a>
            </div>
            <RedeSociais />
  <div className='box-laranja my-36 relative'>
                <div className='box-ims'>
                    <img className='absolute balao1 ' src={Balao1} alt="" />
                    <img className='absolute balao2 hidden md:block' src={Balao2} alt="" />
                    <img className='absolute balao3' src={Balao3} alt="" />
                </div>
                <div className='container my-9 md:flex justify-around'>
                    <div className='div-laranja-text md:w-96 my-36 text-5xl'>
                        <p className='box-laranja-text'><b>
                            Participe do
                            maior evento
                            da Enfermagem na
                            América Latina
                        </b> </p>
                    </div>
                    <div className=' my-auto'>
                        <a className='bg-green-500 text-white py-7 md:px-24 md:text-3xl rounded-2xl'><b>INSCREVA-SE AGORA</b></a>
                    </div>
                </div>

            </div>
        </>

    );
}