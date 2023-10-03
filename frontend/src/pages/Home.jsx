import React from "react";
import CountUp from "react-countup";
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import About from "../components/About/About";
import Hpage from "../components/Hpage/Hpage";
import Contact from "../components/Contact";

const Home = () => {
    return( 
    <>

    {/*  ===== hero section ====== */}
    
        <div><Hpage/></div>


    <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

                {/* ================Hpage================== */}
                
                {/* ====== hero content ====== */}
                <div>
                    <div className="lg:w-[570px]">
                        <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                        Welcome to Babjo</h1>
                        <p className="text_para">Babjo Divine School is an Independent, Co-Education School with Christian ethos founded in 2001.</p>
                        <div className="flex gap-[30px] justify-end">
                    <div>
                        <img className="w-full" src={heroImg01} alt="" />
                    </div>
                </div>
                        <button className="btn">Request an Appointment</button>
                    </div>

                    {/* ===== hero counter ===== */}
                    <div className="mt-[3opx] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]"
                    >
                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor"><CountUp start={20} end={30} duration={4} /> <span className="text-countUpColor">+</span></h2>
                            <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                            <p className="text_para">Years of Experience</p>
                        </div>

                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor"><CountUp start={5} end={15} duration={4} /> <span className="text-countUpColor">+</span></h2>
                            <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                            <p className="text_para">School Location</p>
                        </div>

                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor"><CountUp start={90} end={100} duration={4} /> <span className="text-countUpColor">%</span></h2>
                            <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                            <p className="text_para">Parent Satisfaction</p>
                        </div>
                    </div>
                </div>
                {/* ======hero content ======= */}
                <div>
                    <div className="lg:w-[570px]">
                        <h8 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px] md:leading-[70px]">
                        Our Community</h8>
                        <p className="text_para">Our spacious premises and well maintained facilities create an attractive environment for learning.</p>

                        <h8 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px] md:leading-[70px]">
                        Our Commitment to Parents</h8>
                        <p className="text_para">We are committed to making Brookstone School a global centre of academic excellence and we look forward to being a part of your child’s education and moral upbringing.</p>

                        <h8 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px] md:leading-[70px]">
                        Books & Library</h8>
                        <p className="text_para">We have vast expanse of books to broaden your knowledge base.</p>

                        <h8 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px] md:leading-[70px]">
                        Our Teachers</h8>
                        <p className="text_para">Well-trained employees to entrust adequate safety and care of your child.</p>

                        <h8 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px] md:leading-[70px]">
                        Certification</h8>
                        <p className="text_para">Members of both international and national educational organizations.</p>
                    </div>
                    </div>
                </div>
            </div>
    </section>
    {/* ====== hero section end ====== */}

    <section>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                <div className="py-[30px] px-5">
                    <div className="flex items-center justify-center">
                        <img src={icon01} alt="" />
                    </div>

                    <div className="mt-[30px]">
                        <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Our Profile</h2>
                        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Babjo Divine School is a co-educational boarding school, and we welcome students between the ages of 20 and 26 years old.Our program provides personalized attention that allows every student to thrive. Our focus is on allowing students to explore their interests and cultivate their talents.</p>

                        <Link to='/about' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                            <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                        </Link>
                    </div>
                </div>

                <div className="py-[30px] px-5">
                    <div className="flex items-center justify-center">
                        <img src={icon02} alt="" />
                    </div>

                    <div className="mt-[30px]">
                        <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Our Sllables</h2>
                        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">We offer courses in Nigerian and British Curricular. We offer interactive teaching by highly qualified and experienced specialist teachers alongside modern mentoring methods and constantly monitoring, reviewing, and updating our curriculum in line with new developments.</p>

                        <Link to='/about' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                            <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                        </Link>
                    </div>
                </div>

                <div className="py-[30px] px-5">
                    <div className="flex items-center justify-center">
                        <img src={icon03} alt="" />
                    </div>

                    <div className="mt-[30px]">
                        <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                            Our Teachers</h2>
                        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">We work hard to maintain a flowing, healthy relationship with Parents so that they feel comfortable speaking with teachers, staff, and leadership. This sort of relationship is so important for the student and that’s why we emphasize it.</p>

                        <Link to='/about' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                            <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <About/>

    <Contact />


    </>
    )
}

export default Home