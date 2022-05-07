import PropTypes from "prop-types";

function InputFilterMovie(props) {
    const handleChange = (event) => {
        props.handleFilterMovie(event.target.value)
    };

    return (
        <label htmlFor="" > Movie
            <input type={props.inputType} onChange={handleChange}/>
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