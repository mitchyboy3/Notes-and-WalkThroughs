Basics

# A react app 
 a set of reusable components

# Components 
are like function. They take input and produce a DOM 

# To create a react component 
`var Main = React.createClass({ render: function(){} }) `

Input for components is either
- 1. set of properties with this.props objects (props cannot be changed)
  2. set of state elements with this.state (state can be changed)

The JS representation of the DOM is called the virtual DOM, written in JSX. 
`var Main = React.createClass({ render: function(){return(<JSX>)} })`

# To mount a react component  
`React.render({ <>, mountNode}) or React DOM.render()`
it takes two arguments
- 1. component to render
  2. HTML node/element to hold our react render markup. 
`React.render( <Main />, document.getElementById(“root”) );`

# What is component architecture?
- We split things into concerns 
- in Node, nothing can be apart from server.js. Everything has to be directly connected in some way. 
- In react we will be more aware of STATE and each component having a small amount of state. 
- inside of each component we can show a piece of state inside the jsx
- We want to use a strategy where we dont have two way binding. Instead we are going to change a piece of state. 

