import React from 'react'
import Experience2 from '../Images/ExperienceIMG.png'
import GL from '../Images/GL.png'
import Technobux from '../Images/technobux.jpeg'

function Experience() {
  return (
    <div>
    
    <div className="Experience border-b-2 lg:border-b-0 pb-3 lg:shadow-2xl rounded-xl text-[#F1F1F1] mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                        {/** Experience GL */}
                      <div className="">
                        <div className="flex lg:gap-1 gap-4 mt-[25px]">
                                    <div><img src={Experience2} className="h-[50px] rounded-full"/></div>
                                    <div><h1 className="text-[24px] mt-3 uppercase lg:ml-3">
                                        Experience :</h1>
                                    </div>
                        </div>
                        <div className="">
                        <p className="lg:ml-16"><span className="font-extrabold">Content Engineer Machine Learning</span><br/>
                        <img src={GL} className="h-[50px] rounded-full" alt=""/>Global Logic India Pvt Ltd (Client-Google Inc.) : 2020-2022 </p><br/>
                        <div className="list_wrapper lg:ml-28">
                            <ul>
                                <li>• Experience in developing Web-based applications using JavaScript, CSS(BootStrap,tailwindcss), HTML5 & React</li>
                                <li>• Skilled in client-side web technologies like HTML5, CSS, JavaScript.</li>
                                <li>• Currently having a Hands-On Experience in NodeJS</li>
                                <li>• Experience in database designing with Firebase MySQL & Oracle.</li>
                                <li>• Having good exposure to work on Ubuntu OR Windows
                                    Environment.</li>
                                <li>• Sound Technical knowledge, excellent exposure and ability to learn
                                    any tool. (Laravel, Angular) quickly.</li>
                                 <li> • 1 Year of experience in developing Web-based using applications in
                                    VS coder, Firebase, NodeJS</li>   
                        </ul>
                        </div>
                        </div>
                      </div>
                      {/** END */}
                      {/** Technobux */}
                        <div className="">
                        <p className="lg:ml-16"><span className="font-extrabold">Front-End Developer: Software Developer</span><br/>
                            <img src={Technobux}className="h-[50px] rounded-full" alt=""/>Technobux Pvt Ltd : May,2020- July,2022 </p><br/>
                        <div className="list_wrapper lg:ml-28">
                            <ul>
                                <li>• Skilled in client-side web technologies like ReactJS, GrapesJS,JavaScript.</li>
                                <li>• Make Builder for Client Side Using a Temperory base builder (Silex), Having a good knowledge how to make it through (GrapesJS).</li>
                                <li>• Ability and having experience of Making a Dashboard for company as well as for the Customer site.</li>
                                <li>• Built website using React for the Company single handedly.</li>
                                <li>• Having Experience for the Github's Repo & Bitbucket</li>
                                <li>• Experience in NodeJS for testing API's.</li>
                                <li>• Experience in database designing with Firebase, MySQL & Oracle.</li>
                                
                                <li>• Sound Technical knowledge, excellent exposure and ability to learn
                                    any tool. (Laravel, Angular) quickly.</li>
                                 <li> • 1 Year of experience in developing Web-based using applications in
                                    VS coder, Firebase, NodeJS</li>   
                        </ul>
                        </div>
                        </div>
                      </div>
                      {/**  */}
                    </div>

    </div>
  )
}

export default Experience
