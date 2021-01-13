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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  //test

  const t = [1, -1, 3]
  t.push(5)
  console.log(t.length)
  console.log(t)
  console.log(t[0])

  t.forEach(el => {
    console.log(el)
  })

  const t2 = t.concat(5)
  console.log(t2)

  const m1 = t2.map(val => val * 2)
  console.log(m1)

  const m2 = t2.map(val => '<li>' + val + '</val')
  console.log(m2)

  const [first, second, ...rest] = m1
  console.log(first, second)
  console.log(rest)



  return (
    <div>
      < Header title={course} />
      < Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      < Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
