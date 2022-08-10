import React from 'react'
import Vaibhav from './Images/Vaibhav.png'
import Education from './Images/EducationIMg.png'
import Experience from './Images/ExperienceIMG.png'
import GL from './Images/GL.png'
import Mental from './Images/mental-health.png'
import Project from './Images/Project.png'
import Technobux from './Images/technobux.jpeg'


function Resume() {
  return (
    <div className='bg-[#003865]'>
    <div className='ALL_Wrapper '>
   {/**Start */} 
        
    <div className="Wrapper mx-7 my-5">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ">
            <div className="">
                {/** New Grid */}
                <div className="Personal_About_Contact_wrapper lg:shadow-2xl pb-5 rounded-xl">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 ">
                        {/** 1st Grid */}
                        <div className=" lg:order-1 order-1 text-[#F1F1F1] text-[30px]">
                            <div className="mt-12 lg:ml-4 mb-6"><p>
                            <i className="fa-brands fa-connectdevelop text-[#B8D8E7]"></i><span className="text-[29px] font-bold">Vaibhav Kumar</span></p>
                            </div> 
                            <div className="Vaibhav_img">
                          <img src={Vaibhav} alt="" className="h-[250px] mx-auto rounded-full border-2 border-[#F1F1F1]"/>
                        </div>
                        </div>
                        {/** END */}
                        {/** 2nd Grid */}
                        <div className=" lg:order-2 order-3 text-[#F1F1F1] ">
                            <article className="lg:mt-32 mt-5">
                                <h1 className="text-[27px]">About :</h1>
                                <p className="mt-6">
                                Hi, My name is Vaibhav Kumar. I am a enthusiastic Developer. I have experience of professionalism for Total 2 year's and as a Developer I have a experience of 1.2 year's. My past two companies are Global Logic(Vendor For <span className="font-extrabold">Google</span>) & Technobux also known as Wezbo. I have Good Experience of maintaining a Github Repo & Bitbucket. Little Bit Experience in AWS.
                                </p>
                            </article>
                        </div>
                        {/** END */}
                        {/** 3rd Grid */}
                        <div className=" lg:order-3 order-2 text-[#F1F1F1] lg:ml-12 ">
                            <div className=" lg:mt-[9rem] mb-6">
                                <div className="text-[24px] text-left">
                                    <p><i className="fa-solid fa-mobile-retro text-[#B8D8E7]"></i><span className="ml-5 text-[16px] lg:text-[20px]">+91-7838956285</span></p>
                                    <p><i className="fa-solid fa-street-view text-[#B8D8E7]"></i><span className="ml-5 text-[16px] lg:text-[20px]">Rajouri Garden, Shivaji Enclave</span></p>
                                    <p><i className="fa-brands fa-google text-[#B8D8E7]"></i><span className="ml-5 text-[16px] lg:text-[20px]">vaibhav7838kumar@gmail.com</span></p>
                                    <p className="pointer"><a href="https://github.com/Vaibhav7838"><i className="fa-brands fa-github text-[#B8D8E7]"></i><span className="ml-5 text-[16px] lg:text-[20px]">Vaibhav7838</span></a></p>
                                    <p><a href="https://www.linkedin.com/in/vaibhav-kumar-48140b12a/"><i className="fa-brands fa-linkedin text-[#B8D8E7]"></i><span className="ml-5 text-[16px] lg:text-[20px]">Vaibhav Kumar</span></a></p>
                                </div>
                        </div>
                        </div>
                        {/** END */}
                    </div>
                    {/** Grid end */}
                </div>
                {/**  */}
                {/** New Grid 2  */}
                <div className="Experience border-b-2 lg:border-b-0 pb-3 lg:shadow-2xl rounded-xl text-[#F1F1F1] mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                        {/** Experience GL */}
                      <div className="">
                        <div className="flex lg:gap-1 gap-4 mt-[25px]">
                                    <div><img src={Experience} className="h-[50px] rounded-full"/></div>
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
                {/** END */}
                {/** New Grid 3 */}
                <div className="Project lg:border-b-0 border-b-2 pb-5 lg:shadow-2xl rounded-xl text-[#F1F1F1] mt-5">
                    <div className="header lg:ml-2">
                        <div className="flex lg:gap-1 gap-4 mt-[25px]">
                            <div><img src={Project} className="h-[50px]"/></div>
                            <div><h1 className="text-[24px] mt-6 uppercase lg:ml-3">
                                Projects :</h1></div>
                            </div>
                    </div><br/>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/** Project Academic */}
                      <div className="">
                        <div className="">
                        <p className="lg:ml-16 font-bold lg:text-[22px]">Academic Project :</p>
                        <div className="list_wrapper lg:ml-16"><br/>
                            <ul>
                            <p>
                                <li>Project 1 :  JEERA TICKET MANAGEMENT</li>
                                <li>Tool used: VS code, JavaScript, HTML, CSS</li>
                                <li>Database Used: Firebase, Local Storage (Browser)</li>
                             </p><br/> 
                             <p>
                                <li>Project 2: TODO List</li>
                                <li>Tool used: React, JavaScript, HTML, CSS & Vscoder</li>
                                <li>Database Used: Firebase, Local Storage (Browser)</li>
                             </p> <br/>
                             <p>
                                <li>Project 3: Movie App</li>
                                <li>Tool used: React, JavaScript, HTML, CSS & Vscoder</li>
                                <li>Database Used: Firebase, Local Storage (Browser)</li>
                             </p>  
                        </ul>
                        </div>
                        </div>
                      </div>
                      {/** END */}
                      {/** College Project */}
                      <div className="">
                        <div className="">
                        <p className="lg:ml-16 font-bold lg:text-[22px]">College Project’s:</p>
                        <div className="list_wrapper lg:ml-16"><br/>
                            <ul>
                            <p>
                                <li> Main Project: Uber Clone(Take-Taxi)</li>
                                <li>Android Application (Android Studio)</li>
                                <li>Tool used: Android Studio, Java</li>
                                <li>Database Used: Firebase, Local Storage (Browser)</li>
                             </p><br/> 
                             <p>
                                <li> Semi-Main Project: Family Tracker</li>
                                <li>Android Application (Android Studio)</li>
                                <li>Tool used: Android Studio, Java</li>
                                <li>Database Used: Firebase, Local Storage (Browser)</li>
                             </p> <br/> 
                        </ul>
                        </div>
                        </div>
                      </div>
                        {/** END */}
                      </div>
                      {/** End */}
                    </div>
                {/** END */}
            {/** New Grid 4 */}
                 <div className=" skill_education_container my-6   ">
                <div className="container text-[#F1F1F1]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        {/** Skill Grid */}
                      <div className="lg:shadow-2xl pb-5 rounded-xl">
                        <div className=" shadow-black pb-4 ">
                            {/** Skills */}
                            <h1 className="text-[24px] uppercase lg:ml-3"><i className="fa-brands fa-angellist"></i> Skills :</h1>
                            <div className="container my-4">
                                <h1 className="text-[19px] lg:ml-3 uppercase">Web Designing Languages : </h1> <br/>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-5">
                                    {/** Skills Grid */}
                                  <div className="border rounded-full text-center">
                                   <div> <p>React JS</p></div>
                                </div>
                                <div className="border rounded-full text-center">
                                    <div><p>NodeJS</p></div> 
                                </div>
                                <div className="border rounded-full text-center">
                                  <div className=""><p>JavaScript</p></div>  
                                </div>
                                <div className="border rounded-full text-center">
                                    <div><p>Grapes JS</p></div> 
                                </div>
                                <div className="border rounded-full text-center">
                                    <div><p>HTML</p></div>
                                </div>
                                <div className="border rounded-full text-center">
                                    <div><p>CSS</p></div>
                                </div>
                                <div className="border rounded-full text-center">
                                    <div><p>BootStrap</p></div>
                                </div>
                                <div className="border rounded-full text-center">
                                    <div><p>Tailwind CSS</p></div> 
                                </div>
                                <div className="border rounded-full text-center">
                                    <div><p>Material UI</p></div> 
                                </div>
                                {/**  */}
                                </div> <br/>
                                {/**  */}
                                <h1 className="uppercase text-[19px] lg:ml-3">Primary Skills :</h1> <br/>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-5">
                                    {/** Skills Grid */}
                                  <div className="border rounded-full text-center">
                                   <div> <p>Ms Word</p></div>
                                </div>
                                <div className="border rounded-full text-center">
                                  <div className=""><p>Ms PowerPoint</p></div>  
                                </div>
                                <div className="border rounded-full text-center">
                                    <div><p>Ms Excel</p></div> 
                                </div>
                                <div className="border rounded-full text-center">
                                    <div><p>Ms Libra</p></div>
                                </div>
                               
                                </div><br/>
                                {/**  */}
                                <h1 className="uppercase text-[19px] lg:ml-3">Operation System :</h1> <br/>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-5">
                                    {/** Skills Grid */}
                                  <div className="border rounded-full text-center">
                                   <div> <p>Ubuntu</p></div>
                                </div>
                                <div className="border rounded-full text-center">
                                  <div className=""><p>Windows</p></div>  
                                </div>
                                </div>
                                {/**  */}
                              </div>
                        </div>
                      </div>
                      {/** Grid End */}

                      {/** Education grid */}
                      <div className="lg:px-5 lg:shadow-2xl pb-5 rounded-xl">
                        <h1 className="text-[24px] lg:text-[28px] mt-2">
                            <i className="fa-solid fa-graduation-cap"></i>
                             Education :
                        </h1>
                        {/** List start */}
                        <div className="list_Wrapper mt-6 lg:text-[20px]">
                        <ul>
                            <li className="">• Pursuing MCA from IGNOU (2021)</li><br/>
                            <li><a className="pointer" href="http://www.iitmjanakpuri.com/">• Bachelor of Computer Applications (BCA), Graduate in BCA from IITM-Institute of Information Technology & Management College with a <span className="font-extrabold">First-className division.</span></a> </li><br/>
                            <li>• XII aggregate is 73.4%.</li><br/>
                            <li>• X aggregate is 54%.</li>
                        </ul><br/>
                        <img src={Education} className="h-[120px] w-[300px] mx-auto" />
                    </div>
                    {/** list end */}
                      </div>
                    </div>
                  </div>
                </div>
            {/** END */}

            {/** New Grid 5 */}
                <div className="Interest">
                <div className=" Experience_Interest_container my-6 ">
                    <div className="container lg:mt-1 mt-5 text-[#F1F1F1]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            {/** Interest Grid */}
                          <div className="order-2 lg:shadow-2xl pb-5 rounded-xl ">
                            <div className=" pb-4 ">
                                {/** Interest */}
                                <div className="flex lg:gap-1 gap-4 mt-[25px]">
                                <div><img src={Mental} className="h-[70px]"/></div>
                                <div><h1 className="text-[24px] mt-6 uppercase lg:ml-3">
                                    Interests :</h1></div>
                                </div>
                                {/** interest  */}
                                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-10 gap-5 mx-5">
                                        {/** Skills Grid */}
                                      <div className="border rounded-full text-center">
                                       <div> <p>Coding</p></div>
                                    </div>
                                    <div className="border rounded-full text-center">
                                      <div className=""><p>CSS Customizing</p></div>  
                                    </div>
                                    <div className="border rounded-full text-center">
                                        <div><p>Activities : [Gym,Running]</p></div> 
                                    </div>
                                    <div className="border rounded-full text-center">
                                        <div><p>Yoga : For Peace</p></div>
                                    </div>
                                    {/**  */}
                                </div>
                                {/**  */}
                            </div>
                          </div>
                          {/** Grid End */}

                          {/** Experience */}
                          <div className="order-1 lg:pl-3 lg:shadow-2xl pb-5 rounded-xl ">
                            <h1 className="text-[24px] lg:text-[28px] mt-2">
                                <div className="flex lg:gap-1 gap-4 mt-[25px]">
                                    <div><img src={Experience} className="h-[50px] rounded-full"/></div>
                                    <div><h1 className="text-[24px] mt-3 uppercase lg:ml-3">
                                        Experience :</h1></div>
                                    </div>
                            </h1>
                            {/** List start */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-10 gap-2 mx-5">
                                {/** Skills Grid */}
                                <div>
                              <div className="lg:text-[18px] text-left">
                               <div> <img src={GL} className="h-[50px]" alt=""/> Global Logic :</div>
                            </div>
                            <div className=" text-left">
                              <div className=""><p>2020-2022</p></div>  
                            </div>
                            <div className=" text-left">
                                <div><p>Analyst/Developer</p></div> 
                            </div><br/>
                            <div className=" text-left">
                                <div> <img src={Technobux} className="h-[50px]" alt=""/> <p>Technobux -:</p></div>
                            </div>
                            <div className=" text-left">
                                <div><p>May,2022 - July,2022</p></div>
                            </div>
                            <div className="text-left">
                                <div><p>Front-end Developer(ReactJS)</p></div>
                            </div>
                            {/**  */}
                        </div>
                        {/** list end */}
                          </div>
                          {/**  */}
                        
                        </div>
                      </div>

                </div>
            </div>
                </div>
        
        {/** {/**End */}
    </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Resume
