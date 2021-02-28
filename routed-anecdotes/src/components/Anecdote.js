import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
const Anecdote = ({ anecdotes }) => {
    const id = useParams().id
    const anecdote = anecdotes.find(a => a.id === id)
    return (
        <div>
            <h2>{anecdote.content}</h2>
            <div>
                <p>Author: {anecdote.author}</p>
                <p>Has {anecdote.votes} votes</p>
                <p>
                    For more info see: <a href={anecdote.info}>{anecdote.info}</a>
                </p>
            </div>
        </div>
    )
}

Anecdote.propTypes = {
    anecdote: PropTypes.object
}

export default Anecdote