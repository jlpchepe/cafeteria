import * as React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { RadioSelect } from "../../../generic/radio-select/radio-select";

/**
 * Información que se necesita para mostrar un artículo en el modal
 */
export interface ItemModalShowable {
    name: string;
    description: string;
    imageSource: string;
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
}

interface ItemModalState {
    selectedSize: string;
}

/**
 * Representa un modal donde se mostrará la información de un artículo 
 */
export class ItemModal extends React.Component<ItemModalProps, ItemModalState> {
    state = {
        selectedSize: null
    };

    handleSelectedSizeChange = (size) => {
        this.setState({
            selectedSize: size
        });
    } 

    render() {
        const sizes = [ "S", "M", "L" ];

        return (
            // <div>
            //     <Row>
            //         <Column>
            //             <ItemImage imageSource={this.props.item.imageSource}></ItemImage>
            //         </Column>
            //         <Column>
            //             <Label label={this.props.item.name}></Label>
            //         </Column>
            //     </Row>
            //     <Row>
            //         <Button onClick={this.props.onClose}>Cerrar</Button>
            //     </Row>
            //     <Row>
 
            //     </Row>
            // </div>
            <Dialog
                open={true}
                onClose={this.props.onClose}
            >
                <DialogTitle>{this.props.item.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send
                        updates occasionally.
                    </DialogContentText>
                    <RadioSelect
                        value={this.state.selectedSize}
                        values={sizes}
                        onValueChange={this.handleSelectedSizeChange}
                    >
                    </RadioSelect>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="primary">
                        Cancel
                    </Button>
                    {/* <Button onClick={this.handleClose} color="primary">
                        Subscribe
                    </Button> */}
                </DialogActions>
            </Dialog>
        );
    }
}