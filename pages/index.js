import React, { Component } from 'react'
import Listitem from '../components/listitem'

class Home extends Component {


  static getInitialProps = ({ query }) => {
    const name = 'hnuy'
    return {
      nn: name
    }
  }

  state = {
    username: 'Hnuy',
    password: '',
    stack: []
  }

  handleUsername = (e) => {
    let value = e.target.value
    this.setState({ username: value })
  }

  handlePassword = (e) => {
    let value = e.target.value
    this.setState({ password: value })
  }

  handleButton = (e) => {
    const { username, password } = this.state
    stack.push({ username: password })
  }

  render() {
    const { username, stack } = this.state

    const aa = [
      {
      title: 'title1',
      name: 'name1',
      ads: 'ads'
    },
    {
      title: 'title2',
      name: 'name2',
      
    }
  ]

    return (
      <React.Fragment>
        <div>{this.props.nn}</div>

        <h1>{username}</h1>

        <Listitem
          data={aa}
        />

        {/* <input type="text" name="username" placeholder="Username..." onChange={this.handleUsername} />
        <input type="password" name="password" onChange={this.handlePassword} />
        <button type="Botton" onClick={this.handleButton}>Submit</button> */}

      </React.Fragment>
    )
  }
}

export default Home
