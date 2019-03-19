import React from "react";
import Spinner from "../../UI/Spinner/Spinner";
import PlanetDetailsContent from './PlanetDetailsContent';
import './PlanetDetails.css';

const planetDetails = props => {
    const planetName = props.planet ? props.planet.name : '';
    const planetDetails = props.planet ?
        <>
            {Object.keys(props.planet).map(key => 
                <PlanetDetailsContent planetDetail={{value: props.planet[key], key: key}} />)}
        </>
        : <Spinner />
    return (
        <div className={'Planet-details'}>
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
    )
};

export default planetDetails;
