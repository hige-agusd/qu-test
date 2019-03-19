import React, { Component } from 'react';
import axios from '../../axios-instance';
import { SORT } from '../../constatns';
import PlanetsGrid from '../../components/PlanetGrid/PlanetsGrid';
import PlanetsHeader from '../../components/PlanetGrid/PlanetsHeader';
import PlanetDetails from '../../components/PlanetDetails/PlanetDetails';
import Spinner from "../../UI/Spinner/Spinner";

import './Planets.css';


class Planets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: null,
            nextPage: null,
            prevPage: null,
            details: false,
            detailed: null,
            sort: {
                key: false,
                dir: SORT.NONE
            }
        };
        this.myRef = React.createRef();
    }

    componentDidMount() {
        axios('planets/').then(res => {
            this.setState({
                ...this.state,
                currentPage: res.data
            });
            if (res.data.next) {
                this.fetchNext(res.data.next);
            }
            if (res.data.previous) {
                this.fetchPrevious(res.data.previous);
            }

        })
    }
    fetchNext(nextUrl) {
        axios(nextUrl).then(next =>
            this.setState({
                ...this.state,
                nextPage: next.data
            }));
    }
    fetchPrevious(prevUrl) {
        if (!prevUrl) return -1;
        axios(prevUrl).then(previous =>
            this.setState({
                ...this.state,
                prevPage: previous.data
            }));
    }
    loadNext() {
        const newState = { ...this.state };
        this.setState({
            ...newState,
            prevPage: newState.currentPage,
            currentPage: newState.nextPage,
            nextPage: null
        }, () => this.fetchNext(this.state.currentPage.next));
    }
    loadPrev() {
        const newState = { ...this.state };
        this.setState({
            ...newState,
            nextPage: newState.currentPage,
            currentPage: newState.prevPage,
            prevPage: null
        }, () => this.fetchPrevious(this.state.currentPage.previous));
    }
    sort(sort) {
        this.setState({
            ...this.state,
            sort
        });
    }
    toggleDetails(index) {
        let detailed;
        if (index !== null) {
            detailed = index;
            setTimeout( () => {
                window.scrollTo(0, this.myRef.current.offsetTop);
            }, 2000);
        } else {
            detailed = this.state.detailed;
        } 
        this.setState({
            ...this.state,
            details: !this.state.details,
            detailed: detailed
        }, () => {
            this.getFilms(index);
            this.getPeople(index);
        });
    }
    getFilms(index) {
        if (index === null) return -1;
        const promises = this.state.currentPage.results[index].films.map(film => axios(film));
        Promise.all(promises).then(res => {
            const movies = res.map(movie => movie.data.title);
            const newState = {...this.state};
            newState.currentPage.results[index].movies = movies;
            this.setState(newState);
        });
    }
    getPeople(index) {
        if (index === null) return -1;
        const promises = this.state.currentPage.results[index].residents.map(resident => axios(resident));
        Promise.all(promises).then(res => {
            const citizens = res.map(citizen => citizen.data.name);
            const newState = {...this.state};
            newState.currentPage.results[index].citizens = citizens;
            this.setState(newState);
        });
    }

    render() {
        const planets = this.state.currentPage ? this.state.currentPage.results : null;
        const planet = this.state.currentPage && this.state.detailed !== null ? this.state.currentPage.results[this.state.detailed] : null;
        const nextBtn = <div> {this.state.nextPage ?
            <button className={'Planets-grid-next'} type="button" onClick={() => this.loadNext()}></button>
            : null}
        </div>;
        const prevBtn = <div> {this.state.prevPage ?
            <button className={'Planets-grid-prev'} type="button" onClick={() => this.loadPrev()}></button>
            : null}
        </div>;
        return (
            <>
                <div ref={this.myRef} className={`Planets-content-wrapper ${this.state.details ? 'details' : ''}`}>
                    <div ></div>
                    {planets ? 
                    <div className={'Planets-grid-wrapper'} >
                        <div className={'Planets-grid'} >
                            <PlanetsHeader sort={this.state.sort} onSort={(sort) => this.sort(sort)} />
                            <PlanetsGrid planets={planets} sort={this.state.sort} clicked={(index) => this.toggleDetails(index)} />
                        </div>
                        <nav className={'Planets-grid-navbar'} >{prevBtn}{nextBtn}</nav>
                    </div> : <div className={'Planets-spinner'}> <Spinner /> </div>}
                    <PlanetDetails planet={planet} sort={this.state.sort} clicked={(index) => this.toggleDetails(index)} />
                </div>
            </>
        )
    }
}

export default Planets;