import InputFilterMovie from "./InputFilterMovie";
import InputFilterYear from "./InputFilterYear";

function InputSearch (props) {

    const formSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section>
            <form onSubmit={formSubmit}>
                <InputFilterMovie handleFilterMovie={props.handleFilterMovie}/>
                <InputFilterYear handleFilterYear={props.handleFilterYear} years={props.years} yearSelected={props.yearSelected}/>
            </form>
        </section>
    );
}

export default InputSearch;