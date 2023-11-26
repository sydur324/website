
import './JournalsBody.css';
import { IoSearchOutline } from "react-icons/io5";
import { MdGridView } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import Card from "../../../Utilis/JournalCard/Card";
import ListCard from "../../../Utilis/JournalCard/ListCard/ListCard";
import { useState } from "react";
const JournalsBody = ({ journals }) => {
    //const [journals] = useJournals()
    const [view, setView] = useState(false)

    // ---for searchbar--

    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value)

    };

    const journal = journals.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    //end search

    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimite] = useState(8)
    const [pageNumberlimit, setPageNumberlimit] = useState(5)
    //12th line
    const [maxPageNumberlimit, setMaxPageNumberlimit] = useState(5)
    //13th line
    const [minPageNumberlimit, setMinPageNumberlimit] = useState(0)
    const pages = []
    for (let i = 1; i <= Math.ceil(journals.length / limit); i++) {
        pages.push(i)
    }
    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id))
    }
    const renderPageNumber = pages.map((number) => {
        if (number < maxPageNumberlimit + 1 && number > minPageNumberlimit) {
            return (
                <li key={number} id={number} onClick={handleClick}
                    className={currentPage == number ? "active" : null}
                >
                    <span className='px-2'>{number}</span>
                </li>
            )
        }
        else {
            return null
        }

    })

    const indexOfLastItem = currentPage * limit;
    const indexOfFirstItem = indexOfLastItem - limit;
    const currentItems = journal.slice(indexOfFirstItem, indexOfLastItem);





    const handleNexBtn = () => {
        setCurrentPage(currentPage + 1)

        if (currentPage + 1 > maxPageNumberlimit) {
            setMaxPageNumberlimit(maxPageNumberlimit + pageNumberlimit)
            setMinPageNumberlimit(minPageNumberlimit + pageNumberlimit)
        }
    }

    //18th line
    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1)

        if ((currentPage - 1) % pageNumberlimit == 0) {
            setMaxPageNumberlimit(maxPageNumberlimit - pageNumberlimit)
            setMinPageNumberlimit(minPageNumberlimit - pageNumberlimit)
        }
    }

    //19th line
    let pagesIncrementBtn = null;
    if (pages.length > maxPageNumberlimit) {
        pagesIncrementBtn = <li onClick={handleNexBtn}> ...</li>
    }

    //20th line
    let pagesDicrementBtn = null;
    if (minPageNumberlimit >= 1) {
        pagesDicrementBtn = <li onClick={handlePrevBtn}> ...</li>
    }

    //for search input 



    return (
        <div className="w-full px-8">
            <div className="flex  items-center justify-between">
                <div className="lg:flex px-2  w-full lg:items-center lg:mr-12 gap-2">
                    <div className="border flex w-full">
                        <input onChange={handleInputChange}
                            value={query} className="outline-none  w-full px-4" type="text" placeholder="Find Journals" />
                        <button className="text-xl bg-[#115680] hover:bg-[#262626] duration-300 border border-[#115680]
                              text-white py-2 px-2 inline-block">
                            <IoSearchOutline />
                        </button>
                    </div>
                    <p onClick={() => setView(false)} className="text-xl py-2 px-2 border hover:bg-[#115680] hover:text-white
                    duration-300 hidden lg:block cursor-pointer">
                        <MdGridView />
                    </p>
                    <p onClick={() => setView(true)} className="text-xl py-2 px-2 border hover:bg-[#115680] hover:text-white
                    duration-300 hidden lg:block cursor-pointer">
                        <TfiMenuAlt />
                    </p>
                </div>
            </div>

            <div>
                <h2 className="font-bold  hidden mt-8 px-2  xl:block text-[#262626]">Total Journals 0-{journal.length}</h2>
            </div>

            <div className='pb-4'>
                {
                    view === true ?
                        <>
                            <div className="my-8  gap-2 space-y-2">
                                {
                                    currentItems.map((jounral, index) => <ListCard key={jounral.index} jounral={jounral}>

                                    </ListCard>)
                                }
                            </div>
                        </>
                        :
                        <>
                            <div className="my-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2">
                                {
                                    currentItems.map((jounral, index) => <Card key={jounral.index} jounral={jounral}>

                                    </Card>)
                                }
                            </div>
                        </>
                }
            </div>

            <div className='flex items-center justify-center mt-4'>
                <div className='flex items-center space-x-2  list-none pageNumder cursor-pointer'>
                    <li>
                        <button className="px-1 py-1" onClick={handlePrevBtn} disabled={currentPage == pages[0] ? true : false}><MdChevronLeft /></button>
                    </li>
                    {pagesDicrementBtn}
                    {renderPageNumber}
                    {pagesIncrementBtn}
                    <li className="">
                        <button className="px-1 py-1" onClick={handleNexBtn} disabled={currentPage == pages[pages.length - 1] ? true : false}><MdChevronRight /></button>
                    </li>
                </div>
            </div>
        </div>
    );
};
export default JournalsBody;