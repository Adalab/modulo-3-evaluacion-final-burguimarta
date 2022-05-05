
function InputFilterMovie(props) {
    const handleChange = (event) => {
        props.handleFilterMovie(event.target.value)
    };
    return (
        <label htmlFor="" > Movie
            <input type="text" onChange={handleChange}/>
        </label>
    );
};

export default InputFilterMovie;