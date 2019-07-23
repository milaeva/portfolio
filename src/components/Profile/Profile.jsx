import React from 'react';
import nav from './Profile.module.css';

const Profile = () =>{
  return(
    <div className="container">
      <div className={nav.col1}>
        <h4 className={nav.subtitle}>Frontend development</h4>
        <p className={nav.text}>is a new level of development in my life. On this train, I from August 2018. During this time I managed to write enough code to realize: did I make the right choice?! - Yes. I`m happy!</p>
      </div>
      <div className={nav.col2}>
        <h4 className={nav.subtitle}>I`m happy!</h4>
        <p className={nav.text2}>I believe that in dependent I will reach the level of the team leader, and I will be able to share experiences and support those who are not yet strong in their steps when writing code.</p>
      </div>
      <div className={nav.col3}>
        <p className={nav.text}></p>
      </div>
    </div>
  )
}

export default Profile;