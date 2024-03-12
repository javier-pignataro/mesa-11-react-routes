import React from 'react'

const Card = ({data}) => {
      return (
            <div className='card'>
                  <h3>{data.name}</h3>
                  <p>{data.tagline}</p>
                  <img src={data.image_url} alt="beer-detail" />
            </div>
      )
}
// Subir HOME BEER NAVBAR Y CARD

export default Card
