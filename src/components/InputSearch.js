import InputFilterMovie from "./InputFilterMovie";
import InputFilterYear from "./InputFilterYear";

import '../styles/components/Inputs.scss';

function InputSearch (props) {

    const formSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section className="inputs">
            <form onSubmit={formSubmit}>
                <InputFilterMovie handleFilterMovie={props.handleFilterMovie}/>
                <InputFilterYear handleFilterYear={props.handleFilterYear} years={props.years} yearSelected={props.yearSelected}/>
            </form>
        </section>
    );
}

export default InputSearch;