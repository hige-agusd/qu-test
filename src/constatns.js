export const SORT = {
    ASC: 1,
    DESC: -1,
    NONE: 0
};

export const SORT_TYPE = {
    name: 'alphabetical',
    rotation_period: 'numeric',
    orbital_period: 'numeric',
    diameter: 'numeric',
    climate: 'alphabetical',
    gravity: 'alphabetical',
    terrain: '',
    surface_water: 'numeric',
    population: 'numeric',
};

export const COLUMNS = Object.keys(SORT_TYPE);

export const OMIT_KEYS = ['created', 'edited', 'name', 'url', 'films', 'residents'];