import React from 'react'

import SkillSet from '../components/SkillSet'

const Home = () => {
  return (
    <div>
      <div className="skew">
        <br/>
        <div className="intro">
          <div className="identity">
            <h1>Garrick Suemith</h1>
            {/*  https://i.picsum.photos/id/659/200/200 */}
            <img src="https://picsum.photos/id/659/200/200"/>
          </div>
          
          <div>
            <h2>Hello, I'm a <br/>Front End<br/>Engineer</h2>
          </div>
          <SkillSet />
        </div>
      </div>
      
    </div>
  )
}

export default Home
