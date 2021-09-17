import '../programacao/style.scss'
import { useState } from 'react';
export default function Programacao() {
    let [prog, setProg] = useState(1)
    return (
        <>
            <div className='container p-4 md:p-0'>
                <p className='mini-title text-sm'>ACOMPANHE</p>
                <h1 className='title-programacao text-5xl'><b>Programação</b></h1>
                <div className='box-date'>
                    <ul className='flex justify-between color- border-b my-4 h-24'>
                        <li className={`  ${prog === 1 ? 'ative-border' : ''}`}>
                            <button className={`${prog === 1 ? 'bg-white text-center w-20 md:w-64 rounded-2xl h-16 md:text-3xl text-2xl' : 'bg-gray-200 text-center w-20 md:w-64 rounded-2xl h-16 md:text-3xl text-2xl'} `} onClick={() => setProg(1)} >
                                <div className="md:flex justify-center">
                                    <p className="md:mr-2"><b> dia</b> </p>
                                    <b>12</b>
                                </div>
                            </button>
                        </li>
                        <li className={`  ${prog === 2 ? 'ative-border' : ''}`}>
                            <button className={`${prog === 2 ? ' bg-white text-center w-20 md:w-64 rounded-2xl h-16 md:text-3xl text-2xl' : 'bg-gray-200 text-center w-20 md:w-64 rounded-2xl h-16 md:text-3xl text-2xl'} `} onClick={() => setProg(2)}>
                                <div className="md:flex justify-center">
                                    <p className="md:mr-2"><b> dia</b> </p>
                                    <b>12</b>
                                </div>
                            </button>
                        </li>
                        <li className={`  ${prog === 3 ? 'ative-border' : ''}`}>
                            <button className={`${prog === 3 ? ' bg-white text-center w-20 md:w-64 rounded-2xl h-16 md:text-3xl text-2xl' : 'bg-gray-200 text-center w-20 md:w-64 rounded-2xl h-16 md:text-3xl text-2xl'} `} onClick={() => setProg(3)}>
                                <div className="md:flex justify-center">
                                    <p className="md:mr-2"><b> dia</b> </p>
                                    <b>12</b>
                                </div>
                            </button>
                        </li>
                        <li className={`  ${prog === 4 ? 'ative-border' : ''}`}>
                            <button className={`${prog === 4 ? ' bg-white text-center w-20 md:w-64 rounded-2xl h-16 md:text-3xl text-2xl' : 'bg-gray-200 text-center w-20 md:w-64 rounded-2xl h-16 md:text-3xl text-2xl'} `} onClick={() => setProg(4)}>
                                <div className="md:flex justify-center">
                                    <p className="md:mr-2"><b> dia</b> </p>
                                    <b>12</b>
                                </div>
                            </button>
                        </li>

                    </ul>
                    <div className={`  ${prog === 1 ? 'block' : 'hidden'}`}>
                        <h1>Campo 1</h1>
                        <p>alWIRHGLIAQE</p>
                        <p>alWIRHGLIAQE</p>
                    </div>
                    <div className={`  ${prog === 2 ? 'block' : 'hidden'}`}>
                        <h1>Campo 2</h1>
                        <p>alWIRHGLIAQE</p>
                        <p>alWIRHGLIAQE</p>
                    </div>
                    <div className={`  ${prog === 3 ? 'block' : 'hidden'}`}>
                        <h1>Campo 3</h1>
                        <p>alWIRHGLIAQE</p>
                        <p>alWIRHGLIAQE</p>
                    </div>
                    <div className={`  ${prog === 4 ? 'block' : 'hidden'}`}>
                        <h1>Campo 4</h1>
                        <p>alWIRHGLIAQE</p>
                        <p>alWIRHGLIAQE</p>
                    </div>
                </div>
            </div>
        </>

    );
}