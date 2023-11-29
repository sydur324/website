import { useEffect, useState } from "react";
import useJournals from "../../../Hooks/useJournals";
import JournalsBody from "../JournalsBody/JournalsBody";
import JournalsSidebar from "../JournalsSidebar/JournalsSidebar";

const Journals = () => {
    const [journalls] = useJournals()
    const [journals, setJournals] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/journals')
            .then(res => res.json())
            .then(data => {
                setJournals(data)
            })
    }, [])

    const subList = [... new Set(journalls.map((sub) => sub.category))]
    const filterSub = (category) => {
        const newCat = journalls.filter((newCategory) => newCategory.category === category)
        setJournals(newCat)
    }

    return (
        <div className="my-8 lg:flex">
            <JournalsSidebar subList={subList} filterSub={filterSub} setJournals={setJournals}
                journals={journals}>
            </JournalsSidebar>
            <JournalsBody journals={journals}></JournalsBody>
        </div>
    );
};
export default Journals;