import React from "react";

interface VideoPlayerProps {
  url: string;
}

function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <video 
      src={url} 
      controls
      autoPlay
      muted 
      loop 
      style={{ 
        width: '100%',
        height: 'auto'
      }}
    />
  )
}

export default VideoPlayer