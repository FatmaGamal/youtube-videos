import React, {useEffect, useState} from 'react';

import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtube from './../apis/youtube'
import VideoDetail from './VideoDetail'

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onTermSubmit('undertale flowey encounter');
    }, []);

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0])
    }

    const onVideoSelect = (video) => {
        setSelectedVideo(video)
    }

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit}/>
            {/* I have {this.state.videos.length} videos */}
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column"><VideoDetail video={selectedVideo}/></div>
                    <div className="five wide column"><VideoList onVideoSelect={onVideoSelect} videos={videos}/></div>
                </div>
            </div>
        </div>
        );
}

export default App;