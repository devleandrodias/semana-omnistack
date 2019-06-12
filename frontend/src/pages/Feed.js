import React, { Component } from 'react'

import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component {
   render() {
      return (
         <section id="post-list">
            <article>

               <header>
                  <div className="user-info">
                     <span>Diego Fernandes</span>
                     <span className="place">My Home</span>
                  </div>
                  <img src={more} alt="Mais" />
               </header>

               <img src="http://localhost:4000/files/lg_ultrawide_curved_monitor_keyboard_computer_desk_design-wallpaper-2048x1152.jpg" alt="Monitor Lg" />

               <footer>
                  <div className="actions">
                     <img src={like} alt="Like" />
                     <img src={comment} alt="comment" />
                     <img src={send} alt="send" />
                  </div>
                  <strong>900 curtidas</strong>
                  <p>
                     Um monitor muito massa!
                     <span>#Lg #HomeOffice</span>
                  </p>
               </footer>
            </article>
         </section>
      )
   }
}

export default Feed