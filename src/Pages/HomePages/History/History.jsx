import history from '../../../assets/image/history.jpg'
import history2 from '../../../assets/image/slide01.jpg'

const History = () => {

    return (
        <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-8">
            <div className="grid lg:grid-cols-2 gap-6">
                <div className='lg:text-left text-center'>
                    <p className="text-[#115680] text-sm font-medium">History of</p>
                    <h2 className="text-xl font-semibold py-1">Westren Education Group</h2>

                    <div className="mt-6 space-y-3">
                        <p className="text-[#525252]">
                            Founded in June 2011, the ARIPD serves as a focal point for
                            academicians, professionals, graduate and undergraduate students,
                            fellows, and associates pursuing research throughout the world.
                            Initially ARIPD’s activities were based in Bangladesh. Later its
                            scope has been broadened to the world at large through its U.S.
                            International Center.
                        </p>

                        <p className="text-[#525252] pb-2">
                            The Institute works with policymakers, scholars, and public 
                            interest groups around the World to design, execute, and 
                            disseminate research that illuminates economics and social 
                            policy issues affecting the communities of the world. ARIPD 
                            seeks to build a network of individuals and organizations that 
                            conduct and use policy research.
                        </p>

                        <button className="px-6 py-2 bg-[#115680] text-white hover:bg-[#262626] duration-300">Read more</button>
                    </div>
                </div>

                <div className='lg:flex items-center justify-center hidden'>
                        <div className=''><img src={history2} alt="" /></div>
                </div>
            </div>
        </div>
    );
};
export default History;