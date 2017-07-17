import React, { Component } from 'react'
import { render } from 'react-dom'
import io from 'socket.io-client'
import config from './config'
import uuid from 'node-uuid'
import S from 'shorti'
import _ from 'lodash'
import { Input } from 'react-bootstrap'
import Rebass, { Component } from 'rebass'

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: {
        messages: []
      }
    }
  }

  componentDidMount() {

        }


  socket.on('chat message', message => {
  data = this.state.data
  const messages = this.state.data.messages
          }
        })
      }
    })
  }

componentDidUpdate() {

}

setAuthor() {

}

createMessage() {

}

submitMessage() {

}

render() {
    return (
      <div>
        <div>
          <h2>u-bot</h2>
          <div>
            <ul>{ messages_list }</ul>
          </div>
        </div>
        <div>
          <form onSubmit={ this.handleSubmit.bind(this) }>
            { form_input }
          </form>
        </div>
      </div>
    )
  }
}
const app = document.getElementById('app')
render(<App />, app)
