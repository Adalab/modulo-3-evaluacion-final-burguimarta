function InputFilterYear(props) {
    const renderYears = props.years.map((year, index) => {
        return <option key={index} value={year}>{year}</option>;
    });
    
    /*const renderYears = (props) => {
        return props.years.map((year) => {
            return <option key="{index}" value={year}>{year}</option>;
        });
    }*/

    const handleChange = (event) => {
        props.handleFilterMovie(event.target.value);
    };

    return (
        <>  
        <label className="input__title" htmlFor="">Year</label>  
            <select className="" name="" id="" onChange={handleChange} value={props.year}>
                <option value="">All</option>
                {renderYears}
            </select>  
        </>
    );
};
export default InputFilterYear;