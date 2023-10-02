import React from 'react';
import '../../App.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Contact() {
  return (
    <div>
<footer className="bg-dark text-center text-white">
  <div className="container p-4 pb-0">

    <section className="mb-4">

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        >
          <FacebookIcon/>
        </a>


      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><GitHubIcon/></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        >
      <LinkedInIcon/>
      </a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><TwitterIcon/></a>
    </section>

  </div>

  <div className="text-center p-3">
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
    </div>
  )
}
