// Phoenix' dependencies
import '../../../deps/phoenix/priv/static/phoenix'
import '../../../deps/phoenix_html/priv/static/phoenix_html'

// Shiny new, hot React component
import React, { Component } from 'react'
import { render } from 'react-dom'
import { List, ListItem, ListItemContent } from 'react-mdl'

class Root extends Component {
  render () {
    return <List>
    <ListItem>
    <ListItemContent icon="person">Bryan Cranston</ListItemContent>
    </ListItem>
    <ListItem>
    <ListItemContent icon="person">Aaron Paul</ListItemContent>
    </ListItem>
    <ListItem>
    <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
    </ListItem>
    </List>

  }
}


render(<Root />, document.getElementById('root'))
