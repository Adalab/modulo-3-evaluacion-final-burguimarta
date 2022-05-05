import InputFilterMovie from "./InputFilterMovie";
import InputFilterYear from "./InputFilterYear";


function InputSearch (props) {
    return (
        <section>
            <form>
                <InputFilterMovie handleFilterMovie={props.handleFilterMovie} year={props.year}/>
                <InputFilterYear />
            </form>
        </section>
    );
}

export default InputSearch;