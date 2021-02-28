import React, { useState } from 'react'

import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Footer from './components/Footer'
import About from './components/About'
import Menu from './components/Menu'
import CreateNew from './components/CreateNew'
import AnecdoteList from './components/AnecdoteList'
import Anecdote from './components/Anecdote'
import Notification from './components/Notification'


const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`${anecdote.content} created successfully !`)
    setTimeout(() => {
      setNotification(null)
    }, 10000)
  }

  // const match = useRouteMatch('/anecdotes/:id')
  // const anecdote = match
  //   ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
  //   : null

  return (
    <div>
      <h1>Software anecdotes</h1>
    
        <Menu />
        <Notification notification={notification} />
        {/* <Switch> */}
        <Route path='/anecdotes/:id'>
            <Anecdote anecdotes={anecdotes} />
          </Route>
          <Route path="/">
            <AnecdoteList anecdotes={anecdotes} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/create_new">
            <CreateNew addNew={addNew} />
          </Route>
        {/* </Switch> */}
        <Footer />
   
    </div>
  )
}

export default App;
