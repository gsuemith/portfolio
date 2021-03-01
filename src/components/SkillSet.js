import React from 'react'
import styled from 'styled-components'

import SkillCard from './SkillCard'

const Skills = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`

const SkillSet = () => {
  return (
    <Skills>
      <SkillCard/>
      <SkillCard/>
      <SkillCard/>
    </Skills>
  )
}

export default SkillSet
