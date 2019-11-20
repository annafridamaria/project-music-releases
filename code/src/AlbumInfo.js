
import React from 'react'
import data from './data.json'

export const AlbumInfo = () => {
  return (
    <div>
    {data.albums.items.map(item => {
      return <div key={item.id}>
          {item.name}
          <br></br>
          {item.artists[0].name}     
        </div>;
    })}
    </div>

  )
}