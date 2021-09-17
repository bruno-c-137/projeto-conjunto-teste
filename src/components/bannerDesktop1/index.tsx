
import "./style.scss";

export default function BannerDesktop1() {
    return (
        <>
            <div>
                <div className="md:relative md:flex items-center">
                    <div className=" height-banner3">
                        <div className="img1  w-full  md:absolute height-banner3   top-0"></div></div>
                    <div className="container md:relative  p-4 md:p-0">
                        <p className="banner-title text-xl md:text-2xl">#ConexãoCBCENF</p>
                        <p className="banner-text text-2xl md:text-4xl md:w-2/5">Juntos no maior evento da Enfermagem na América Latina</p>
                        <div className="mt-3">
                            <a className="button-header" href="#">INSCREVA-SE</a>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}