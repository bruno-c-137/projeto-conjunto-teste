import '../../components/noticia/style.scss'
import ImgNoticia1 from "../../assets/images/img1Noticias.png"
import ImgNoticia2 from "../../assets/images/img2Noticias.png"
import ImgNoticia3 from "../../assets/images/img3Noticias.png"
import { ReactComponent as Vector1 } from "../../assets/images/Vector.svg"
import { ReactComponent as Vector2 } from "../../assets/images/Vector1.svg"
import { ReactComponent as Vector3 } from "../../assets/images/Vector2.svg"
import { ReactComponent as Vector4 } from "../../assets/images/Vector3.svg"
export default function Noticia() {
    return (
        <>
            <div className="md:mb-10 md:mt-10 p-4 md:p-0">
                <div className="container ">
                    <p className="text-noticia">ÚLTIMAS</p>
                    <div className="md:flex md:justify-between md:mb-8">
                        <h1 className="text-title">Notícias</h1>
                        <div className="hidden md:flex">
                            <div className="self-end mr-5">
                                <Vector1 />
                            </div>
                            <div className="mr-10">
                                <Vector2 />
                            </div>
                            <div>
                                <Vector3 />
                            </div>
                            <div>
                                <Vector4 />
                            </div>
                        </div>
                    </div>

                    <div className="md:flex ">
                        <div className="md:w-1/2 md:mr-5 relative mb-10 md:mb-0">
                            <div className="data-box-noticia z-10 absolute pl-3 pr-3 ">
                                <p>
                                    27 de set
                                </p>

                            </div>

                            <div>
                                <img className="w-full" src={ImgNoticia1} alt="" />
                                <div className="p-6 bg-white rounded-b-2xl">
                                    <p className="text-box-noticia">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since .</p>
                                </div>
                            </div>


                        </div>
                        <div className="md:flex  md:w-1/2 relative">
                            <div className="md:mr-5  mb-10 md:mb-0">
                                <div className="data-box-noticia z-10 absolute pl-3 pr-3 ">
                                    <p>
                                        27 de set
                                    </p>

                                </div>
                                <img className="w-full" src={ImgNoticia3} alt="" />
                                <div className="p-6 bg-white rounded-b-2xl">
                                    <p className="text-box-noticia">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since .</p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="data-box-noticia z-10 absolute pl-3 pr-3 ">
                                    <p>
                                        27 de set
                                    </p>

                                </div>
                                <img className="w-full" src={ImgNoticia2} alt="" />
                                <div className="p-6 bg-white rounded-b-2xl">
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