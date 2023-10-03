import DoctorCard from '../../components/Doctors/DoctorCard';
import { doctors } from '../../assets/data/doctors';
import Testimonial from '../../components/Testimonial/Testimonial';
const AboutUs = () => {
    return <>
    <section className='bg-[#fff9ea]'>
        <div className="container text-center">
            <h2 className='heading'>About Babjo Divine School</h2>
            <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
                <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Search' />
                <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
                <h2 className="heading text-center">Our Mission</h2>
                <p className="text_para text-center">To be totally committed to academic excellence in a challenging and nurturing environment and groom productive citizens responsible for their future.</p>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
                <h2 className="heading text-center">Our Goals</h2>
                <p className="text_para text-center">To cultivate academic prowess, strong character and self-confidence.</p>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
                <h2 className="heading text-center">Our Core Values</h2>
                <p className="text_para text-center">
                    <li>Integrity, Discipline and Excellence.</li>
                    <li>Faith in God, Love and Self-Confidence.</li>
                    <li>Initiative, Teamwork, Respect for Others and Diligence.</li>
                </p>
            </div>
        </div>
    </section>
    </>
}

export default AboutUs