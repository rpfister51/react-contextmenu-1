import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import SimpleMenu from './SimpleMenu';
import MultipleTargets from './MultipleTargets';
import MultipleMenus from './MultipleMenus';
import SubMenus from './SubMenus';
import DynamicMenu from './DynamicMenu';
import Customization from './Customization';
import RTLSubMenu from './RTLSubMenu';

function App({ children }) {
    return (
        <div className='container-fluid'>
            <h3>React ContextMenu <small>Context menus using react</small></h3>
            <div className='col-xs-3'>
                <ul className='nav nav-pills nav-stacked'>
                    <li>
                        <Link to='/simple-menu'>Simple Menu</Link>
                    </li>
                    <li>
                        <Link to='/multiple-targets'>Multiple Targets</Link>
                    </li>
                    <li>
                        <Link to='/multiple-menus'>Multiple Menus</Link>
                    </li>
                    <li>
                        <Link to='/submenus'>Sub Menus</Link>
                    </li>
                    <li>
                        <Link to='/dynamic-menu'>Dynamic Menu</Link>
                    </li>
                    <li>
                        <Link to='/customization'>Customization</Link>
                    </li>
                    <li>
                        <Link to='/rtl-submenus'>Right-to-Left</Link>
                    </li>
                </ul>
            </div>
            <div className='col-xs-9' id='main'>
                {children}
            </div>
        </div>
    );
}

const Routes = (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={SimpleMenu} />
            <Route path='simple-menu' component={SimpleMenu} />
            <Route path='multiple-targets' component={MultipleTargets} />
            <Route path='multiple-menus' component={MultipleMenus} />
            <Route path='submenus' component={SubMenus} />
            <Route path='dynamic-menu' component={DynamicMenu} />
            <Route path='customization' component={Customization} />
            <Route path='rtl-submenus' component={RTLSubMenu} />
        </Route>
    </Router>
);

ReactDOM.render(Routes, document.getElementById('main'));
