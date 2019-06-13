import React, { Component } from 'react'
import api from '../services/api'
import io from 'socket.io-client'

import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component {

   state = {
      feed: [],
   }

   async componentDidMount() {
      this.registerToSocket()

      const response = await api.get('posts')

      this.setState({ feed: response.data })
   }

   handleLike = id => {
      api.post(`/Posts/${id}/like`)
   }

   registerToSocket = () => {
      const socket = io('htpp://localhost:4000')

      socket.on('post', newPost => {
         this.setState({ feed: [newPost, ...this.state.feed] })
      })

      socket.on('like', likePost => {
         this.setState({
            feed: this.state.feed.map(post => 
               post._id === likePost.id ? likePost : post
            )
         })
      })
   }

   render() {
      return (
         <section id="post-list">
            {this.state.feed.map(post => (

               <article key={post._id}>
                  <header>
                     <div className="user-info">
                        <span>{post.author}</span>
                        <span className="place">{post.place}</span>
                     </div>
                     <img src={more} alt="Mais" />
                  </header>

                  <img src={`http://localhost:4000/files/${post.image}`} alt="Descrição da Imagem" />

                  <footer>
                     <div className="actions">
                        <button type="button" onClick={() => this.handleLike(post._id)}>
                           <img src={like} alt="Like" />
                        </button>
                        <img src={comment} alt="comment" />
                        <img src={send} alt="send" />
                     </div>
                     <strong>{post.likes}</strong>
                     <p>
                        {post.description}
                        <span>{post.hashtags}</span>
                     </p>
                  </footer>
               </article>
            ))}
         </section>
      )
   }
}

export default Feed