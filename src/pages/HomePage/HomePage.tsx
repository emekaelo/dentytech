import './HomePage.scss';
import {PortraitCardList} from "../../components/PortraitCard/PortraitCardList/PortraitCardList.tsx";


export const HomePage = () => {
    return (
        <main>
           <section className="advantages__section">
               <h1 className="advantages__title">OUR ADVANTAGES</h1>
               <PortraitCardList />
           </section>
        </main>
    );
};
