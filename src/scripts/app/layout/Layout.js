import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    BrowserRouter,
    Switch,
    Redirect,
    withRouter,
    matchPath
} from 'react-router-dom';
import NavBar from 'scripts/app/navbar/NavBar';
import layout from './layout.scss';
class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let sty = layout;
        return (
            <div>
                <NavBar />
                <div className={sty.pageWrap}>
                    <div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Layout;

