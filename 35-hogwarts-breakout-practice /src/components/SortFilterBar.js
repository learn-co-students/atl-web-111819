import React from 'react'

const SortFilterBar =(props)=> {
    return <div>
        <label>
            Sort by:{' '}
            <select value={props.sort} onChange={(e)=> props.changeSort(e.target.value)}>
                <option>None</option>
                <option>Name</option>
                <option>Weight</option>
            </select>
        </label>
        {' '}
        <label>
            Are they slick boys? :{' '}
            <input type='checkbox' value={props.filter} onChange={()=> props.changeFilter()} alt='' />
        </label>
    </div>
}

export default SortFilterBar