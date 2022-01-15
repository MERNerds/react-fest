import React from 'react'; 
import coverImage from '../../assets/images/react-lineup.jpg';
import ticketBanner from '../../assets/images/react-ticket-banner.jpg';

function Home() {
    return (
        <section>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover"></img>
            <img src={ticketBanner} className='my-=2' style={{ width: "100%" }} alt="banner"></img>
        </section>
    )
}


export default Home;