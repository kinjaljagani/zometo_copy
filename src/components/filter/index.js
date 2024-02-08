import React from 'react'
import "./filter.css"

const Filter = ({filterlist}) => {
  return (
    <div className='d-flex gap-3'>
      {filterlist && filterlist.map((filter)=>{
        return <div className='p-2 filter-box'>{filter.icon}{filter.title}</div>
      })}
    </div>
  )
}

export default Filter
