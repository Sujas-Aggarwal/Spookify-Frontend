import React, { useContext } from 'react'
import { MyContext } from './my-context'
function LeftPlayer() {
  const {currSong,setCurrSong} = useContext(MyContext)
  return (
    <iframe
    id="frame"
    className='absolute bottom-0 left-0'
    style={{ borderRadius: "12px" }}
    src="https://open.spotify.com/embed/track/7JJmb5XwzOO8jgpou264Ml?utm_source=generator"
    width="34%"
    height="152"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
  )
}

export default LeftPlayer
