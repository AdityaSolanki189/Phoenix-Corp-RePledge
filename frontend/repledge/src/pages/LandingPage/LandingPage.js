import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './LandingPage.css';
import banner from '../../resources/plant_banner.svg';
import books from '../../resources/books.svg';
import kid from '../../resources/kid.svg';

export default function LandingPage() {

    return (
        <div>
            <Header/>
            <div className='banner-parent'>
                <div className='banner'>
                    <img src={kid}/>

                </div>
                <div className='whyUs'>
                    <span style={{}}>Why Us?</span>
                    <p> Users can donate material goods at their doorstep and our volunteers will
                        collect it. Hence, making it easier for people to make donations.
                        <br/>
                         The donations drives can be setup by a host who can broadcast a message asking
                        for volunteers.
                        <br/>
                         We can track the donations made by the users to keep the proof of work</p>
                </div>
            </div>

            <Footer/>

        </div>
    )
}