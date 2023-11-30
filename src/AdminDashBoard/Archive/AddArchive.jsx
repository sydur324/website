import { useState } from "react";
import PreviweInfo from "../../UserDashBoard/PreviweInfo/PreviweInfo";
import TermsAndCondition from "../../UserDashBoard/TermsAndCondition/TermsAndCondition";
import { useForm } from "react-hook-form";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import Swal from "sweetalert2";

const AddArchive = () => {
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
        fetch('http://localhost:5000/archives', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire("Add  archive");

                }

                reset()

            })
    }
    return (
        <div className="px-12 py-8 w-3/5">
            <h2 className="py-2 px-4 border font-bold text-sm">Add Archive</h2>

            <div className="border my-8">
                <div className="text-center py-4 bg-[#EF645A] text-white">
                    <h2 className="text-xl font-bold">Archive Information</h2>
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
                            <div className="space-y-2">
                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Author Name:</label>
                                    <div className="w-full">
                                        <input {...register("firstAuthor", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Enter Author Name.." />
                                        {errors.firstAuthor && <span className='text-[red] text-sm'>One author name must be required</span>}
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Author Information:</label>
                                    <div className="w-full">
                                        <input {...register("information", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Enter Author Info.." />
                                        {errors.information && <span className='text-[red] text-sm'>Information required</span>}
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

                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Contact Number</label>
                                    <div className="w-full">
                                        <input {...register("number", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Your Number.." />
                                        {errors.number && <span className='text-[red] text-sm'>contact number  required</span>}
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-semibold">Name of Journal:</label>
                        <select {...register("JournalName", { required: true })} className="py-2 px-2 outline-none border text-[#6c6b6b]">
                            <option>Select Journal</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Archaeology">Archaeology</option>
                            <option value="Art and Art History">Art and Art History</option>
                            <option value="Bank Management">Bank Management</option>
                            <option value="Biochemistry">Biochemistry</option>
                            <option value="Business Ethics">Business Ethics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.JournalName && <span className='text-[red] text-sm'>Journal name must be required</span>}
                    </div>

                    <div className="flex space-x-2">

                        <div className="flex flex-col space-y-1 w-full">
                            <label className="text-sm font-semibold">DOI No:</label>
                            <div className="w-full">
                                <input {...register("DOI")} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Enter DOI No.." />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-1 w-full">
                            <label className="text-sm font-semibold">DOI URL:</label>
                            <div className="w-full">
                                <input {...register("DOIURL")} className="px-2 py-2 border outline-none w-full" type="text" placeholder="Enter DOI URL.." />
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-semibold">Year:</label>
                        <div className="w-full">
                            <input {...register("year", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="enter year.." />
                            {errors.year && <span className='text-[red] text-sm'>year  required</span>}
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-semibold">Date:</label>
                        <div className="w-full">
                            <input {...register("date", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="enter date.." />
                            {errors.date && <span className='text-[red] text-sm'>date  required</span>}
                        </div>
                    </div>


                    <div className="flex space-x-2">

                        <div className="flex flex-col space-y-1 w-full">
                            <label className="text-sm font-semibold">Volum No:</label>
                            <div className="w-full">
                                <input {...register("volum")} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Enter volum No.." />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-1 w-full">
                            <label className="text-sm font-semibold">Volum Serial:</label>
                            <div className="w-full">
                                <input {...register("volumserial")} className="px-2 py-2 border outline-none w-full" type="text" placeholder="Enter DOI URL.." />
                            </div>
                        </div>

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
                        <input className="py-2 px-12 cursor-pointer my-4 bg-[#EF645A] text-white hover:bg-[#22587E] duration-300" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};
export default AddArchive;