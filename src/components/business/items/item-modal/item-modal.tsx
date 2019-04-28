import * as React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { RadioSelect } from "../../../generic/radio-select/radio-select";
import { CardMedia } from "@material-ui/core";

/**
 * Información que se necesita para mostrar un artículo en el modal
 */
export interface ItemModalShowable {
    name: string;
    description: string;
    imageSource: string;
    sizeSelected: string;
}

interface ItemModalProps {
    /**
     * Artículo que se desplegará en el modal
     */
    item: ItemModalShowable;
    /**
     * Función a ejecutar al momento de que el usuario cierre el modal
     */
    onClose: () => void;
    /**
     * Función a ejecutar al momento de que el usuario seleccione un item
     */
    onSelectSize: (size: string) => void;
}

interface ItemModalState {
    sizeSelected: string;
}

/**
 * Representa un modal donde se mostrará la información de un artículo 
 */
export class ItemModal extends React.Component<ItemModalProps, ItemModalState> {
    constructor(props: ItemModalProps){
        super(props);

        this.state = {
            sizeSelected: props.item.sizeSelected
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
    handleSelectSize = () => {
        this.props.onSelectSize(this.state.sizeSelected);
        this.props.onClose();
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
                            <RadioSelect
                                value={this.state.sizeSelected}
                                values={sizes}
                                onValueChange={this.handleSelectedSizeChange}
                            >
                            </RadioSelect>
                        </DialogContent>
                        <DialogActions>
                            <Button disabled={this.state.sizeSelected == null} onClick={this.handleSelectSize} color="primary">Select</Button>
                            <Button onClick={this.props.onClose} color="primary">Cancel</Button>
                        </DialogActions>
                    </div>
                </div>
            </Dialog>
        );
    }
}