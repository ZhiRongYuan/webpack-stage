/**
 * Created by zhirongyuan on 2017/8/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
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