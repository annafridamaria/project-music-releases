import React from 'react'
import { AlbumCover } from 'AlbumCover'
import { AlbumInfo } from 'AlbumInfo'
import 'Album.css'

export const Album = (props) => (
    <div className="Album">

    {/* Album cover */}
    <AlbumCover 
     item={props.item}/>

    {/* Album info */}
    <AlbumInfo 
    item={props.item}/>
  </div>
)