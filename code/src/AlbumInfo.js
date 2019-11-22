import React from 'react'
import 'AlbumInfo.css'

export const AlbumInfo = (props) => (
  <div className="AlbumInfo">
    {/* Album info */}
    <a href={props.item.external_urls.spotify}>{props.item.name}</a>
    <a href={props.item.artists[0].external_urls.spotify}>{props.item.artists[0].name}</a>
  </div>
)


