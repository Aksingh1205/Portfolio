import React from 'react'

const Footer = () => {
  return (
    <footer className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/Aksingh1205" target="_blank" className='twitter' >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" align="center"/>
          </a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/Arpit_Singh12" target="_blank" className='twitter'>
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon2">
          <a href="https://www.linkedin.com/in/arpit-kumar-singh-1a2126202/" target="_blank" className='twitter'>
          <img src="/assets/linkedin2.svg" alt="linkedin" className="w-1/2 h-1/2" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Arpit Kumar Singh. All rights reserved.</p>
    </footer>
  )
}

export default Footer