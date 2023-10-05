import Button from "../components/Button.js";
import "../stylesheets/calculator.css";
import {useState} from "react";

function Calc(){

    const [screen,setScreen] = useState(" ");

    const manageScreen = (simbol) =>  {
        setScreen(screen+simbol)
    }

    const calcResult = () => {
        {
            try{
                setScreen(eval(screen))
            }
            catch(error){
                setScreen("Error")
                setTimeout(() => {
                    setScreen("");
                },1000);
            }
        }
    }

    const deleteLastSimbolScreen = () => {
        const auxScreen = screen.slice(0,-1)
        setScreen(auxScreen)
    }

    return (
        <div className="container">
            
            <div className="screen">
                {screen}
            </div>

            <div className="row5">
                <Button manageScreen={() => setScreen("")}>Clear</Button>
                <Button manageScreen={manageScreen}>(</Button>
                <Button manageScreen={manageScreen}>)</Button>
                <Button manageScreen={(deleteLastSimbolScreen)}>⌫</Button>
            </div>

            <div className="row4">
                <Button manageScreen={manageScreen}>7</Button>
                <Button manageScreen={manageScreen}>8</Button>
                <Button manageScreen={manageScreen}>9</Button>
                <Button manageScreen={manageScreen}>/</Button>
            </div>

            <div className="row3">
                <Button manageScreen={manageScreen}>4</Button>
                <Button manageScreen={manageScreen}>5</Button>
                <Button manageScreen={manageScreen}>6</Button>
                <Button manageScreen={manageScreen}>*</Button>
            </div>

            <div className="row2">
                <Button manageScreen={manageScreen}>1</Button>
                <Button manageScreen={manageScreen}>2</Button>
                <Button manageScreen={manageScreen}>3</Button>
                <Button manageScreen={manageScreen}>-</Button>
            </div>

            <div className="row1">
                <Button manageScreen={manageScreen}>.</Button>
                <Button manageScreen={manageScreen}>0</Button>
                <Button manageScreen={calcResult}>=</Button>
                <Button manageScreen={manageScreen}>+</Button>
            </div>
            
        </div>
    );
}

export default Calc;