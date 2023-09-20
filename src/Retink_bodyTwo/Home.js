import React, { useState } from 'react';
// importing assets
import logo from '../Asset/retinkLogo_prev_ui.png'

//importing all thr components need 
import Head from './body/Head'
import Body from './body/miniTabs'
import StepOne from './sideNav/upperNav';
import StepTwo from './sideNav/LowerNav';
import Setting from './sideNav/Setting';
import Nav from './Nav/Nav';

// importing external styleing
import './retik.css'

//importing all the icons 
import { FaHouzz } from 'react-icons/fa';
import { GrFormSchedule } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';
import {BiExit} from 'react-icons/bi'






//stating variables for icons
let House = <FaHouzz />
let Date = <GrFormSchedule />
let Sett = <FiSettings />
let Exit = <BiExit />

const steps = [
  { id: 1, label: '1', logo: House, component: <StepOne /> },
  { id: 2, label: '2', logo: Date, component: <StepTwo /> },
];

const Steps = [
    { id: 3, label: '3', logo: Sett  , component: <Setting /> },
    { id: 4, label: '4', logo: Exit  , component: <Exit/> },
]

function Home() {
  const [currentStep, setCurrentStep] = useState(0);
//   const [formData, setFormData] = useState({
//     step1Field: '',
//     step2Field: '',
//     step3Field: '',
//   });

  const handleStepChange = (stepId) => {
    setCurrentStep(stepId - 1);
  };


  return (
    <div className="multi-step-form">
      <div className='form-cont'>
              <div className="side-navigation">
            <img src={logo} alt='retink logo' />
        <ul>
          {steps.map((step) => (
            <li
              key={step.id}
              className={currentStep === step.id - 1 ? 'active' : ''}
              onClick={() => handleStepChange(step.id)}
            >
              <button className={currentStep === step.id - 1 ? 'activee' : ''} onClick={() => handleStepChange(step.id)}>{step.logo}</button>
              <p className='para'>{step.lab}</p>
              <p className='par'><b>{step.name}</b></p>
            </li>
          ))}
    </ul>
    <ul>
        {Steps.map((step) => (
            <li
              key={step.id}
              className={currentStep === step.id - 1 ? 'active' : ''}
              onClick={() => handleStepChange(step.id)}
            >
              <button className={currentStep === step.id - 1 ? 'activee' : ''} onClick={() => handleStepChange(step.id)}>{step.logo}</button>
              <p className='para'>{step.lab}</p>
              <p className='par'><b>{step.name}</b></p>
            </li>
          ))}
    </ul>
      </div>
        <div className="home-cont">
            <Nav />
            <div className="body">
                    <div className="welcome">
                        <Head />
                    </div>
                    <div className="tabs">
                        <Body />
                    </div>
            </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
