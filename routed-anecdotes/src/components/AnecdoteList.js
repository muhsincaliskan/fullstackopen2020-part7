import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const AnecdoteList = ({ anecdotes }) => (
    <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdotes =>
        <li key={anecdotes.id}>
          <Link to={`/anecdotes/${anecdotes.id}`}>{anecdotes.content}</Link>
        </li>
      )}
    </ul>
  </div>
  )
  AnecdoteList.propTypes = {
    anecdotes: PropTypes.arrayOf(PropTypes.object).isRequired
  } 
export default AnecdoteList  