import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const home = props => (
    <div className={'Home-wrapper'}>
        <div className={'Home'}>
        <div className={'Home-link'}>
            <div className={'Link-left'}>$</div><Link to="/paginated">Paginated</Link><div className={'Link-right'}>$</div>
        </div>
        <div className={'Home-link'}>
            <div className={'Link-left'}>#</div><Link to="/unpaginated">Unpaginated</Link><div className={'Link-right'}>#</div>
        </div>
        </div>
    </div>
)

export default home;