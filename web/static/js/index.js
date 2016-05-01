// Phoenix' dependencies
import '../../../deps/phoenix/priv/static/phoenix'
import '../../../deps/phoenix_html/priv/static/phoenix_html'

// Shiny new, hot React component
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

const rootEl = document.getElementById('root');
ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootEl
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./components/App').default;
    ReactDOM.render(
        <AppContainer>
          <NextApp />
        </AppContainer>,
        rootEl
    );
  });
}
//import { List, ListItem, ListItemContent, Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
//
//class Root extends Component {
//  render () {
//    return <List>
//    <ListItem>
//    <ListItemContent icon="person">Bryan Cranston~~!</ListItemContent>
//    </ListItem>
//    <ListItem>
//    <ListItemContent icon="person">Aaron Paul</ListItemContent>
//    </ListItem>
//    <ListItem>
//    <ListItemContent icon="person">Bob Odenkirk!</ListItemContent>
//    </ListItem>
//    </List>
//  }
//}
//const Root = () => (
//      <Layout>
//        <Header title="Title" scroll>
//          <Navigation>
//            <a href="">Links@@s</a>
//            <a href="">Link</a>
//            <a href="">Link</a>
//            <a href="">Link</a>
//          </Navigation>
//        </Header>
//        <Drawer title="Title">
//          <Navigation>
//            <a href="">Link11111</a>
//            <a href="">Link</a>
//            <a href="">Link</a>
//            <a href="">Link</a>
//          </Navigation>
//        </Drawer>
//        <Content>
//          <div className="page-content" />
//        </Content>
//      </Layout>
//);

//ReactDOM.render(
//    <Root />,
//    document.querySelector('#root')
//);

