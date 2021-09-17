import '../programacao/style.scss'

export default function Programacao() {
    return (
        <>
            <div className='container'>
                <p className='mini-title text-sm'>ACOMPANHE</p>
                <h1 className='title-programacao text-5xl'><b>Programação</b></h1>
                <div className='box-date'>
                    <ul className='flex justify-around color- border-b my-4 h-24'>
                        <li >
                            <button className='bg-gray-200 text-center w-64 rounded-2xl h-16 text-3xl'>
                                <b>dia 12</b>
                            </button>
                        </li>
                        <li >
                            <button className='bg-gray-200 text-center w-64 rounded-2xl h-16 text-3xl'>
                                <b>dia 13</b>
                            </button>
                        </li>
                        <li >
                            <button className='bg-gray-200 text-center w-64 rounded-2xl h-16 text-3xl'>
                                <b>dia 14</b>
                            </button>
                        </li>
                        <li >
                            <button className='bg-gray-200 text-center w-64 rounded-2xl h-16 text-3xl'>
                                <b>dia 15</b>
                            </button>
                        </li>

                    </ul>
                    <div>
                        <p>alWIRHGLIAQE</p>
                        <p>alWIRHGLIAQE</p>
                    </div>
                </div>
            </div>
        </>

    );
}