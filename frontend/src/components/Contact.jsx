import {BsFillTelephoneOutboundFill} from 'react-icons/bs';
import {BiSolidMessageAltDetail} from 'react-icons/bi';
import {FaMapMarkerAlt} from 'react-icons/fa';


const Contact = () => {
    return (
        <section className="hero_section pt-[60px] 2xl:h-[800px]">

        <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

<div>
                    <div className="lg:w-[570px]">
                        <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                        Contact Details</h1>
                        <p className="text_para">Feel free to send us a message, including your details. We will be sure to respond to your message within 48 Hours.</p>
                        <div>
      <p className="flex items-center">
        <BsFillTelephoneOutboundFill className="group-hover:text-white w-4 h-5" />
        <span className="ml-2">+234 803 577 2903</span>
      </p>
    </div>

    <div>
      <p className="flex items-center">
        <BiSolidMessageAltDetail className="group-hover:text-white w-4 h-5" />
        <span className="ml-2">babjodivine@gmail.com</span>
      </p>
    </div>

    <div>
      <p className="flex items-center">
        <FaMapMarkerAlt className="group-hover:text-white w-4 h-5" />
        <span className="ml-2">Ontoki Area, Ikirun. Osun State.</span>
      </p>
    </div>
                    </div>

                   
                </div>

            <div className="px-4 mx-auto max-w-screen-md ">
                <h2 className="heading text-center">Feel free to write us</h2>
                <form action="#" className="space-y-8">

                <div>
                        <label htmlFor="first_name" className="form_label">First Name</label>
                        <input 
                            type="text"  
                            id="first_name" 
                            placeholder="First Name" 
                            className="form_input mt-1"/>
                    </div>

                    <div>
                        <label htmlFor="last_name" className="form_label">Last Name</label>
                        <input 
                            type="text"  
                            id="last_name" 
                            placeholder="Last Name" 
                            className="form_input mt-1"/>
                    </div>

                    <div>
                        <label htmlFor="last_name" className="form_label">Phone Name</label>
                        <input 
                            type="text"  
                            id="phone_number" 
                            placeholder="Phone Number" 
                            className="form_input mt-1"/>
                    </div>


                    <div>
                        <label htmlFor="email" className="form_label">Your Email</label>
                        <input 
                            type="email"  
                            id="email" 
                            placeholder="example@gmail.com" 
                            className="form_input mt-1"/>
                    </div>

                    <div>
                        <label htmlFor="subject" className="form_label">Subject</label>
                        <input 
                            type="text"  
                            id="subject" 
                            placeholder="Let us know how we can help you" 
                            className="form_input mt-1"/>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="form_label">Your Message</label>
                        <textarea
                        rows="6" 
                            type="text"  
                            id="message" 
                            placeholder="Leave a comment....." 
                            className="form_input mt-1"/>
                    </div>
                    <button type="submit" className="btn rounded sm:w-fit">Submit</button>
                </form>
            </div>
            </div>
            </div>

        </section>
    )
}

export default Contact