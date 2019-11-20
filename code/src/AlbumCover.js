
import React from 'react'
import data from './data.json'


export const AlbumCover = () => {
  return (
    <div>
    {data.albums.items.map(item => {
      return <div className="Album" key={item.id}>
        {/* Album buttons */}
          
        {/* Album cover */}
        <div className="AlbumCover">
          <div className="Icons">
            <img src="https://www.searchpng.com/wp-content/uploads/2019/09/Play-icon-isolated-button-PNG-715x715.jpg" alt="Play button"></img>
          </div>
          <img src={item.images[1].url} alt="Album cover"></img>
          
        </div>
          {/* Album info */}
          <a href={item.external_urls.spotify}>{item.name}</a>
          <br></br>
         <a href={item.artists[0].external_urls.spotify}>{item.artists[0].name}</a>
        </div>;
    })}
    </div>
  )
}