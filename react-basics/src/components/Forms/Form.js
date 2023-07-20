import React, { Component } from 'react';

class Form extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        userName: '',
        comments:'',
        topic:'react'
     };
   };
   
   handleUsernameChange = (e) => {
      this.setState({...this.state, userName: e.target.value})
   }

   handleComments = (e) => {
      this.setState({...this.state, comments: e.target.value})
   }

   handleTopicChange = (e) => {
      this.setState({...this.state, topic: e.target.value})
   }
   
   handleSubmit = (e) => {
      alert(`${this.state.userName}  ${this.state.comments}  ${this.state.topic}` )
      e.preventDefault()
   }

   render() {
      const {userName, comments, topic} = this.state
      return (
         <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
               <label>Username </label>
               <input type="text" value={userName} onChange={(e) => this.handleUsernameChange(e)}/>
            </div>
            <div>
               <label>Comments</label>
               <textarea value={comments} onChange={(e) => {this.handleComments(e)}}></textarea>
            </div>
            <div>
               <label>Topics</label>
               <select style= {{width:'40%'}} value={topic} onChange={(e) => {this.handleTopicChange(e)}}>
                  <option value="react">React</option>
                  <option value="angular">Angular</option>
                  <option value="vue">Vue</option>
               </select>
            </div>
            <button type='submit'>submit</button>
         </form>
      );
   }
}

export default Form;