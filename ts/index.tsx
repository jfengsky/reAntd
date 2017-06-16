import * as React from 'react'
import { render } from 'react-dom'

interface IAppProps {}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <div>
        Hello world
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))