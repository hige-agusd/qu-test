import React from "react";
import {SORT, COLUMNS} from '../../constatns';

const planetsHeader = props => {
    
    const setSort = (key) => {
        const sort = {...props.sort};
        if (!sort.key || sort.key === key) {
            switch (sort.dir) {
                case SORT.ASC: sort.dir = SORT.DESC; break;
                case SORT.DESC: sort.dir = SORT.NONE; break;
                case SORT.NONE: sort.dir = SORT.ASC; break;
                default: sort.dir = SORT.NONE;
            }
        }
        sort.key = key;
        props.onSort(sort);
    };
    
    const columns = COLUMNS.map(column => {
        const classes = ['Planets-grid-header-cell', column];
        if (column === props.sort.key) {
            classes.push('selected');
            classes.push(props.sort.dir ? (props.sort.dir === SORT.ASC ? 'asc' : 'desc') : '');
        }
        return (
            <div className={classes.join(' ')} key={`head-${column}`} 
                onClick={() => setSort(`${column}`)}><span>{column.split('_').join(' ')}</span>
                <div className={'arrow'}></div>
            </div>
        );
    });


    return (
        <>
            { columns }
            <div></div>
        </>
    )
};

export default planetsHeader;
