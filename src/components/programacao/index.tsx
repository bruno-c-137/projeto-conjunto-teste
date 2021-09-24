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
                            <button className={`${prog === 1 ? 'active-transition border -sólido border-gray-300 bg-white text-center w-16 md:w-64 rounded-xl h-16 md:text-3xl text-2xl' : 'bg-gray-100 border -sólido border-gray-300 text-center w-16 md:w-64 rounded-xl h-16 md:text-3xl text-2xl'} `} onClick={() => setProg(1)} >
                                <div className="md:flex justify-center">
                                    <p className="md:mr-2"><b> dia</b> </p>
                                    <b>27</b>
                                </div>
                            </button>
                        </li>
                        <li className={`  ${prog === 2 ? 'ative-border' : ''}`}>
                            <button className={`${prog === 2 ? 'active-transition border -sólido border-gray-300 bg-white text-center w-16 md:w-64 rounded-xl h-16 md:text-3xl text-2xl' : 'bg-gray-100 border -sólido border-gray-300 text-center w-16 md:w-64 rounded-xl h-16 md:text-3xl text-2xl'} `} onClick={() => setProg(2)}>
                                <div className="md:flex justify-center">
                                    <p className="md:mr-2"><b> dia</b> </p>
                                    <b>28</b>
                                </div>
                            </button>
                        </li>
                        <li className={`  ${prog === 3 ? 'ative-border' : ''}`}>
                            <button className={`${prog === 3 ? 'active-transition border -sólido border-gray-300 bg-white text-center w-16 md:w-64 rounded-xl h-16 md:text-3xl text-2xl' : 'bg-gray-100 border -sólido border-gray-300 text-center w-16 md:w-64 rounded-xl h-16 md:text-3xl text-2xl'} `} onClick={() => setProg(3)}>
                                <div className="md:flex justify-center">
                                    <p className="md:mr-2"><b> dia</b> </p>
                                    <b>29</b>
                                </div>
                            </button>
                        </li>
                        <li className={`  ${prog === 4 ? 'ative-border' : ''}`}>
                            <button className={`${prog === 4 ? 'active-transition border -sólido border-gray-300 bg-white text-center w-16 md:w-64 rounded-xl h-16 md:text-3xl text-2xl' : 'bg-gray-100 border -sólido border-gray-300 text-center w-16 md:w-64 rounded-xl h-16 md:text-3xl text-2xl'} `} onClick={() => setProg(4)}>
                                <div className="md:flex justify-center">
                                    <p className="md:mr-2"><b> dia</b> </p>
                                    <b>30</b>
                                </div>
                            </button>
                        </li>

                    </ul>
                    <div className={`  ${prog === 1 ? 'block bg-gray-200 rounded-xl' : 'hidden'}`}>
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-400 text-white ">
                                <tr>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">antemão</td>
                                    <td className="w-1/3 text-left py-3 px-4">senhora mit</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">622322662</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="w-1/3 text-left py-3 px-4">seu alind</td>
                                    <td className="w-1/3 text-left py-3 px-4">Jcabin gol</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">622322662</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">Oseu pauer</td>
                                    <td className="w-1/3 text-left py-3 px-4">Wilinms ping</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">622322662</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="w-1/3 text-left py-3 px-4">Isabella menders</td>
                                    <td className="w-1/3 text-left py-3 px-4">Bpou pou</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">622322662</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">Oseu pauer</td>
                                    <td className="w-1/3 text-left py-3 px-4">Wilinms ping</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">622322662</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={`  ${prog === 2 ? 'block' : 'hidden'}`}>
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-400 text-white">
                                <tr>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">Lian</td>
                                    <td className="w-1/3 text-left py-3 px-4">Smith</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">6222662</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="w-1/3 text-left py-3 px-4">Emma</td>
                                    <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">62662</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                                    <td className="w-1/3 text-left py-3 px-4">Williams</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">6223222</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                                    <td className="w-1/3 text-left py-3 px-4">Brown</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">2322662</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={`  ${prog === 3 ? 'block' : 'hidden'}`}>
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-400 text-white">
                                <tr>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">Liaasn</td>
                                    <td className="w-1/3 text-left py-3 px-4">Smith</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">6223221312</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="w-1/3 text-left py-3 px-4">Easdaa</td>
                                    <td className="w-1/3 text-left py-3 px-4">Johasdasdson</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">622123123662</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">asdser</td>
                                    <td className="w-1/3 text-left py-3 px-4">Wilasdasms</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">6212312362</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="w-1/3 text-left py-3 px-4">Isasdalla</td>
                                    <td className="w-1/3 text-left py-3 px-4">Brasdasdwn</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">6215231262</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={`  ${prog === 4 ? 'block' : 'hidden'}`}>
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-400 text-white">
                                <tr>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">Lfrbn</td>
                                    <td className="w-1/3 text-left py-3 px-4">Smith</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">6223567562</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="w-1/3 text-left py-3 px-4">Easvgma</td>
                                    <td className="w-1/3 text-left py-3 px-4">Johnfbeeasfn</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">62567662</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                                <tr>
                                    <td className="w-1/3 text-left py-3 px-4">Oladfvbtar</td>
                                    <td className="w-1/3 text-left py-3 px-4">Wafvrrgams</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">6223567562</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="w-1/3 text-left py-3 px-4">Istara</td>
                                    <td className="w-1/3 text-left py-3 px-4">arebsfwn</td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">6267558622662</a></td>
                                    <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="#">jonsmith@mail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    );
}