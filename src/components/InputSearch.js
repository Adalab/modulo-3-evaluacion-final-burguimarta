import InputFilterMovie from "./InputFilterMovie";
import InputFilterYear from "./InputFilterYear";

function InputSearch (props) {
    return (
        <section>
            <form>
                <InputFilterMovie handleFilterMovie={props.handleFilterMovie}/>
                <InputFilterYear handleFilterYear={props.handleFilterYear} years={props.years} yearSelected={props.yearSelected}/>
            </form>
        </section>
    );
}

export default InputSearch;