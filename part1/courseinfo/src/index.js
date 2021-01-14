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
    <Part part={props.parts[0].name} excercise={props.parts[0].exercise} />
    <Part part={props.parts[1].name} excercise={props.parts[1].exercise} />
    <Part part={props.parts[2].name} excercise={props.parts[2].exercise} />
  </div>
)

const Total = (props) => (
  <div>
    <p>Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
  </div>
)

const App = () => {

  const course = {

    name: 'Half Stack application development',

    parts : [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }

    ]
  } 

  return (
    <div>
      < Header title={course.name} />
      < Content parts={course.parts} />
      < Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
