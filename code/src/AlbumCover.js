import React from 'react'
import data from './data.json'


export const AlbumCover = (prop) => (
  <div className="Album">
    {/* Album buttons */}

    {/* Album cover */}
    <div className="AlbumCover">
      <img src={prop.items.images[1].url} alt="Album cover"></img>
    </div>
    {/* Album info */}
    <a href={prop.items.external_urls.spotify}>{item.name}</a>
    <br></br>
    <a href={prop.items.artists[0].external_urls.spotify}>{item.artists[0].name}</a>
  </div>
)
