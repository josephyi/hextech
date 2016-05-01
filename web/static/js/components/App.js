import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'

const App = (props) => (
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Lis</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="">Link11111</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
);

export default App;