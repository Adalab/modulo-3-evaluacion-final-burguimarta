import PropTypes from "prop-types";

import '../styles/components/FilterYear.scss';

function InputFilterYear(props) {
    const renderYears = props.years.map((year, index) => {
        if (props.yearSelected === year)
            return <option key={index} value={year} selected>{year}</option>;
        else
            return <option key={index} value={year}>{year}</option>;
    });

    const handleChange = (event) => {
        if (event.target.value === "")
            props.handleFilterYear(event.target.value);
        else
            props.handleFilterYear(parseInt(event.target.value));
    };

    return (
        <>  
        <label className="FilterYear__label" htmlFor="inputFilterYear">Year</label>  
            <select className="FilterYear__input" id="inputFilterYear" onChange={handleChange}>
                <option value="">All</option>
                {renderYears}
            </select>  
        </>
    );
};

// PropTypes, que define los tipos de los valores de los props
InputFilterYear.propTypes = {
    handleFilterYear: PropTypes.func.isRequired
};

export default InputFilterYear;