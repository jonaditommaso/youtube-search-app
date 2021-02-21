import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import youtube from '../APIs/youtube';
import VideoList from '../Components/VideoList';
import VideoDetail from '../Components/VideoDetail';
import { KEY } from '../utils/keys';

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  
  useEffect(() => {
    onTermSubmit('')
    
  }, [])

  const onTermSubmit = async term => {
      const response = await youtube.get("/search", {
        params: {
          q: term,
          part: "snippet",
          type: 'video',
          maxResults: 10,
          key: KEY
        }
      });
      setVideos(response.data.items )
      setSelectedVideo(response.data.items[0])
  };
  

    return ( 
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                  <VideoDetail video={selectedVideo} />
                </div>
                <div className="five wide column">
                  <VideoList 
                    onVideoSelect={video => setSelectedVideo(video)}
                    videos={videos} />
                </div>
              </div>
            </div>
        </div>
   );
}
 
export default App;
