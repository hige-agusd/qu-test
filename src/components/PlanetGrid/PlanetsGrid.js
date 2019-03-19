import React from "react";
import {SORT_TYPE, COLUMNS} from '../../constatns';
import './PlanetsGrid.css';

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
        <React.Fragment  key={`cell-${planet+index}`}>
            {COLUMNS.map(col => <div className={'Planets-grid-cell'}  key={`cell-${col}`}>{planet[col]}</div>)}
            <div className={'Planets-grid-cell Planets-grid-more'}
                 onClick={() => props.clicked(index)}
            ></div>
        </React.Fragment>
    ) : null;
    return (
        <>
            {planets}
        </>
)};

export default planetGrid;
