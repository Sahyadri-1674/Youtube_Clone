import React, { useEffect, useState } from "react";
import styles from "./PlayVideo.module.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { API_KEY, value_converter } from "../../../data";
import moment from "moment";
import DOMPurify from "dompurify";

const PlayVideo = ({ videoId }) => {

 const [apiData, setApiData] = useState(null);
 const [channelData, setChannelData] = useState(null);
 const [commentData, setCommentData] = useState([]);

 const fetchChannelData = async (channelId) => {
   try {
     const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;
     const res = await fetch(channelDetails_url);
     const data = await res.json();
     setChannelData(data.items[0]);
   } catch (error) {
     console.error("Error fetching channel data: ", error);
   }
 };

 const fetchCommentData = async () => {
   try {
     const commentDetails_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
     const res = await fetch(commentDetails_url);
     const data = await res.json();
     setCommentData(data.items);
   } catch (error) {
     console.error("Error fetching comment data: ", error);
   }
 };

 const fetchVideoData = async () => {
   try {
     const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
     const res = await fetch(videoDetails_url);
     const data = await res.json();
     console.log(data);
     setApiData(data.items[0]);
   } catch (error) {
     console.error("Error fetching video data: ", error);
   }
 };

 useEffect(() => {
   fetchVideoData();
 }, [videoId]);

 useEffect(() => {
   if (apiData) {
     fetchChannelData(apiData.snippet.channelId);
     fetchCommentData();
   }
 }, [apiData]);

//  const formatDescription = (description) => {
//    return { __html: description.replace(/\n/g, "<br />") };
//  };
 const sanitizeDescription = (description) => {
   return DOMPurify.sanitize(description.replace(/\n/g, "<br />"));
 };

  return (
    <div className={styles["play-video"]}>
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className={styles["play-video-info"]}>
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "16K"}{" "}
          views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={like} alt="" />{" "}
            {apiData ? value_converter(apiData.statistics.likeCount) : "125"}
          </span>
          <span>
            <img src={dislike} alt="" /> 32
          </span>
          <span>
            <img src={share} alt="" /> Share
          </span>
          <span>
            <img src={save} alt="" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className={styles.publisher}>
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "BolBhidu"}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "1M"}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className={styles["vid-description"]}>
        <p
          dangerouslySetInnerHTML={
            apiData
              ? { __html: sanitizeDescription(apiData.snippet.description) }
              : { __html: "Description Here" }
          }
        ></p>
        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : 102}{" "}
          comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className={styles.comment}>
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3>
                  {" "}
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                  <span>1 day ago</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className={styles["comment-action"]}>
                  <img src={like} alt="" />{" "}
                  <span>
                    {value_converter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;





//   const [apiData, setApiData] = useState(null);
//   const [channelData, setChannelData] = useState(null);
//   const [commentData, setCommentData] = useState([]);

//   const fetchChannelData = async () => {
//     const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
//     await fetch(channelDetails_url)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setChannelData(data.items[0])});

//     const commentDetails_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
//     await fetch(commentDetails_url)
//       .then((res) => res.json())
//       .then((data) => setCommentData(data.items));
//   };

//   const fetchVideoData = async () => {
//     //fetching videos data
//     const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
//     await fetch(videoDetails_url)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data)
//         setApiData[data.items[0]]});
//   };

//   useEffect(() => {
//     fetchVideoData();
//   }, []);

//   useEffect(() => {
//     fetchChannelData();
//   }, [apiData]);