import * as React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import { Checkbox, FormControlLabel, FormLabel } from "@material-ui/core";


export interface CheckBoxSelectProps {
    label: string;
    /**
     * Valores actualmente seleccionados
     */
    selectedValues: string[];
    /**
     * Posibles valores para seleccionar
     */
    values: string[];
    onValueChecked: (value: string) => void;
    onValueUnchecked: (value: string) => void;
}

/**
 * Un selector de checkbox
 * Componente puro que se encarga de listar opciones de selección de checkbox de forma vertical
 */
export class CheckBoxSelect extends React.Component<CheckBoxSelectProps> {
    isValueSelected = (extra: string): boolean => {
        return this.props.selectedValues
            .some(extraSelected => extraSelected == extra);
    }

    render(){
        return (
            <FormGroup>
                <FormLabel>{this.props.label}</FormLabel>
            {
                this.props.values && this.props.values.map(value => {
                    const isValueSelected = this.isValueSelected(value);

                    return (
                        <FormControlLabel
                            key={value}
                            control={
                                <Checkbox 
                                    checked={isValueSelected} 
                                    onChange={() => isValueSelected ? this.props.onValueUnchecked(value) : this.props.onValueChecked(value) } 
                                    value={value}
                                />
                            }
                            label={value}
                        />
                    );
                })
            }
            </FormGroup>
        )
    }
}