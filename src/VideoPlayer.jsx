import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

const VideoPlayer = ({ videoId }) => {

  const [videoData, setVideoData] = useState(null);

useEffect(() => {
    const fetchData = async () => {
      try {
     
        const apiKey = 'AIzaSyCIsvZmX7I4f4d0qn3qtv5UF2LUrZyCH8Y';
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails`
        );

        if (response.data.items.length > 0) {
          setVideoData(response.data.items[0]);
        } else {
          console.error('Video not found');
        }
      } catch (error) {
        console.error('Error fetching video data', error);
      }
    };

    fetchData();
  }, [videoId]);

  const opts = {
    height: '390',
    width: '780',

    playerVars: {
      autoplay: 0,
    },
  };


  return (
    <div >
      {videoData && (
        <div className='videoStyle'>
          <h3>{videoData.snippet.title}</h3>
          <YouTube videoId={videoId} opts={opts} />
        </div>
      )}
    </div>
  );
};





export default VideoPlayer;
