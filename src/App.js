import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button,
        Flex,
        FlexItem
        } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <div className="choose">
                <Flex>
                    <FlexItem><h4 className="active">打卡榜</h4></FlexItem>
                    <FlexItem><h4>报班榜</h4></FlexItem>
                </Flex>
            </div>
            <div className="user">
                <Flex>
                    <FlexItem>9</FlexItem>
                    <FlexItem><img src="images/2.png" alt="头像"/></FlexItem>
                    <FlexItem><div>name</div><div>number</div></FlexItem>
                    <FlexItem>44</FlexItem>
                </Flex>
            </div>
            <hr/>
            <div className="rankingList">
                <div className="user">
                    <Flex>
                        <FlexItem><img src="images/4.png" alt=""/></FlexItem>
                        <FlexItem><img src="images/2.png" alt="头像"/></FlexItem>
                        <FlexItem><div>name</div><div>number</div></FlexItem>
                        <FlexItem>44</FlexItem>
                    </Flex>
                </div>
                <hr/>
                <div className="user">
                    <Flex>
                        <FlexItem>9</FlexItem>
                        <FlexItem><img src="images/2.png" alt="头像"/></FlexItem>
                        <FlexItem><div>name</div><div>number</div></FlexItem>
                        <FlexItem>44</FlexItem>
                    </Flex>
                </div>
                <hr/>
                <div className="user">
                    <Flex>
                        <FlexItem>9</FlexItem>
                        <FlexItem><img src="images/2.png" alt="头像"/></FlexItem>
                        <FlexItem><div>name</div><div>number</div></FlexItem>
                        <FlexItem>44</FlexItem>
                    </Flex>
                </div>
                <hr/>

            </div>
      </div>
    );
  }
}

export default App;
