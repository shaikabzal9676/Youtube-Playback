import React from 'react';
import VideoPlayer from './VideoPlayer';

import './app.css'
const App = () => {
  
  const videoId = 'AeotmhavO8g';

  return (
    <div className='container'>
      <h1>Custom YouTube Video Player</h1>
      <VideoPlayer videoId={videoId} />
    </div>
  );
};

export default App;
