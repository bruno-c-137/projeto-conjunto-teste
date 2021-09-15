
import "./style.scss";

export default function BannerDesktop1() {
    return (
        <>
            <div className="md:relative md:flex items-center  md:h-full ">
                <div className="img1 w-full  height-banner3 md:absolute  top-0"></div>
                <div className="container md:relative p-4 md:p-0">
                    <p className="banner-title text-xl md:text-2xl">#ConexãoCBCENF</p>
                    <p className="banner-text text-2xl md:text-4xl lg:w-2/5">Juntos no maior evento da Enfermagem na América Latina</p>
                </div>
            </div>
        </>
    );
}