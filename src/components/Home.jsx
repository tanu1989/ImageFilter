import React from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Home extends React.Component {
    render () {
        const {children} = this.props;

        return (
            <div className="custom__navbar">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Image Filter</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1}><Link to='/filter'>Home</Link></NavItem>
                        <NavItem eventKey={2}><Link to='/images'>Images</Link></NavItem>
                    </Nav>
                </Navbar>
                { children }
            </div>

        )
    }
}

export default Home;