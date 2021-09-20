import '../../components/noticia/style.scss'
import ImgNoticia1 from "../../assets/images/img1Noticias.png"
import ImgNoticia2 from "../../assets/images/img2Noticias.png"
export default function Noticia() {
    return (
        <>
            <div className="mb-10 mt-10">
                <div className="container ">
                    <p className="text-noticia">ÚLTIMAS</p>
                    <h1 className="text-title">Notícias</h1>

                    <div className="flex">
                        <div className="w-1/2 mr-5 relative">

                            <div className="absolute">
                                <img className="w-full" src={ImgNoticia1} alt="" />
                                <div className="p-6 bg-white">
                                    <p className="text-box-noticia">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since .</p>
                                </div>
                            </div>
                            <div className="data-box-noticia relative pl-3 pr-3 ">
                                <p>
                                    27 de set
                                </p>

                            </div>

                        </div>
                        <div className="flex w-1/2">
                            <div className="mr-5">
                                <img className="w-full" src={ImgNoticia2} alt="" />
                                <div className="p-6 bg-white">
                                    <p className="text-box-noticia">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since .</p>
                                </div>
                            </div>
                            <div>
                                <img className="w-full" src={ImgNoticia2} alt="" />
                                <div className="p-6 bg-white">
                                    <p className="text-box-noticia">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}