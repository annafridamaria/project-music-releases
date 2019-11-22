import React from 'react'
import data from './data.json'
import { Album } from 'Album.js'
import 'App.css'

console.log(data)

export const App = () => {
  return (
      <div className="NewReleases">
      {data.albums.items.map((item) => (
        <Album 
        key={item.id} item={item}/>
        ))}
      </div>
      )
    }