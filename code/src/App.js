import React from 'react'
import data from './data.json'
import { AlbumCover } from 'AlbumCover.js'

console.log(data)

export const App = () => {
  return (
      <div>
      {data.albums.items.map((item) => (
        <AlbumCover 
        key={item.items.id}
        title={item.items.name}
        artists={item.items.artists[0]}/>
        ))}
      </div>
      )
    }