import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Landing() {
  useEffect(() => {
    Aos.init({
      delay: 200,
      duration: 1200,
      once: false,
    });
  });
  const history = useHistory();
  return (
    <>
      <main>
        <Navbar transparent />
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "85vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://now.tufts.edu/sites/default/files/110919_ASK_windmill_L.JPG')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>

          <div className="container relative mx-auto" data-aos="fade-in">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-white font-semibold text-5xl">
                    Location{" "}
                    <span className="text-purple-500">is the mantra</span>
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Welcome to the GISERIA. We are a family focised on providing
                    location besed solutions that focues on pushing you to your
                    absolute limit. Download our complete brochure to get
                    started today!
                  </p>
                  <a
                    href="#"
                    className="bg-transparent hover:bg-purple-500 text-purple-500 font-semibold hover:text-white px-4 py-2 border inline-block border-purple-800 rounded hover:border-transparent cursor-pointer mt-5"
                  >
                    Explore Solutions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pb-20 -mt-24" id="pablo">
          
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
              <div
                data-aos-duration="800"
                data-aos="fade-right"
                className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Who do you know cares for our home the way we do? its in
                      our veins
                    </p>
                  </div>
                </div>
              </div>

              <div
                data-aos-duration="800"
                data-aos="fade-left"
                className="pt-6 w-full md:w-4/12 px-4 text-center"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Let's be the number one you run to when you have location
                      problems. we dey for you
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div
                data-aos-duration="800"
                data-aos="zoom-out"
                className="w-full md:w-5/12 px-4 mr-auto ml-auto"
              >
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Geographic Information Systems (GIS) includes mapping and
                  location analytics technologies that power the world’s largest
                  businesses, infrastructure and communities around the globe.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Take advantage of expert-led training, resources and content
                  designed to equip you with the skills necessary to kickstart a
                  career in GIS.
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-gray-800 mt-8"
                >
                  Check GISERIA LABS!
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div
                  data-aos-duration="800"
                  data-aos="zoom-out"
                  className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-purple-600"
                >
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1585858229735-cd08d8cb510d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDEzNDF8MHwxfGFsbHx8fHx8fHx8fDE2NDE3NDI2MDc&ixlib=rb-1.2.1&q=85&w=618&dpr=1"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Solutions
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Whether you’re a nonprofit just starting out or an
                      established service provider, Giseria offers the best
                      industry tailored mapping and analytics solutions your
                      business needs.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div class="custom">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                class="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div
                data-aos="fade-right"
                className="w-full md:w-4/12 ml-auto mr-auto px-4"
              >
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://dim.mcusercontent.com/cs/4ee57c7c7602729db913729f3/images/fbb343b9-4208-4a1f-bfe5-e8bec589e9bf.jpg?w=404&dpr=1"
                />
              </div>
              <div
                data-aos="fade-left"
                className="w-full md:w-5/12 ml-auto mr-auto px-4"
              >
                <div className="md:pr-12">
                  <small className="text-orange-500 uppercase">
                    About GISERIA
                  </small>

                  <h3 className="text-4xl uppercase font-bold">
                    Excellent Location Services
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed">
                    Connect with the wider geospatial community. Stay in the
                    loop for training, resources and events to take your career
                    or business forward by leveraging the knowledge and exposure
                    Giseria offers.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3">
                            <i className="fas fa-dumbbell fa-2x text-orange-700"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl ">Build for Sustainability</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3">
                            <i className="fas fa-users fa-2x text-orange-700"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl ">
                            Tailored Solutions Built Upon GIS
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3">
                            <i className="fas fa-hard-hat fa-2x text-orange-700"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl ">
                            Unpacking Location Intelligence
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-white text-black">
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold uppercase">Contact Us</h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  We are interested in knowing more about you and the work you
                  do with GIS. Have a question or something you’d like to learn
                  about. We’d be happy to help.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-white text-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div
                  data-aos="fade-up-right"
                  className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
                >
                  <div className="flex-auto p-5 lg:p-10 bg-purple-500 text-white">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 text-gray-700 rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3  text-gray-700 bg-white rounded text-sm
                         shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1"
                        onClick={() => {
                          history.push("/login");
                        }}
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
