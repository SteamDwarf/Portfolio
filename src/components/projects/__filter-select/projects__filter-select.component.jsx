import './projects__filter-select.style.scss';

const FilterSelect = ({curFilter, filters, changeFilter}) => {
    const changeFilterHandler = (e) => {
        changeFilter(e.target.value);
    }

    return (
        <select value={curFilter} className="project__filter-select" onChange={changeFilterHandler}>
            <option value="">Все</option>
            {
                filters.map(filter => <option key={filter} className="project__filter" value={filter}>{filter}</option>)
            }
        </select>
    );
}

export default FilterSelect;