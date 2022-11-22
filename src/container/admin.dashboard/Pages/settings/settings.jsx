import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { IsMobileWidth, IsTabletWidth } from '../../../../components/common/utill/utils';
import { Paper, Container } from '@mui/material';
import clsx from 'clsx';
import './Settings.css';

import vector from '../../../../assets/images/Vector.png';
import glob from '../../../../assets/images/globe.png';
import userimg from '../../../../assets/images/user-logo.svg'

const Settings = () => {
  const mobileWidth = IsMobileWidth()
  const tabletWidth = IsTabletWidth()
  return (
    <div className='w-100 text-left bg-slate ' >
      

       <div class="flex flex-row flex-wrap py-4  ">
      <p className='settings px-4 '>Settings</p> 
       <div className='w-100 text-left settingsub px-4'>Control and edit all you
       </div>
    <Tabs>
        <TabList>
       <Tab>
          
       <p>    &nbsp;     <span><img src={glob}></img></span> &nbsp; Edit your profile 

            &nbsp;      <span><img src={vector} className="alignicon"></img></span>  
     
            </p>


          
          </Tab>  
          <Tab>
            <p>  &nbsp;     <span><img src={glob}></img></span> &nbsp;      Change email address 

            &nbsp;    <span><img src={vector} className="alignicon2"></img></span>  
         
            </p>
          </Tab>  
          <Tab>
            <p>&nbsp;     <span><img src={glob}></img></span> &nbsp; Change password


            &nbsp;    <span><img src={vector} className="alignicon1"></img></span>  
            </p>

          
          </Tab>
  
          <Tab>
            <p> &nbsp;     <span><img src={glob}></img></span> &nbsp;  Language

          
            &nbsp;    <span><img src={vector} class="vectcss"></img></span>  
            </p>
            
          </Tab>
        
        </TabList>

        <TabPanel className="w-full  pt-1 px-2">
          <div className="panel-content">
         <section>
         <div className='w-100 login '>
              
              <Container className='w-100 h-100 position-absolute  align-items-center justify-content-end mt-4'>
                  <form className='popupcss w-100 h-100  align-items-center justify-content-end'>
                      <Paper className={clsx(!(mobileWidth || tabletWidth) && 'w-40', tabletWidth && 'w-60', mobileWidth && 'w-95 m-auto', 'pl-4 pr-4 pt-4 pb-4 mr-5')}>
                          <div className='mb-3 pt-2 '>
                              <p className='profile-head '>
                              Edit your profile
                              </p>
                          </div>
                          <div className="form-group ">
                                <img src={userimg} />
                                <br></br>

                              <label className='label text-left aligntxt1' htmlFor="exampleInputEmail1" >First Name</label>
                          
                              <input type="email " className="input" aria-describedby="emailHelp" placeholder="Please enter your First Name" 
                              
                                       
                                         />
                          </div>

                          <div className="form-group">
                              <label className='label text-left aligntxt1' htmlFor="exampleInputEmail1">Last Name</label>
                          
                              <input type="email" className="input" aria-describedby="emailHelp" placeholder="Please enter your Last Name" 
                              
                                       
                                         />
                          </div>
                         {/*  <div className="form-group">
                              <label className='label' htmlFor="exampleInputPassword1">Password</label>
                              <div className="input-group mb-3">

                              <input type="password" className="form-control input" placeholder="Enter password"
                                               
                                  

                                  />

                                  
                              </div>
                          </div> */}
<div class="row">
    <div class="col-sm-12 text-center">
    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
    &nbsp;  &nbsp;    &nbsp;  &nbsp;  <button id="btnSearch" class="cancelbtn btn-dangerr btn-md center-block" Style="width: 100px;" OnClick="btnSearch_Click" >Cancel</button>
       &nbsp;  <button id="btnClear" class=" login-btn" Style="width: 100px;" OnClick="btnClear_Click" >Save</button>
     </div>
</div>
                      
                         
                        
                      </Paper>
                  </form>
              </Container>
          </div>
         </section>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <div className='w-100 login '>
              
                <Container className='w-100 h-100 position-absolute align-items-center justify-content-end mt-4'>
                    <form className='w-100 h-100 align-items-center justify-content-end'>
                        <Paper className={clsx(!(mobileWidth || tabletWidth) && 'w-40', tabletWidth && 'w-60', mobileWidth && 'w-95 m-auto', 'pl-4 pr-4 pt-4 pb-4 mr-5')}>
                            <div className='mb-3 pt-2'>
                                <p className='profile-head'>
                                Change email address
                                </p>
                            </div>
                            <div className="form-group">
                                <label className='newemaillabel' htmlFor="exampleInputEmail1">New Email Address</label>
                            
                                <input type="email" className="input" aria-describedby="emailHelp" placeholder="Please enter your email" 
                                
                                         
                                           />
                            </div>
                            <div className="form-group">
                                <label className='changeemaillabel' htmlFor="exampleInputEmail1">Confirm New Email Address</label>
                            
                                <input type="email" className="input" aria-describedby="emailHelp" placeholder="Please enter your email" 
                                
                                         
                                           />
                            </div>
                            <div class="col-sm-12 text-center">
    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
    &nbsp;  &nbsp;    &nbsp;  &nbsp;  <button id="btnSearch" class="cancelbtn btn-dangerr btn-md center-block" Style="width: 100px;" OnClick="btnSearch_Click" >Cancel</button>
       &nbsp;  <button id="btnClear" class=" email-btn" Style="width: 100px;" OnClick="btnClear_Click" >Save</button>
     </div>
                         
                           
                           
                          
                        </Paper>
                    </form>
                </Container>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <div className='w-100 login '>
              
              <Container className='w-100 h-100 position-absolute align-items-center justify-content-end mt-4'>
                  <form className='w-100 h-100 align-items-center justify-content-end'>
                      <Paper className={clsx(!(mobileWidth || tabletWidth) && 'w-40', tabletWidth && 'w-60', mobileWidth && 'w-95 m-auto', 'pl-4 pr-4 pt-4 pb-4 mr-5')}>
                          <div className='mb-3 pt-2'>
                              <p className='profile-head'>
                              Change password
                              </p>
                          </div>
                          <div className="form-group">
                              <label className='oldpwdlabel' htmlFor="exampleInputPassword1">Old Password</label>
                              <div className="input-group mb-3">

                              <input type="password" className="form-control input" placeholder="Enter password"
                                               
                                  

                                  />

                                  
                              </div>
                          </div>
                          <div className="form-group">
                              <label className='newpwdlabel' htmlFor="exampleInputPassword1">New Password</label>
                              <div className="input-group mb-3">

                              <input type="password" className="form-control input" placeholder="Enter password"
                                               
                                  

                                  />

                                  
                              </div>
                          </div>
                          <div className="form-group">
                              <label className='cnfnpwdlabel' htmlFor="exampleInputPassword1">Confirm New Password</label>
                              <div className="input-group mb-3">

                              <input type="password" className="form-control input" placeholder="Enter password"
                                               
                                  

                                  />

                                  
                              </div>
                          </div>
                         <div class="col-sm-12 text-center">
    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
    &nbsp;  &nbsp;    &nbsp;  &nbsp;  <button id="btnSearch" class="cancelbtn btn-dangerr btn-md center-block" Style="width: 100px;" OnClick="btnSearch_Click" >Cancel</button>
       &nbsp;  <button id="btnClear" class=" email-btn" Style="width: 100px;" OnClick="btnClear_Click" >Save</button>
     </div>
                       
                         
                         
                        
                      </Paper>
                  </form>
              </Container>
          </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <div className='w-100 login '>
              
              <Container className='w-100 h-100 position-absolute align-items-center justify-content-end mt-4'>
                  <form className='w-100 h-100 align-items-center justify-content-end'>
                      <Paper className={clsx(!(mobileWidth || tabletWidth) && 'w-40', tabletWidth && 'w-60', mobileWidth && 'w-95 m-auto', 'pl-4 pr-4 pt-4 pb-4 mr-5')}>
                          <div className='mb-3 pt-2'>
                              <p className='profile-head'>
                             Change Language
                              </p>
                          </div>
                       
                          <div className="form-group">
                              <label className="langalign" >Language</label>
                              <select className="selectcss">
                            <option value="en">English</option>
                            <option value="ar">Arabic</option>
                            <option value="fr">French</option>
                            </select>  
                          </div>
                          <div class="col-sm-12 text-center">
    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
    &nbsp;  &nbsp;    &nbsp;  &nbsp;  <button id="btnSearch" class="cancelbtn btn-dangerr btn-md center-block" Style="width: 100px;" OnClick="btnSearch_Click" >Cancel</button>
       &nbsp;  <button id="btnClear" class=" email-btn" Style="width: 100px;" OnClick="btnClear_Click" >Save</button>
     </div>
                         
                         
                         
                        
                      </Paper>
                  </form>
              </Container>
          </div>
          </div>
        </TabPanel>
     {/*    <TabPanel>
          <div className="panel-content">
          <div className='w-100 login '>
              
              <Container className='w-100 h-100 position-absolute d-flex align-items-center justify-content-end mt-4'>
                  <form className='w-100 h-100 d-flex align-items-center justify-content-end'>
                      <Paper className={clsx(!(mobileWidth || tabletWidth) && 'w-40', tabletWidth && 'w-60', mobileWidth && 'w-95 m-auto', 'pl-4 pr-4 pt-4 pb-4 mr-5')}>
                          <div className='mb-3 pt-2'>
                              <p className='login-head'>
                              Language
                              </p>
                          </div>
                          <div className="form-group">
                              <label className='label' htmlFor="exampleInputEmail1">Email</label>
                          
                              <input type="email" className="input" aria-describedby="emailHelp" placeholder="Please enter your email" 
                              
                                       
                                         />
                          </div>
                          <div className="form-group">
                              <label className='label' htmlFor="exampleInputPassword1">Password</label>
                              <div className="input-group mb-3">

                              <input type="password" className="form-control input" placeholder="Enter password"
                                               
                                  

                                  />

                                  
                              </div>
                          </div>
                          <button className="login-btn mt-4 mb-2 cursor-pointer" >
                              Login
                          </button>
                       
                         
                         
                        
                      </Paper>
                  </form>
              </Container>
          </div>
          </div>
        </TabPanel> */}
      </Tabs>
    </div>
    </div>

  )
}

export default Settings