import PropTypes from "prop-types";

import '../styles/components/FilterMovie.scss';

function InputFilterMovie(props) {
    const handleChange = (event) => {
        props.handleFilterMovie(event.target.value)
    };

    return (
        <label className="FilterMovie__label" htmlFor="inputFilterMovie" > Movie
            <input className="FilterMovie__input" placeholder="Search for your WOW!!" id="inputFilterMovie" type={props.inputType} onChange={handleChange}/>
        </label>
    );
};

// DefaultProps, esto define el estado por defecto del input
InputFilterMovie.defaultProps = {
    inputType: "text",
};

// PropTypes, que define los tipos de los valores de los props
InputFilterMovie.propTypes = {
    inputType: PropTypes.string
};

export default InputFilterMovie;