import React from 'react'
import data from './data.json'
import { AlbumCover } from 'AlbumCover.js'

console.log(data)

export const App = () => {
  return (
    <div>
    {data.albums.items.map(item => {
        return (
          <div>
            <AlbumCover />
          </div>
        )
    })}
    </div>
  )

}
