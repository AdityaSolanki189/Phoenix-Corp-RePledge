import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './LandingPage.css';
import banner from '../../resources/plant_banner.svg';

export default function LandingPage() {

    return (
        <div>
            <Header/>
            <div className='banner-parent'>
                <div className='banner'>
                    <img src={banner}/>

                </div>
                <div className='whyUs'>
                    <span >Why Us?</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus
                        odio, necessitatibus corporis quos, dolores perspiciatis ut ab nobis magni
                        deleniti id quasi beatae obcaecati hic perferendis quis illo qui ex dolor
                        veritatis libero! Perspiciatis, ut nisi quia porro quod in molestiae
                        reprehenderit animi optio aut minus, minima quos. Nostrum.</p>
                </div>
            </div>

            <Footer/>

        </div>
    )
}