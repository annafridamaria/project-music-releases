import React from 'react'
import { AlbumCover } from 'AlbumCover'
import { AlbumInfo } from 'AlbumInfo'
import 'Album.css'

export const Album = (props) => (
    <div className="Album">

    {/* Album cover */}
    <AlbumCover 
        key={props.item.id + props.item.name} item={props.item}/>

    {/* Album info */}
    <AlbumInfo 
        key={props.item.id} item={props.item}/>
  </div>
)