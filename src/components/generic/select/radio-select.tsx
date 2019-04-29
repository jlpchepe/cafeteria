import * as React from "react";
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

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

const styles = theme => ({
    root: {
        display: 'flex',
    }
});

/**
 * Componente para la selección vía botones tipo radio
 */
export class RadioSelectSimple extends React.Component<RadioSelectProps> {
    handleValueChange = (changeEvent: React.SyntheticEvent) => {
        const selectedValue = changeEvent.currentTarget["value"];

        this.props.onValueChange(selectedValue);
    }

    render() {
        const classes = this.props["classes"];

        return (
            <RadioGroup
                value={this.props.value}
                onChange={this.handleValueChange}
            >
                <FormLabel component={"legend" as any}>{this.props.label}</FormLabel>
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
        );
    }
}

export const RadioSelect = withStyles(styles)(RadioSelectSimple);