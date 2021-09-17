import '../footer/style.scss'
import cofen from '../../assets/images/Frame-footer.png'

export default function Footer() {
    return (
        <>
            <div className="bg-white flex  ">
                <div className='container  p-4 md:p-0  sm:pr-40 sm:pl-40'>
                    <div className=" md:flex justify-between md:mt-7  mb-5 mt-3  items-center ">

                        <div className='flex flex-1 items-center md:mr-16 md:mb-0 mb-9'>
                            <div className="flex-1" >
                                <div className="md:w-3/5 text-footer">
                                    CONGRESSO BRASILEIRO DOS CONSELHOS DE ENFERMAGEM</div>
                            </div>
                            <div className="LogoCbcenf ">

                            </div>
                        </div>



                        <div className='md:w-1/3' >
                            <div className='flex'>
                                <div className='flex-1'>
                                    <img src={cofen} alt="" />
                                </div>
                                <div>
                                    <img src={cofen} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}