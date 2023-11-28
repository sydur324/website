
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { HiMiniXMark } from "react-icons/hi2";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const PreviweInfo = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="hover:text-[red] duration-300">
                <button
                    type="button"
                    onClick={openModal}
                    className=""
                >
                    PREVIEW YOUR INFO
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl rounded transform overflow-hidden  bg-white px-6 py-8 text-left align-middle shadow-xl transition-all">

                                    <div>
                                        <h2 className='font-medium text-xl text-[#F46957]'>
                                            Check your Article information before submision
                                        </h2>

                                        <div className='my-4 space-y-2'>
                                            <div>
                                                <p className='font-bold'>Article Title:</p>
                                                <h2 className='font-semibold py-1'>The Impact of Supply Chain Management Practices on Competitive Advantage</h2>
                                            </div>

                                            <div>
                                                <p className='font-bold py-1'>Coorisponding Author:</p>
                                                <h2 className='font-semibold'>Alistair R Anderson</h2>
                                                <p>Aberdeen Business School</p>
                                            </div>

                                            <div>
                                                <p className='font-bold py-1'>Other Author's:</p>

                                                <div className='flex items-center lg:space-x-4 flex-wrap gap-4'>
                                                    <div>
                                                        <h2 className='font-semibold'>Anthony Goerzen</h2>
                                                        <p>National University </p>
                                                    </div>

                                                    <div>
                                                        <h2 className='font-semibold'>Basel Saleh</h2>
                                                        <p>Lander University</p>
                                                    </div>

                                                    <div>
                                                        <h2 className='font-semibold'>Dr. Alexandros G.</h2>
                                                        <p>University of Sheffield</p>
                                                    </div>
                                                </div>

                                            </div>

                                            <div>
                                                <p className='font-bold'>Name of Journal</p>
                                                <p>International Journal of Business and Social Science</p>
                                            </div>

                                            <div>
                                                <p className='font-bold'>Abstract</p>
                                                <p className='py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Quia, delectus! Voluptatem, perspiciatis soluta dolore,
                                                    deleniti suscipit aut velit maiores, sunt blanditiis dignissimos
                                                    ipsam voluptas molestiae? Repudiandae nulla nihil et, nostrum odit
                                                    similique minus accusantium rem? Magni, voluptatum a. Maiores, corporis
                                                    nam aspernatur in laudantium necessitatibus totam quis veritatis porro aperiam
                                                    incidunt dolorem quod et assumenda.
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                    <div>
                                        <p className='text-sm font-bold text-[#F96E54]'>If Every thing its okk please submit</p>
                                    </div>

                                    <div className="top-0 right-0 absolute mx-2">
                                        <button
                                            className="px-2 py-2 bg-[#F96E54] text-white"
                                            type="button"
                                            onClick={closeModal}
                                        >
                                            <HiMiniXMark />
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
};
export default PreviweInfo;