import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

const VideoPlayer = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    // Fetch video details using the YouTube Data API
    const fetchVideoInfo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`,
          {
            params: {
              part: 'snippet',
              id: videoId,
              key: 'AIzaSyCIsvZmX7I4f4d0qn3qtv5UF2LUrZyCH8Y', // Replace with your actual API key
            },
          }
        );

        setVideoInfo(response.data.items[0].snippet);
      } catch (error) {
        console.error('Error fetching video info:', error);
      }
    };

    fetchVideoInfo();
  }, [videoId]);

  const onReady = (event) => {
    // You can do something when the player is ready, if needed
  };

  const onStateChange = (event) => {
    // You can handle player state changes here if needed
  };

  return (
    <div>
      {videoInfo && (
        <div>
          <h2>{videoInfo.title}</h2>
          <p>{videoInfo.description}</p>
        </div>
      )}
      <YouTube
        videoId={videoId}
        onReady={onReady}
        onStateChange={onStateChange}
      />
    </div>
  );
};

export default VideoPlayer;
