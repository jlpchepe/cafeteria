import * as React from "react";
import FormGroup from '@material-ui/core/FormGroup';
import { Checkbox, FormControlLabel, FormLabel } from "@material-ui/core";


export interface CheckBoxSelectProps {
    label: string;
    selectedValues: string[];
    /**
     * Posibles valores para seleccionar
     */
    values: string[];
    onValueChecked: (value: string) => void;
    onValueUnchecked: (value: string) => void;
}

export class CheckBoxSelect extends React.Component<CheckBoxSelectProps> {
    isValueSelected = (extra: string): boolean => {
        return this.props.selectedValues
            .some(extraSelected => extraSelected == extra);
    }

    render(){
        return (
            <FormGroup>
                <FormLabel component={"legend" as any}>Extras</FormLabel>
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