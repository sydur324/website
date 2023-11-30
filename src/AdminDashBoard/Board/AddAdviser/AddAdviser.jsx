import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ManageAdviser from "../../ManageAdviser/ManageAdviser";

const AddAdviser = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/adveseres', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire("Adviser is added");

                }

                reset()

            })
    }
    return (
        <div className="px-12 py-8 w-4/5">


            <div className="w-3/5">
                <h2 className="py-2 px-4 border font-bold text-sm">Add Adviser Board</h2>
                <div className="my-8 border">
                    <div className="text-center py-4 bg-[#EF645A] text-white">
                        <h2 className="text-lg font-bold">Adviser Board</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="py-8 px-6 space-y-3">
                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Adviser Name:</label>
                            <input {...register("adviser", { required: true })} className="py-2 px-2 outline-none border" type="text" placeholder="Enter Editor Name" />
                            {errors.adviser && <span className='text-[red] text-sm'>enter Adviser name</span>}
                        </div>



                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Adviser Information:</label>
                            <div className="w-full">
                                <input {...register("information", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Enter Information.." />
                                {errors.information && <span className='text-[red] text-sm'>Information required</span>}
                            </div>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Added Date:</label>
                            <div className="w-full">
                                <input {...register("date", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="Date Ex: 30-Nov-23" />
                                {errors.date && <span className='text-[red] text-sm'>Information required</span>}
                            </div>
                        </div>

                        <div>
                            <input className="py-2 px-12 cursor-pointer my-4 bg-[#EF645A] text-white hover:bg-[#22587E] duration-300" type="submit" value="Add Adviser" />
                        </div>
                    </form>
                </div>
            </div>

            <ManageAdviser></ManageAdviser>
        </div>
    );
};
export default AddAdviser;