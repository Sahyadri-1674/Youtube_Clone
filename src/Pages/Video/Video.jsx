import React from 'react'
import styles from './Video.module.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
function Video() {
  const {videoId,categoryId} = useParams();
  return (
    <div className={styles["play-container"]}>
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
}

export default Video
