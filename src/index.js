/**
 * Created by zhirongyuan on 2017/8/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from './component/button';
class App extends React.Component {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        let config = {
            url:'/api/account/login',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Device': 'WEB',
                'Sysmark':'Windows 10, Chrome 60.0.3112.113',
                'Vernum': '1.0.0',
            },
            data: {accountname:"10888008001",accountpwd:"123456"}
        };

        axios(config)
            .then(()=> {console.log('success')}, err => {
                console.error(err);
                const error = new Error('连接服务器失败，请稍后重试');
                error.response = err.response;
                throw error;
            })
    }

    clickHandelr() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.clickHandelr.bind(this)}>点击</button>
                <Button name="test" title={this.state.count}/>
            </div>
    )
    }
};
ReactDOM.render(<App/>, document.getElementById('app'));