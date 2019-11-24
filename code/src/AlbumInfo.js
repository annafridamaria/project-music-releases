import React from 'react'
import 'AlbumInfo.css'

export const AlbumInfo = (props) => (
  <div className="AlbumInfo">
    {/* Album info */}
    <div className="Title">
    <a href={props.item.uri}>{props.item.name}</a>
    </div>
    <div className="Artist">
    <a href={props.item.artists[0].uri}>{props.item.artists[0].name}</a>
    </div>
    
  </div>
)


