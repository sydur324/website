import useJournals from "../../../../Hooks/useJournals";
import { FiChevronRight } from "react-icons/fi";
const SideSub = () => {
    const [journals] = useJournals()

    return (
        <div className="space-y-2 py-4">
            {
                journals.map((sub, index) => <div key={sub.index}>
                    <li className="text-sm list-none font-medium flex items-center space-x-1 text-[#4e4e4e] 
                    cursor-pointer hover:text-[#A90633] duration-300 hover:translate-x-1">
                        <span>{sub.subjects}</span>
                        <span><FiChevronRight /></span>
                    </li>
                </div>)
            }
        </div>
    );
};
export default SideSub;