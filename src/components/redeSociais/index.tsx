import "./style.scss";
import Pessoa1 from "../../assets/images/pessoa1.png"
import { ReactComponent as Rede1 } from "../../assets/images/component-rede.svg"
import { ReactComponent as Rede2 } from "../../assets/images/component-rede1.svg"
import { ReactComponent as Rede3 } from "../../assets/images/component-rede2.svg"
import { ReactComponent as Rede4 } from "../../assets/images/component-rede3.svg"
export default function RedeSociais() {
    return (
        <>
            <div className="container">
                <p className="text-noticia">COMPARTILHE</p>
                <div className="md:flex md:mb-8">
                    <h1 className="text-title mr-24">Redes Socias</h1>

                    <div className="hidden md:flex">
                        <div>
                            <Rede1 />
                        </div>
                        <div className="mr-10">
                            <Rede2 />
                        </div>
                        <div className="self-end mr-5">
                            <Rede3 />
                        </div>
                        <div>
                            <Rede4 />
                        </div>
                    </div>
                </div>
                <p className="text-noticia">TWITTER</p>

                <div className="flex">

                    <div className="w-1/3">
                        <div className="flex bg-white p-8 rounded-2xl">
                            <div className="flex-2 mr-5">
                                <img src={Pessoa1} alt="" />

                            </div>
                            <div className="flex-1">
                                <p className="text-box-noticia">
                                    <p><b> Nome Sobrenome</b></p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever sinc.
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="w-1/3">

                    </div>
                    <div className="w-1/3">

                    </div>
                </div>
            </div>
        </>
    );
}