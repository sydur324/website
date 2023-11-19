import JournalsBody from "../JournalsBody/JournalsBody";
import JournalsSidebar from "../JournalsSidebar/JournalsSidebar";

const Journals = () => {
    
    return (
        <div className="my-16 flex">
                <JournalsSidebar></JournalsSidebar>
                <JournalsBody></JournalsBody>
        </div>
    );
};
export default Journals;