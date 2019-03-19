import React from "react";
import { OMIT_KEYS } from '../../constatns';
import Spinner from "../../UI/Spinner/Spinner";

const planetDetails = props => {
    let label = props.planetDetail.key.split('_').join(' ');
    let detail = props.planetDetail.value;
    if (OMIT_KEYS.indexOf(props.planetDetail.key) > -1) return null;
    if (props.planetDetail.key === 'movies' || props.planetDetail.key === 'citizens') {
        label = (props.planetDetail.key === 'movies') ? 'films' : 'residents';
        detail = props.planetDetail.value ?
            (props.planetDetail.value.length ?
                props.planetDetail.value.map((el,i) => <li key={i}>{el}</li>) : 'None') :
            <Spinner />;
    } else if (props.planetDetail.key === 'surface_water') {
        detail = (
            <div className={'Planet-detail-water-wrapper'}>
                <div className={'Planet-detail-lightsaber'}></div>
                <div className={'Planet-detail-water-border'}> 
                    <span className={'Planet-detail-water-value'}>{detail.toLowerCase() === 'unknown' ? detail : `${detail}%`}</span>
                    <div className={'Planet-detail-bar'} style={{ width: `${detail}%` }}></div>
                </div>
            </div>
        )
    }
    return (
        <div className={'Planet-details-item'}>
            <div className={'Planet-details-label'}>{label}</div>
            <div className={'Planet-details-detail'} >{detail}</div>
        </div>
    )
};

export default planetDetails;
