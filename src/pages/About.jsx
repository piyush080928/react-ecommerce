import React from "react";
import Paper from "../AboutComponents/Paper";
import Feature from "../AboutComponents/Feature";
import Foot from '../AboutComponents/Footer'

function About() {
  return(
   <div className="w-full bg-red-50 h-[400vh]">
      <Paper></Paper>
      <Feature></Feature>
      <Foot></Foot>
   </div>
  )
}

export default About