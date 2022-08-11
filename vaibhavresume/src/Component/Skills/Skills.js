import React from 'react'
import Education from  '../Images/EducationIMg.png'

function Skills() {
  return (
    <div>

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
                                  <div className=""><p>MySQL</p></div>  
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
      
    </div>
  )
}

export default Skills
