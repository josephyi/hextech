import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import SummonerPage from './containers/SummonerPage'

export default (
    <Route path="/" component={App}>
        <Route path="/:region/:summonerName" component={SummonerPage} />
    </Route>
)