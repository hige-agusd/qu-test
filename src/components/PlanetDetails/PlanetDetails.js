import React from "react";
import Spinner from "../../UI/Spinner/Spinner";
import PlanetDetailsContent from './PlanetDetailsContent';
import Hyperspeed from '../../UI/Hyperspeed/Hyperspeed';
import './PlanetDetails.css';

const planetDetails = props => {
    const planetName = props.planet ? props.planet.name : '';
    const planetDetails = props.planet ?
        <>
            {Object.keys(props.planet).map((key, i) => 
                <PlanetDetailsContent key={`det-${key+i}`} planetDetail={{value: props.planet[key], key: key}} />)}
        </>
        : <Spinner />
    return (
        <>
        <div className={'Planet-details'}>
            <Hyperspeed />
            <div className={'Planet-details-grid'}>
                <div className={'Planet-details-header'}>
                    <div className={'Planet-details-back'}
                        onClick={() => props.clicked(null)}
                    ></div>
                    <div className={'Planet-details-name'} >{planetName}</div>
                </div>
                {planetDetails}
            </div>
        </div>
        </>
    )
};

export default planetDetails;
