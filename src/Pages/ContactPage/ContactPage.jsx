import './ContactPage.css'
const ContactPage = () => {

    return (
        <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-6">
            <div className='grid lg:grid-cols-2 gap-6'>

                <div className='bg-[#F9F9F9] px-6 py-8'>
                    <div className=''>
                        <h2 className='text-xl font-bold'>Send Us a Message</h2>
                        <p className='py-2'>Your email address will not be published. All the fields are required.</p>
                    </div>

                    <div className='py-4'>
                        <form className='space-y-3'>
                            <div className='w-full'>
                                <input className='w-full py-2 px-4 outline-none border-2' type="text" placeholder='Your Name' />
                            </div>

                            <div>
                                <input className='w-full py-2 px-4 outline-none border-2' type="text" placeholder='Your Email' />
                            </div>

                            <div className='flex gap-2'>

                                <div className='w-full'>
                                    <select className='w-full py-2 px-4 outline-none border-2 text-[#505050]'>
                                        <option value="">WEG Member</option>
                                        <option value="">Yes</option>
                                        <option value="">No</option>
                                    </select>
                                </div>

                                <div className='w-full'>
                                    <input className='w-full py-2 px-4 outline-none border-2' type="text" placeholder='Your Country' />
                                </div>
                            </div>

                            <div>
                                <textarea className='w-full py-2 px-4 outline-none border-2 text-[#505050]' name="" id="" cols="30" rows="6">
                                    Your Message
                                </textarea>
                            </div>

                            <div className=''>
                                <input className='cursor-pointer px-10 py-3 bg-[#F46957] hover:bg-[#2D5A7C] duration-300 font-medium text-white' type="submit" value="SUBMIT" />
                            </div>

                        </form>
                    </div>
                </div>

                <div className='bg-[#F9F9F9] px-6 py-8'>
                        <h2 className='text-xl font-semibold'>Contact Information</h2>
                        <div>
                             <p>Mirpur-1, Road No-22, House No-08</p>
                             <p>Dhaka, Bangladesh</p>
                        </div>

                        <div>
                             <h2>We're Available 24/ 7. Call Now.</h2>
                             <div>
                                  <p><span></span><span>(888) 456-2790</span></p>
                                  <p><span></span><span>(121) 255-53333</span></p>
                             </div>
                        </div>
                </div>

            </div>
        </div>
    );
};
export default ContactPage;