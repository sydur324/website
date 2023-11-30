import useEditor from "../../../Hooks/useEditor";

const EditorialBoard = () => {
    const [editors,refetch] = useEditor()
    return (
        <div className="my-4">
             <div className="space-y-2">
                {
                   editors.map(editor => <div key={editor._id}>
                        <div>
                            <h2 className="font-medium text-[#EF645A]">{editor.editor}</h2>
                            <p>{editor.information}</p>
                        </div>
                   </div>) 
                }
             </div>  
        </div>
    );
};
export default EditorialBoard;