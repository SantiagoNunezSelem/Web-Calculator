import ButtonCalc from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../stylesheets/button.css";

function Button(props){
    return (
        <ButtonCalc onClick={() => props.manageScreen(props.children)}
        className="ButtonCalc">
            {props.children}
        </ButtonCalc>
    );
}

export default Button;