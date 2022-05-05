
function InputFilterYear(props) {
    const handleChange = (event) => {
        props.handleFilterMovie(event.target.value);
    };
    return (
        <>
            <label htmlFor="">Year</label>
            <select name="" id="" onChange={handleChange} value={props.year}>
                <option value="">All</option>
                <option value=""></option>

            </select>
        </>
        
    );
};
export default InputFilterYear;