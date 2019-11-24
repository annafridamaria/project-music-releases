import React from 'react'
import { Heart} from 'icons/heart'
import { Play} from 'icons/play'
import { Dots} from 'icons/dots'
import 'AlbumCover.css'

export const AlbumCover = (props) => (
  <div className="AlbumImage">
    <div className="Icons">
      <Heart />
      <div className="Play">
      <Play />
      </div>
      <Dots />
    </div>

    {/* Album cover */}
    <img src={props.item.images[1].url} alt="Album cover"></img>

  </div>
)
