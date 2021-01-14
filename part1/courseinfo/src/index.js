import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
      <h1>
        {props.title}
      </h1>
    </>
  )
}

const Part = (props) => (
  <p>
    {props.part} {props.excercise}
  </p>
)

const Content = (props) => (
  <div>
    <Part part={props.part1} excercise={props.exercises1} />
    <Part part={props.part2} excercise={props.exercises2} />
    <Part part={props.part3} excercise={props.exercises3} />
  </div>
)

const Total = (props) => (
  <div>
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  </div>
)

const App = () => {
  
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercise: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercise: 7
  }

  const part3 = {
    name: 'State of a component',
    exercise: 14
  }

  return (
    <div>
      < Header title={course} />
      < Content part1={part1.name} exercises1={part1.exercise} part2={part2.name} exercises2={part2.exercise} part3={part3.name} exercises3={part3.exercise} />
      < Total exercises1={part1.exercise} exercises2={part2.exercise} exercises3={part3.exercise} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
