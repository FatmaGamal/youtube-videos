import React from 'react';

import VideoItem from './VideoItem';

const VideoList = (/* props */ {videos, onVideoSelect}) => {
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoListSelect={onVideoSelect} video={video}/>
    })

    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    );
};

export default VideoList;