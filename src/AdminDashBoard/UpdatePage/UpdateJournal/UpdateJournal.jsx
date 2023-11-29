import { useForm } from "react-hook-form";
import useJournals from "../../../Hooks/useJournals";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";



const UpdateJournal = () => {
    // const [categories, setCategories] = useState([])


    // // Load all category and store them in lexicographical order
    // useEffect(() => {
    //     fetch("jcategory.json")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // const allCategories = data.categories;
    //             // allCategories.sort();
    //             setCategories(data);
    //             console.log(data);
    //         });
    // }, []);

    const [journalls] = useJournals()
    const {id} = useParams()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch(`http://localhost:5000/journals/${id}`, {
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
                        text: 'Your Journals Update successlly',
                        icon: 'success',
                        confirmButtonText: 'Finised'
                    })
                }
            })

    }
    return (
        <div className="px-12 py-8 w-4/5">
            <h2 className="py-2 px-4 border font-bold text-sm">Update the journal</h2>

            <div className="border my-6">
                <h2 className="py-3 text-center bg-[#F46957] text-white font-bold">Update Journal Information</h2>

                <div className="my-8 px-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        <div className="flex flex-col space-y-1">
                            <label className="font-bold text-sm">Title of Journal:</label>
                            <input {...register("title")} className="px-2 py-2 border outline-none" type="text" value={journalls.title} placeholder="Enter Journal Title.." />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-bold text-sm">Journal Image:</label>
                            <input {...register("image")} className="px-2 py-2 border outline-none" type="text" placeholder="Enter Image URL.." />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-bold text-sm">Journal Category:</label>
                            <select {...register("category")} className="px-2 py-2 border outline-none text-[#6c6b6b]"
                            >
                                {/* {categories.map((category) => {
                                    return (
                                        <option value={category} key={category}>
                                            {category}
                                        </option>
                                    );
                                })} */}

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
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-bold text-sm">Journal Nature:</label>
                            <select {...register("nature")} className="px-2 py-2 border outline-none text-[#6c6b6b]">
                                <option value="print">Print</option>
                                <option value="online">Online</option>
                                <option value="print and online">Print and Online</option>
                            </select>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-bold text-sm">Journal Language:</label>
                            <select {...register("language")} className="px-2 py-2 border outline-none text-[#6c6b6b]">
                                <option value="english">English</option>
                            </select>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-bold text-sm">Submission E-mail:</label>
                            <input {...register("suemail")} className="px-2 py-2 border outline-none" type="email" placeholder="Enter Email.." />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-bold text-sm">Published Date:</label>
                            <input {...register("pdate")} className="px-2 py-2 border outline-none" type="text" placeholder="Enter Date Ex. 29 Nov 23" />
                        </div>

                        <div className="flex gap-3 w-full">
                            <div className="flex flex-col space-y-1 w-full">
                                <label className="font-bold text-sm">ISSN No:</label>
                                <input {...register("pversion")} className="px-2 py-2 border outline-none" type="text" placeholder="Enter Print Version" />
                            </div>

                            <div className="flex flex-col space-y-1 w-full">
                                <label className="font-bold text-sm">ISSN No:</label>
                                <input {...register("eversion")} className="px-2 py-2 border outline-none" type="text" placeholder="Enter Electronic Version" />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-bold text-sm">Journal Frequency:</label>
                            <select {...register("frequency")} className="px-2 py-2 border outline-none text-[#6c6b6b]">
                                <option value="Monthly">Monthly</option>
                                <option value="Bi-Monthly">Bi-Monthly</option>
                                <option value="Quarterlly">Quarterlly</option>
                                <option value="Semi-Annually">Semi-Annually</option>
                            </select>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="font-bold text-sm">Aims & Scope:</label>
                            <textarea {...register("amis")} className="px-2 py-2 border outline-none text-[#6c6b6b]" cols="30" rows="4" placeholder="Write here aims and scope.."></textarea>
                        </div>

                        <div>
                            <input className="px-6 py-3 bg-[#EF645A] text-sm text-white font-bold hover:bg-[#22587E] duration-300 cursor-pointer" type="submit" value="Add Journal" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};
export default UpdateJournal;