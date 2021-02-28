import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import  { useField } from '../hooks'
const CreateNew = (props) => {
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')
  
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNew({
            content:content.value,
            author:author.value,
            info:info.value,
            votes: 0
        })
        history.push('/')
    }
    const clearFields = () => {
        content.reset()
        author.reset()
        info.reset()
      }
    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
            <input type={content.type} name='content' value={content.value} onChange={content.onChange} />
                </div>
                <div>
                    author
            <input type={author.type} name='author' value={author.value} onChange={author.onChange} />
                </div>
                <div>
                    url for more info
            <input type={info.type} name='info' value={info.value} onChange={info.onChange} />
                </div>
                
                <button type='submit'>create</button> 
                <button type='reset' onClick={clearFields}>reset</button>
            </form>
        </div>
    )

}

CreateNew.propTypes = {
    addNew: PropTypes.func.isRequired
}

export default CreateNew  