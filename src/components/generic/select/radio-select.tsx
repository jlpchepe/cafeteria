import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormLabel, FormGroup } from "@material-ui/core";

/**
 * Propiedades para el selector de opciones por botones radio
 */
interface RadioSelectProps {
    /**
     * Valor seleccionado actualmente
     */
    value: string;
    label: string;
    values: string[];
    onValueChange: (selectedOption: string) => void;
}

/**
 * Componente para la selección vía botones tipo radio
 */
export class RadioSelect extends React.Component<RadioSelectProps> {
    handleValueChange = (changeEvent: React.SyntheticEvent) => {
        const selectedValue = changeEvent.currentTarget["value"];

        this.props.onValueChange(selectedValue);
    }

    render() {
        return (
            <FormGroup>
                <FormLabel>{this.props.label}</FormLabel>
                <RadioGroup
                    value={this.props.value}
                    onChange={this.handleValueChange}
                >
                    {
                        this.props.values.map(value => (
                            <FormControlLabel
                                key={value}
                                value={value}
                                control={<Radio color="primary" />}
                                label={value}
                                labelPlacement="end"
                            />
                        ))
                    }
                </RadioGroup>
            </FormGroup>
        );
    }
}