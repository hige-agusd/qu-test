import React from "react";
import {SORT_TYPE, COLUMNS} from '../../constatns';
import './PlanetsGrid.css';
import Spinner from "../../UI/Spinner/Spinner";

const planetGrid = props => { 
    const planets = props.planets ? [...props.planets].sort((a,b) => {
        if(!props.sort.key) return 0;
        if (a[props.sort.key] === 'unknown') return -1 * props.sort.dir;
        if (b[props.sort.key] === 'unknown') return 1 * props.sort.dir;
        if(SORT_TYPE[props.sort.key] === 'numeric') {
            return (a[props.sort.key]-b[props.sort.key]) * props.sort.dir;
        } else {
            return a[props.sort.key].localeCompare(b[props.sort.key]) * props.sort.dir;
        }
    })
    .map( (planet, index) => 
        <>
            {COLUMNS.map(col => <div className={'Planets-grid-cell'}>{planet[col]}</div>)}
            <div className={'Planets-grid-cell Planets-grid-more'}
                 onClick={() => props.clicked(index)}
            ></div>
        </>
    ) : null;
    return (
        <>
            {planets}
        </>
)};

export default planetGrid;
