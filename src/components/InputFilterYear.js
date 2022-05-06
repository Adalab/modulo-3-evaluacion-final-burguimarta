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
        <label className="input__title" htmlFor="">Year</label>  
            <select className="" name="" id="" onChange={handleChange} value={props.year}>
                <option value="">All</option>
                {renderYears}
            </select>  
        </>
    );
};
export default InputFilterYear;