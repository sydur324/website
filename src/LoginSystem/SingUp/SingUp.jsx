
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const SingUp = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const {createUser,signInWithGoogle,updateUserProfile} = useContext(AuthContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then(result =>{
            const startUser = result.user
            updateUserProfile(data.name, data.photoURL)
            console.log(startUser)
            navigate(from, {replace:true})
        })
    }
    return (
        <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-14">
            <div className="flex items-center justify-center w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="border lg:w-2/4">
                    <div className="px-20 py-8 text-center bg-[#F46957]">
                        <h2 className=" font-bold text-white text-xl">Sign Up to CONNECT</h2>
                        <p className="py-1 text-[#ebe8e8]">to continue to Westren Education Group</p>
                    </div>
                    <div className="flex flex-col  px-12 py-8 space-y-3">
                        <div className="flex flex-col space-y-1">
                            <label className="font-semibold text-sm text-[#454545]">Your Full Name<sup className="text-[#EF645A]">*</sup></label>
                            <input
                                {...register("name", { required: true })}
                                type="text" className="py-2 px-2 border outline-none" placeholder="Enter Your Name" />
                            {errors.name && <span className='text-[red] text-sm'>Place Enter Name</span>}
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-semibold text-sm text-[#454545]">Your Email<sup className="text-[#EF645A]">*</sup></label>
                            <input
                                {...register("email", { required: true })}
                                type="email" className="py-2 px-2 border outline-none" placeholder="Enter Your Email" />
                            {errors.email && <span className='text-[red] text-sm'>Place Enter Email</span>}
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-semibold text-sm text-[#454545]">Your Institute Name<sup className="text-[#EF645A]">*</sup></label>
                            <input
                                {...register("institute", { required: true })}
                                type="text" className="py-2 px-2 border outline-none" placeholder="Institute ex: university of dhaka" />
                            {errors.institute && <span className='text-[red] text-sm'> Enter Institute Name </span>}
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-semibold text-sm text-[#454545]">Name Of Your Dept.<sup className="text-[#EF645A]">*</sup></label>
                            <input
                                {...register("depatment", { required: true })}
                                type="text" className="py-2 px-2 border outline-none" placeholder="Dept. ex: CSE" />
                            {errors.depatment && <span className='text-[red] text-sm'> Enter Dept. Name </span>}
                        </div>



                        <div className="flex flex-col space-y-1">
                            <label className="font-semibold text-sm text-[#454545]">Name Of Your Position<sup className="text-[#EF645A]">*</sup></label>
                            <input
                                {...register("position", { required: true })}
                                type="text" className="py-2 px-2 border outline-none" placeholder="Position. ex: lecturer " />
                            {errors.position && <span className='text-[red] text-sm'>Your Position </span>}
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-semibold text-sm flex items-center text-[#454545]">Contact Number<sup className="text-[#EF645A]">*</sup> <span className="text-[14px]"> (preferred cell phone number)</span></label>
                            <input
                                {...register("phoneNumber", { required: true })}
                                type="text" className="py-2 px-2 border outline-none" placeholder="ex: +88016..." />
                            {errors.phoneNumber && <span className='text-[red] text-sm'>Your Number </span>}
                        </div>

                        <div className="w-full space-y-1">
                            <label className="font-semibold text-sm flex items-center text-[#454545]">Your Password<sup className="text-[#EF645A]">*</sup></label>
                            <div className="flex items-center justify-center ">
                                <div className="w-full">
                                    <input
                                        {...register("password", { required: true, minLength: 6, maxLength: 20 })}
                                        type={show ? "text" : "password"} className="py-2 px-2 border outline-none w-full" placeholder="Enter Password" />
                                    {errors.password && <span className='text-[red] text-sm'>Enter password 6 number or letter </span>}
                                </div>
                                <p onClick={handleClick} className='ml-[-4vh]  text-xl cursor-pointer hover:text-[red] duration-300'>{show ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible> : <AiOutlineEye></AiOutlineEye>}</p>
                            </div>

                        </div>

                        <input type="submit" className="py-2 px-2 border bg-[#EF645A] hover:bg-[#1B577F] duration-300 font-medium text-white outline-none w-full cursor-pointer" value="Sign Up" />
                        <h2 className="text-center  font-bold">Sign up with</h2>

                        <div className='flex items-center justify-center space-x-2'>
                            <a className='px-2 py-2  bg-[#4B68A8] text-white rounded-full hover:bg-[#3674fa] hover:scale-105 duration-300' href='https://www.facebook.com/' target="_blank"><FaFacebookF /></a>
                            <a className='px-2 py-2  bg-[#D43B78] text-white rounded-full hover:bg-[#ff3787] hover:scale-105 duration-300' href='https://www.instagram.com/' target="_blank"><FaInstagram /></a>
                            <a className='px-2 py-2  bg-[#3098E7] text-white rounded-full hover:bg-[#2ca3ff] hover:scale-105 duration-300' href='https://twitter.com/' target="_blank"><FaTwitter /></a>
                            <a className='px-2 py-2  bg-[#2E66AA] text-white rounded-full hover:bg-[#2f8dff] hover:scale-105 duration-300' href='https://bd.linkedin.com/' target="_blank"><FaLinkedinIn /></a>
                        </div>
                        <p className="text-center font-medium py-2">If you have already account ? Please  <Link to='/login'>
                            <span className="font-bold text-[#EA5F5C] cursor-pointer hover:text-[#1B577F] duration-300">Log In</span>
                        </Link> Now</p>
                    </div>


                </form>
            </div>
        </div>
    );
};
export default SingUp;