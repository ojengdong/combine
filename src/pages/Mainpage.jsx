import React from 'react'
import MainBanner from './MainBanner/MainBanner'
import Box1 from './MainPage1/Box1'
import Box2 from './MainPage2/Box2'
import PublicAnnouncement from './MainPage3/PublicAnnouncement'
import Communication from './MainPage3/Communication'
import Complaints from './MainPage4/Complaints'
import Gesifan from './MainPage4/Gesifan'
import Cctv from './MainPage5/Cctv'
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