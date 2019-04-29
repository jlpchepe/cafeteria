import * as React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { RadioSelect } from "../../../generic/select/radio-select";
import { CardMedia, Checkbox, FormControlLabel, FormLabel } from "@material-ui/core";
import { ItemListable } from "../../../../models/item";
import FormGroup from "@material-ui/core/FormGroup";
import { CheckBoxSelect } from "../../../generic/select/checkbox-select";

interface ItemModalProps {
    /**
     * Artículo que se desplegará en el modal
     */
    item: ItemListable;
    /**
     * Función a ejecutar al momento de que el usuario cierre el modal
     */
    onClose: () => void;
    /**
     * Función a ejecutar al momento de que el usuario seleccione un item
     */
    onAcceptSelection: (size: string, extras: string[]) => void;
    /**
     * Función a ejecutar al momento que el usuario cancela la selección
     */
    onCancelSelection: () => void;
}

interface ItemModalState {
    sizeSelected: string;
    extrasSelected: string[];
}

/**
 * Representa un modal donde se mostrará la información de un artículo 
 */
export class ItemModal extends React.Component<ItemModalProps, ItemModalState> {
    constructor(props: ItemModalProps){
        super(props);

        const initialSelection = 
            props.item.selection || {
                size: undefined,
                extras: []
            }

        this.state = {
            sizeSelected: initialSelection.size,
            extrasSelected: initialSelection.extras
        };
    }

    /**
     * Manejador que cambia el tamaño seleccionado
     */
    handleSelectedSizeChange = (size) => {
        this.setState({
            sizeSelected: size
        });
    }

    /**
     * Manejador que se encarga del evento de seleccionar un tamaño de artículo
     */
    handleAcceptSelection = () => {
        this.props.onAcceptSelection(this.state.sizeSelected, this.state.extrasSelected);
        this.props.onClose();
    }

    handleCancelSelection = () => {
        this.props.onCancelSelection();
        this.props.onClose();
    }

    removeExtra = (extraToRemove: string) => {
        this.setState(prevState => ({
            extrasSelected: this.state.extrasSelected.filter(extra => extra != extraToRemove)
        }));
    }

    addExtra = (extraToAdd: string) => {
        this.setState(prevState => ({
            extrasSelected: [ ...this.state.extrasSelected, extraToAdd ]
        }));
    }

    render() {
        const sizes = [ "S", "M", "L" ];

        return (
            <Dialog
                open={true}
                onClose={this.props.onClose}
            >
                <div style={{display: "flex"}}>
                    <CardMedia
                        style={{minHeight: "100%", width: "200px"}}
                        image={this.props.item.imageSource}
                        title={this.props.item.name}
                    />
                    <div>
                        <DialogTitle>{this.props.item.name}</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                {this.props.item.description}
                            </DialogContentText>
                            <div style={{display: "flex", marginTop: "4px"}}>
                                <RadioSelect
                                    label="Size"
                                    value={this.state.sizeSelected}
                                    values={sizes}
                                    onValueChange={this.handleSelectedSizeChange}
                                >
                                </RadioSelect>
                                <CheckBoxSelect
                                    label="Extras"
                                    selectedValues={this.state.extrasSelected}
                                    values={this.props.item.extras}
                                    onValueChecked={this.addExtra}
                                    onValueUnchecked={this.removeExtra}
                                >
                                </CheckBoxSelect>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button disabled={this.state.sizeSelected == null} onClick={this.handleAcceptSelection} color="primary">Select</Button>
                            <Button onClick={this.handleCancelSelection} color="primary">Cancel</Button>
                        </DialogActions>
                    </div>
                </div>
            </Dialog>
        );
    }
}