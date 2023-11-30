import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddMembers = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/members', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire("added member");

                }

                reset()

            })
    }
    return (
        <div className="px-12 py-8 w-4/5">
            <h2 className="py-2 px-4 border font-bold text-sm">Add Global Team </h2>

            <div className="my-8 border">
                <div className="text-center py-4 bg-[#EF645A] text-white">
                    <h2 className="text-lg font-bold">Global Team</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="py-8 px-6 space-y-3">
                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-semibold">Name:</label>
                        <input {...register("name", { required: true })} className="py-2 px-2 outline-none border" type="text" placeholder="Enter Name.." />
                        {errors.name && <span className='text-[red] text-sm'>enter name</span>}
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-semibold">Designation:</label>
                        <input {...register("designation", { required: true })} className="py-2 px-2 outline-none border" type="text" placeholder="Enter Designation.." />
                        {errors.designation && <span className='text-[red] text-sm'>enter designation</span>}
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-semibold">Date:</label>
                        <input {...register("date", { required: true })} className="py-2 px-2 outline-none border" type="text" placeholder="Enter Designation.." />
                        {errors.date && <span className='text-[red] text-sm'>enter date</span>}
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-sm font-semibold">Image:</label>
                        <input {...register("image")} className="py-2 px-2 outline-none border" type="url" placeholder="Enter Image.." />
                    </div>

                    <div className="bg-[#ef645a4d] py-4 space-y-3">
                        <div className="flex flex-col space-y-1 px-4">
                            <label className="text-sm font-semibold">Facebook:</label>
                            <input {...register("facebook")} className="py-2 px-2 outline-none border border-[#262626]" type="url" placeholder="Enter link.." />
                        </div>

                        <div className="flex flex-col space-y-1 px-4">
                            <label className="text-sm font-semibold">Instagram:</label>
                            <input {...register("instagram")} className="py-2 px-2 outline-none border border-[#262626]" type="url" placeholder="Enter link.." />
                        </div>

                        <div className="flex flex-col space-y-1 px-4">
                            <label className="text-sm font-semibold">Linkedin:</label>
                            <input {...register("linkedin")} className="py-2 px-2 outline-none border border-[#262626]" type="url" placeholder="Enter link.." />
                        </div>

                    </div>


                    <div className="flex flex-col space-y-1">
                        <label  className="text-sm font-semibold">Description:</label>
                        <input type="text" {...register("description", { required: true })} className="py-2 px-2 outline-none border" placeholder="Write here.." />
                        {errors.description && <span className='text-[red] text-sm'>enter description</span>}
                    </div>

                    <div>
                        <input className="py-2 px-12 cursor-pointer my-4 bg-[#EF645A] text-white hover:bg-[#22587E] duration-300" type="submit" value="Add Now" />
                    </div>

                </form>
            </div>
        </div>
    );
};
export default AddMembers;