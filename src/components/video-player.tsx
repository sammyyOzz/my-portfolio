import React from "react";

interface VideoPlayerProps {
  url: string;
  [anyProp: string]: any;
}

function VideoPlayer({ url, ...props }: VideoPlayerProps) {
  return (
    <video 
      src={url} 
      controls
      autoPlay
      muted 
      loop 
      style={{ 
        // width: '100%',
        height: '100%',
        cursor: "pointer"
      }}
      {...props}
    />
  )
}

export default VideoPlayer