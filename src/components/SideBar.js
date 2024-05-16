import React, { useState } from 'react'
import './sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import profile from './profile.jpg'
import { faCircleChevronDown, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons';
import { BiRightArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";

const SideBar = () => {
    const [businessCardClicked ,setBusinessCardClicked] = useState(false)
    const [isSetBtnClicked, setIsSetBtnClicked] = useState(false);

    const handleBusinesscard = () => {
        setBusinessCardClicked(!businessCardClicked)
        // if(businessCardClicked == false)
        //     setBusinessCardClicked(true)
        // else
        //     setBusinessCardClicked(false)
    } 
    const handleSetClick = () => {
        if(isSetBtnClicked == false)
            setIsSetBtnClicked(true)
        else
            setIsSetBtnClicked(false)
    } 
  return (
    <div className='sideBar'>
        <section className='sideMenu-top'>
            <div className="logo">

            </div>
            <div className="project">
                <div className="proj-name">
                    <p>Business Name</p>
                    <p>Project Name</p>
                </div>
                <div>
                    {/* <FontAwesomeIcon className='downArrow' icon={faCircleChevronDown} /> */}
                    
                    <BiDownArrow className={businessCardClicked ? "hide" : "downArrow"} onClick={handleBusinesscard}/>
                    <BiRightArrow className={businessCardClicked ? "rightArrow" : "hide"} onClick={handleBusinesscard}/>
                </div>
                
            </div>
        </section>
        <div className={businessCardClicked ? "business-name-card" : "hide"}>
            <div className="business-name-card-top">
            <h5>Business <br />Name</h5>
            <button className='free-btn'>FREE</button>
            <div className="icon1">
                <FontAwesomeIcon icon={faGear}/>
            </div>
            <div className="icon2">
                <FontAwesomeIcon icon={faPlus}/>
            </div>
            </div>
            <input type="text" placeholder='Project Name' className='ProjName' />
            <hr />
            <button type="button" class="btn btn-primary ">Browse all</button>
        </div>
        <section className='sideMenu-middle'>
            <nav>
                <ul>
                    <li><Link to='#' className='SideMenu-list'>Dashboard</Link></li>
                    <li><Link to='#' className='SideMenu-list'>Workflows</Link></li>
                    <li><Link to='#' className='SideMenu-list'>Executions</Link></li>
                    <li><Link to='#' className='SideMenu-list'>Ad hoc Execution</Link></li>
                    <li><Link to='#' className='SideMenu-list'>Schedules</Link></li>
                    <li><Link to='#' className='SideMenu-list'>Reports</Link></li>
                    <li><Link to='#' className='SideMenu-list'>Vault</Link></li>
                    <li><Link to='#' className='SideMenu-list'>Devices</Link></li>
                    {/* <Accordion className='accordion' defaultActiveKey="0">
                        <Accordion.Item className='accordion-item' eventKey="0">
                            <Accordion.Header className='accordion-header'>Settings</Accordion.Header>
                            <Accordion.Body className='accordion-body'>
                            <Link to='#' className='SideMenu-list'>General</Link>
                            <Link to='#' className='SideMenu-list'>General</Link>
                            <Link to='#' className='SideMenu-list'>General</Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion> */}
                    <li><Link to='#' className='SideMenu-list setting'>Settings
                            <div>
                            <BiRightArrow className={isSetBtnClicked ? "hide" : "rightArrow"} onClick={handleSetClick}/>
                            <BiDownArrow className={isSetBtnClicked ? "downArrow" : "hide"} onClick={handleSetClick}/>
                            {/* <FontAwesomeIcon className='rgtArrow' icon={faCircleChevronRight} /> */}
                            </div>
                        </Link>
                    </li>
                    <div className={isSetBtnClicked ? 'setting-sub' : 'hide'}>
                        <Link to='#' className='SideMenu-list '>General</Link>
                        <Link to='#' className='SideMenu-list '>Account Settings</Link>
                        <Link to='#' className='SideMenu-list '>On-Prem Executor</Link>
                        
                    </div>
                    
                    {/* <li><Link to='#' className='SideMenu-list setting-sub'>General</Link></li>
                    <li><Link to='#' className='SideMenu-list setting-sub'>Account Settings</Link></li>
                    <li><Link to='#' className='SideMenu-list setting-sub'>On-Prem Executor</Link></li> */}
                </ul>
            </nav>
        </section>
        <section className='sideMenu-bottom'>
            <div className="help">
                <FontAwesomeIcon className='question-icon' icon={faCircleQuestion} />
                <p>Help</p>
                <FontAwesomeIcon className='rgtArrow' icon={faCircleChevronRight} />
            </div>
            <div className="profile">
                <img src={profile} alt="profile" />
                <section className='profile-name'>
                    <p>Ramanan AR</p>
                    <p>ramanan@gmail.com</p>
                </section>
                <FontAwesomeIcon className='rgtArrow profile-arrow' icon={faCircleChevronRight} />
            </div>
        </section>
            
    </div>
  )
}

export default SideBar