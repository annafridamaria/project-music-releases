import React from 'react'
import 'AlbumInfo.css'

export const AlbumInfo = (props) => (
  <div className="AlbumInfo">
    {/* Album info */}
    <div className="Title">
    <a href={props.item.uri}>{props.item.name}</a>
    </div>
    <div className="Artist">
    {props.item.artists.map((artist) => (
      <span className="AnArtist">
      <a key={artist.id}
      href={artist.uri}>
        {artist.name}</a>
        </span>

        ))}
    
    </div>
    
  </div>
)


