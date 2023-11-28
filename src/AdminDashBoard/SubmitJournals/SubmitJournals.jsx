import { useState } from "react";
import PreviweInfo from "../../UserDashBoard/PreviweInfo/PreviweInfo";
import TermsAndCondition from "../../UserDashBoard/TermsAndCondition/TermsAndCondition";
import { useForm } from "react-hook-form";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const SubmitJournals = () => {
    const [inputLists, setInputLists] = useState([])
    const handleAdd = () => {
        setInputLists([...inputLists, ''])

    }
    // const handleRemove = (index) => {
    //     const newInputValues = [...inputLists];
    //     newInputValues.splice(index, 1);
    //     setInputLists(newInputValues);
    // };

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="px-12 py-8 w-3/5">
            <div className="flex items-center space-x-2 bg-[#F46957] py-2 px-4">
                <p className="text-xl text-white"><MdOutlineRemoveCircleOutline /></p>
                <p className="text-[#fff] text-sm font-bold">For Submit Your Article Please Completed Your Profile</p>
            </div>

            <div className="border my-8">
                <div className="text-center py-4 bg-[#EF645A] text-white">
                    <h2 className="text-xl font-bold">Article Information</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="py-8 px-6 space-y-3">
                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-semibold">Title:</label>
                        <input {...register("title", { required: true })} className="py-2 px-2 outline-none border" type="text" placeholder="Enter Article Title.." />
                        {errors.title && <span className='text-[red] text-sm'>place Enter Title</span>}
                    </div>

                    <div>
                        <div className="py-2 px-2 bg-[#f4695718] text-[#EA5F5C] font-bold">
                            <h2>Author(s)</h2>
                        </div>

                        <div className="space-y-2 py-2">
                            <label className="font-bold">Author 01</label>
                            <div className="space-y-2">
                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Author Name:</label>
                                    <div className="w-full">
                                        <input {...register("firstAuthor", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Enter Author Name.." />
                                        {errors.firstAuthor && <span className='text-[red] text-sm'>One author name must be required</span>}
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Institute/University:</label>
                                    <div className="w-full">
                                        <input {...register("institute", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Institute or University Name..." />
                                        {errors.institute && <span className='text-[red] text-sm'>institute/university name must be required</span>}
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Institutional Position</label>
                                    <div className="w-full">
                                        <input {...register("position", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Institutional Position.." />
                                        {errors.position && <span className='text-[red] text-sm'>institutional position must be required</span>}
                                    </div>
                                </div>


                                <div className="flex space-x-2">
                                    <div className="flex flex-col space-y-1 w-full">
                                        <label className="text-sm font-semibold">Add First Email:</label>
                                        <div className="w-full">
                                            <input {...register("firstEmail", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Enter First Email.." />
                                            {errors.firstEmail && <span className='text-[red] text-sm'>first Email must be required</span>}
                                        </div>
                                    </div>

                                    <div className="flex flex-col space-y-1 w-full">
                                        <label className="text-sm font-semibold">Add Second Email (optional):</label>
                                        <div className="w-full">
                                            <input {...register("seconEmail")} className="px-2 py-2 border outline-none w-full" type="text" placeholder="Enter Second Email.." />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="py-2 px-2 bg-[#f4695718] text-[#EA5F5C] font-bold">
                            <h2>Corrisponding Author:</h2>
                        </div>

                        <div className="space-y-2 py-2">

                            <div className="space-y-2">
                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Author Name:</label>
                                    <div className="w-full">
                                        <input {...register("corrisponding", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Enter Author Name.." />
                                        {errors.corrisponding && <span className='text-[red] text-sm'>corrisponding name must be required</span>}
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Institute/University:</label>
                                    <div className="w-full">
                                        <input {...register("cInstitute", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Institute or University Name..." />
                                        {errors.cInstitute && <span className='text-[red] text-sm'>institute/university name must be required</span>}
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Institutional Position</label>
                                    <div className="w-full">
                                        <input {...register("cPosition", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Institutional Position.." />
                                        {errors.cPosition && <span className='text-[red] text-sm'>institutional position must be required</span>}
                                    </div>
                                </div>


                                <div className="flex space-x-2">
                                    <div className="flex flex-col space-y-1 w-full">
                                        <label className="text-sm font-semibold">Add First Email:</label>
                                        <div className="w-full">
                                            <input {...register("cFirstEmail", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Enter First Email.." />
                                            {errors.cFirstEmail && <span className='text-[red] text-sm'>First Email must be required</span>}
                                        </div>
                                    </div>

                                    <div className="flex flex-col space-y-1 w-full">
                                        <label className="text-sm font-semibold">Add Second Email (optional):</label>
                                        <input {...register("cSecondEmail")} className="px-2 py-2 border outline-none" type="text" placeholder="Enter Second Email.." />
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Contact Number</label>
                                    <div className="w-full">
                                        <input {...register("cNumber", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Your Number.." />
                                        {errors.cNumber && <span className='text-[red] text-sm'>contact number  required</span>}
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-semibold">Name of Journal:</label>
                        <select {...register("JournalName", { required: true })} className="py-2 px-2 outline-none border text-[#6c6b6b]">
                            <option>Select Journal</option>
                            <option value="ABC">ABC</option>
                            <option value="BCD">BCD</option>
                            <option value="CDE">CDE</option>
                            <option value="DEF">DEF</option>
                            <option value="EFG">EFG</option>
                            <option value="FGH">FGH</option>
                            <option value="GHI">GHI</option>
                            <option value="HIJ">HIJ</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.JournalName && <span className='text-[red] text-sm'>Journal name must be required</span>}
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-semibold">Abstract:</label>
                        <textarea  {...register("abstract", { required: true })} className="py-2 px-2 outline-none border" cols="30" rows="4" placeholder="Write your abstract"></textarea>
                        {errors.abstract && <span className='text-[red] text-sm'>Abstract must be required</span>}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-semibold">Upload Pepar/ (Ms Word/PDF)</label>
                        <input {...register("pdffile", { required: true })} className="py-2 px-2 outline-none border" type="file" name="" id="" placeholder="Upload PDF OR MS File.." />
                        {errors.pdffile && <span className='text-[red] text-sm'>File must be required</span>}
                    </div>
                    <div>
                        <p className="text-sm font-bold text-[#646464] cursor-pointer hover:text-[#EF645A] duration-300"><PreviweInfo></PreviweInfo></p>
                        <input className="py-2 px-12 cursor-pointer my-4 bg-[#EF645A] text-white hover:bg-[#22587E] duration-300" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SubmitJournals;