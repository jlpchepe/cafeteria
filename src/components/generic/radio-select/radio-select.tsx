import * as React from "react";

/**
 * Propiedades para el selector de opciones por botones radio
 */
interface RadioSelectProps {
    /**
     * Valor seleccionado actualmente
     */
    value: string;
    values: string[];
    onValueChange: (selectedOption: string) => void;
}

/**
 * Componente para la selección vía botones tipo radio
 */
export class RadioSelect extends React.Component<RadioSelectProps> {
    handleValueChange = (a) => {
        console.log(a);
        const selectedValue = a;

        this.props.onValueChange(selectedValue);
    }

    render() {
        return this.props.values.map((value, valueIndex) => (
            <input type="radio" value={value} onChange={this.handleValueChange} checked={value === this.props.value} />
        ));
    }
}