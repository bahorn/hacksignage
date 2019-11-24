import React, { useState } from 'react';
import Config from '../../config.json';

import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavLink,
  } from 'reactstrap';

const Navigationbar = () => {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">{Config.name}</NavbarBrand>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                <NavLink>
                    Users
                </NavLink>
                <NavLink>
                    Events
                </NavLink>
                <NavLink>
                    Sign Out
                </NavLink>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navigationbar;
