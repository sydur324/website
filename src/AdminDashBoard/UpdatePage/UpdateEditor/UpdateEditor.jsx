import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useEditor from "../../../Hooks/useEditor";
import Swal from "sweetalert2";


const UpdateEditor = ({editor}) => {
    const [editors, refetch] = useEditor()
    const { id } = useParams()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch(`http://localhost:5000/editors/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    reset()
                    Swal.fire({
                        title: 'success!',
                        text: 'Your Editor Update successlly',
                        icon: 'success',
                        confirmButtonText: 'Finised'
                    })
                }
            })

    }
    return (
        <div className="px-12 py-8 w-3/4 ">
            <div className="">
                <h2 className="py-2 px-4 border font-bold text-sm">Add Editorial Board</h2>
                <div className="my-8 border">
                    <div className="text-center py-4 bg-[#EF645A] text-white">
                        <h2 className="text-lg font-bold">Editorial Board</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="py-8 px-6 space-y-3">
                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Editor Name:</label>
                            <input {...register("editor", { required: true })} className="py-2 px-2 outline-none border" type="text"  placeholder="Enter update Name" /> 
                            {errors.editor && <span className='text-[red] text-sm'>enter editor name</span>}
                        </div>



                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Editor Information:</label>
                            <div className="w-full">
                                <input {...register("information", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="update Information.." />
                                {errors.information && <span className='text-[red] text-sm'>Information required</span>}
                            </div>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Added Date:</label>
                            <div className="w-full">
                                <input {...register("date", { required: true })} className="w-full px-2 py-2 border outline-none" type="text" placeholder="update Date Ex: 30-Nov-23" />
                                {errors.date && <span className='text-[red] text-sm'>Information required</span>}
                            </div>
                        </div>

                        <div>
                            <input className="py-2 px-12 cursor-pointer my-4 bg-[#EF645A] text-white hover:bg-[#22587E] duration-300" type="submit" value="Update Editor" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default UpdateEditor;