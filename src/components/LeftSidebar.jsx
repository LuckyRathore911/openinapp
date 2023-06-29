import React from 'react'

import '../styles/leftSidebar.css'
import dashboard from '../assets/dashboard_icon.svg'
import transaction from '../assets/transaction_icon.svg'
import schedule from '../assets/schedule_icon.svg'
import user from '../assets/user_icon.svg'
import setting from '../assets/setting_icon.svg'

const LeftSidebar = () => {
  return (
    <div className='left-side-bar-main'>

      {/* <div className="left-side-bar-auth">
        <h1 className='auth-left-heading'>Board.</h1>
      </div> */}
      
      <div className='left-side-bar-dash'>
        <h1 className='dash-left-heading'>Board.</h1>
        
        <div className='bullet-div'>
            <img src={dashboard} alt="dashboard" width='18'></img>
            <h4 className='bullet'>Dashboard</h4>
        </div>

        <div className='bullet-div'>
            <img src={transaction} alt="transaction" width='18'></img>
            <h4 className='bullet'>Transactions</h4>
        </div>

        <div className='bullet-div'>
            <img src={schedule} alt="schedule" width='18'></img>
            <h4 className='bullet'>Schedules</h4>
        </div>

        <div className='bullet-div'>
            <img src={user} alt="user" width='18'></img>
            <h4 className='bullet'>Users</h4>
        </div>

        <div className='bullet-div'>
            <img src={setting} alt="setting" width='18'></img>
            <h4 className='bullet'>Settings</h4>
        </div>

        <div className='footer-div'>
            <h6>Help</h6>
            <h6>Contact Us</h6>
        </div>

      </div>

    </div>
  )
}

export default LeftSidebar
