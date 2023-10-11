import {createSlice} from "@reduxjs/toolkit"
import clap from "../../aud/soundsHeater/Clap.mp3"
import closedHH from "../../aud/soundsHeater/Closed-HH.mp3"
import heater1 from "../../aud/soundsHeater/Heater1.mp3"
import heater2 from "../../aud/soundsHeater/Heater2.mp3"
import heater3 from "../../aud/soundsHeater/Heater3.mp3"
import heater4 from "../../aud/soundsHeater/Heater4.mp3"
import kickNHat from "../../aud/soundsHeater/Kick_n_Hat.mp3"
import kick from "../../aud/soundsHeater/Kick.mp3"
import openHH from "../../aud/soundsHeater/Open-HH.mp3"

import chord1 from "../../aud/soundsPiano/Chord1.mp3";
import chord2 from "../../aud/soundsPiano/Chord2.mp3"
import chord3 from "../../aud/soundsPiano/Chord3.mp3"
import closedHHPiano from "../../aud/soundsPiano/ClosedHH.mp3"
import openHHPiano from "../../aud/soundsPiano/OpenHH.mp3"
import punchyKick from "../../aud/soundsPiano/punchykick.mp3"
import shaker from "../../aud/soundsPiano/shaker.mp3"
import sidestick from "../../aud/soundsPiano/sidestick.mp3"
import snare from "../../aud/soundsPiano/Snare.mp3"


const initialState = [
  {
    Heater: [
      {
        id:"1",
        title:"Heater 1",
        audio:heater1,
        letter: "Q", 
        // volume:volume,
      },
      {
        id:"2",
        title:"Heater 2",
        audio:heater2,
        letter: "W", 
        // volume:volume,
      },
      {
        id:"3",
        title:"Heater 3",
        audio:heater3,
        letter: "E", 
        // volume:volume,
      },
      {
        id:"4",
        title:"Heater 4",
        audio:heater4,
        letter: "A", 
        // volume:volume,
      },
      {
        id:"5",
        title:"Clap",
        audio:clap,
        letter: "S", 
        // volume:volume,
      },
      {
        id:"6",
        title:"Open HH",
        audio:openHH,
        letter: "D", 
        // volume:volume,
      },
      {
        id:"7",
        title:"Kick n' Hat",
        audio:kickNHat,
        letter: "Z", 
        // volume:volume,
      },
      {
        id:"8",
        title:"Kick",
        audio:kick,
        letter: "X", 
        // volume:volume,
      },
      {
        id:"9",
        title:"Closed HH",
        audio:closedHH,
        letter: "C", 
        // volume:volume,
      },
    ]
  },
  {
    Piano: [
      {
        id:"1",
        title:"Heater 1",
        audio:chord1,
        letter: "Q", 
        // volume:volume,
      },
      {
        id:"2",
        title:"Heater 2",
        audio:chord2,
        letter: "W", 
        // volume:volume,
      },
      {
        id:"3",
        title:"Heater 3",
        audio:chord3,
        letter: "E", 
        // volume:volume,
      },
      {
        id:"4",
        title:"Heater 4",
        audio:closedHHPiano,
        letter: "A", 
        // volume:volume,
      },
      {
        id:"5",
        title:"Clap",
        audio:openHHPiano,
        letter: "S", 
        // volume:volume,
      },
      {
        id:"6",
        title:"Open HH",
        audio:punchyKick,
        letter: "D", 
        // volume:volume,
      },
      {
        id:"7",
        title:"Kick n' Hat",
        audio:shaker,
        letter: "Z", 
        // volume:volume,
      },
      {
        id:"8",
        title:"Kick",
        audio:sidestick,
        letter: "X", 
        // volume:volume,
      },
      {
        id:"9",
        title:"Closed HH",
        audio:snare,
        letter: "C", 
        // volume:volume,
      },
    ]
  }
]

const accessories = createSlice({
  name:"accessories",
  initialState,
  reducers: {
    
  }
})


export const accessoriesSlice = accessories.reducer;
