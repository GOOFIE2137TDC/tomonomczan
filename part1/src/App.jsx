import { useState } from 'react'

//zadeklarowanie tytułu strony
const Title = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}
//deklaracja wyświetlania bierzącej anegdoty
const Anecdotes = (props) => {
  return(
    <div>
      <div>{props.anecdotes}</div>
      <div>has {props.votes} votes</div>
    </div>
  )
}
//deklaracja przycisków
const Button = (props) => {
  return (
  <div>
    <button onClick={props.handleClick}>{props.text}</button>
  </div>
  )
}
//deklaradcja wyświetlania anegdoty z największą ilością głosów
const MostVotes = (props) => {
  return (
    <div>
      <div>{props.anecdotes}</div>
      <div>has {props.max} votes</div>
    </div>
  )
}
//tablica przechowująca anegdoty 
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   //stan początkowy równy 0
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0))
  //obsługa przycisku, który zmienia losowo anegdotę
  const nextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  //przycisk od głosowania, zwiększa ilość głosów
  const voteClick = () => {
    const newVotes = [...voted]
    newVotes[selected] += 1
    setVoted(newVotes)
  } 
  //anegdota z największą ilością głosów
  const max = Math.max(...voted)
  const index = voted.indexOf(max)
  //przypinanie wyświetlania komponentów do funkcji powyżej
  return (
    <div>
      <Title text='Anecdote of the day'/>
      <Anecdotes anecdotes={anecdotes[selected]} votes={voted[selected]}/>
      <Button handleClick={nextClick} text='next anecdote'/>
      <Button handleClick={voteClick} text='vote'/>
      <Title text='Anecdote with most votes'/>
      <MostVotes anecdotes={anecdotes[index]} max={max} />
    </div>
  )
}

export default App;