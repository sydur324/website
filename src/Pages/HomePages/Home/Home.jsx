import Associoted from "../Associoted/Associoted";
import Banner from "../Banner/Banner";
import History from "../History/History";
import PopularJournals from "../PopularJournals/PopularJournals";
import RecentJournals from "../RecentJournals/RecentJournals";
import TrendingJournals from "../TrendingJournals/TrendingJournals";


const Home = () => {
    
    return (
        <div className="">
                <Banner></Banner>
                <History></History>
                <RecentJournals></RecentJournals>
                <TrendingJournals></TrendingJournals>
                <PopularJournals></PopularJournals>
                <Associoted></Associoted>
        </div>
    );
};
export default Home;