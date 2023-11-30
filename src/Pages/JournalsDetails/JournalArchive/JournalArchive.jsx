
import { useEffect, useState } from "react";
import useAdviser from "../../../Hooks/useAdviser";
import ArchiveSideBar from "../../ArchivePage/ArchiveSideBar/ArchiveSideBar";
import ArchiveBody from "../../ArchivePage/ArchiveBody/ArchiveBody";


const JournalArchive = () => {
    const [archives, refetch] = useAdviser()
    const [archivess, setArchivess] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/archives')
            .then(res => res.json())
            .then(data => {
                setArchivess(data)
            })
    }, [])

    const yearList = [... new Set(archives.map((year) => year.year))]
    const filterYear = (year) => {
        const newYear = archives.filter((newYears) => newYears.year === year)
        setArchivess(newYear)
    }

    return (
        <div className="my-8 lg:flex gap-6">
            <ArchiveSideBar
                yearList={yearList} filterYear={filterYear} setArchivess={setArchivess}
                archivess={archivess}
            ></ArchiveSideBar>
            <ArchiveBody archivess={archivess}></ArchiveBody>
        </div>
    );
};
export default JournalArchive;