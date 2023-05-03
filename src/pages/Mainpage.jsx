import React from 'react'
import MainBanner from './MainBanner/MainBanner'
import Box1 from './Box1/Box1'
import Box2 from './Box2/Box2'
import PublicAnnouncement from './Box3/PublicAnnouncement'
import Communication from './Box3/Communication'
import Complaints from './Box4/Complaints'
import Gesifan from './Box4/Gesifan'
import Cctv from './Box5/Cctv'
import MainFooter from '../components/MainFooter'
import $ from 'jquery';
import { animated } from '@react-spring/web'


const Mainpage = () => {
  return (
    <div>
      <MainBanner/>
      <Box1/>
      <Box2/>
      <PublicAnnouncement/>
      <Communication/>
      <Complaints/>
      <Gesifan/>
      <Cctv/>
      <MainFooter/>
    </div>
  )
}

export default Mainpage