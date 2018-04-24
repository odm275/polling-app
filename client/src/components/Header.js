import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from './Login';


class Header extends Component {
    renderContent(){
        console.log(this.props.auth);

        switch(this.props.auth){
            case null:
                return 'Loading...';
            case false:
                return <Link to={Login}> Login </Link>
            default:
                return [
                    <li key="1">New Poll</li>,
                    <li key="2">My Polls</li>,
                    <li key="3"><a href="/api/logout">Logout</a></li>
                ]
        }
    }
    render(){
        return(
            <div className='nav-wrapper'>
            <Link to ={this.props.auth ? '/polls': '/'} className="left brand-logo"> 
                FreePolls
            </Link>
            <ul className="right">
                {this.renderContent()}
            </ul>

            </div>
        )
    }
}

function MapStateToProps( {auth} ) {
    return { auth }
}

export default connect(MapStateToProps)(Header);