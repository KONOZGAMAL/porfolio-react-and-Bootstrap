import React from 'react'
import '../../App.css'
export default function About() {
  return (
        <section className="about" id="about">
            <div className="about_container">
                <div className="about_part_1 about_img">
                <h2 className="about_subtitle">About Me</h2>
                </div>
                <div className="about_part_2">
                    <h2 className="about_subtitle">I'am Katie Reed</h2>
                    <small className="about_profession">Front End Developer & Designer</small>
                    <p className="about_text"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Enim, omnis quo mollitia, ut quia, quas commodi modi aliquam accusantium officia error atque ex magnam!
                     Eveniet quibusdam tenetur minima exercitationem animi.
                    </p>
                    <a href='/' className='btn-main'>Download CV</a>
                </div>
            </div>
        </section>
  )
}