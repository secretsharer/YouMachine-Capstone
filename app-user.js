import React, { Component } from 'react'
import { render } from 'react-dom'
import Cosmic from 'cosmicjs'
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
  let data = this.state.data
  setTimeout(() => {
    this.refs.author.refs.input.focus()
  }, 100)
  const socket = io()
  Cosmic.getObjects(config, (err, res) => {
    const messages = res.objects.type.messages
    if (messages) {
      messages.reverse()
      this.setState({
        data: {
          author: data.author,
          messages
        }
      })
    }
  })

  socket.on('chat message', message => {
  data = this.state.data
  const messages = this.state.data.messages
  if(data.author !== message.metafield.author.value) {
    messages.push(message)
    this.this.setState({
      data: {
            author: data.author,
            messages
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

}

  const scroll_area_style = {
      ...S('h-' + (window.innerHeight - 140)),
      overflowY: 'scroll'
    }

    return (
      <div>
        <div>
          <h2>u-bot</h2>
          <div ref="messages_scroll_area" style={ scroll_area_style }>
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
