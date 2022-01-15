import React from 'react'; 
import coverImage from '../../assets/images/react-lineup.jpg';

function Home() {
    return (
        <section>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover"></img>
        </section>
    )
}


export default Home;