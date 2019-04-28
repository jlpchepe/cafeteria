import * as React from "react";
import { Row } from "../../../generic/grid/row";
import { Column } from "../../../generic/grid/column";
import { ItemImage } from "../item-image/item-image";
import { Label } from "../../../generic/label/label";
import { RadioSelect } from "../../../generic/radio-select/radio-select";
import { Button } from "../../../generic/button/button";

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
            <div>
                <Row>
                    <Column>
                        <ItemImage imageSource={this.props.item.imageSource}></ItemImage>
                    </Column>
                    <Column>
                        <Label label={this.props.item.name}></Label>
                    </Column>
                </Row>
                <Row>
                    <Button onClick={this.props.onClose}>Cerrar</Button>
                </Row>
                <Row>
                    <RadioSelect
                        value={this.state.selectedSize}
                        values={sizes}
                        onValueChange={this.handleSelectedSizeChange}
                    >
                    </RadioSelect>
                </Row>
            </div>
        );
    }
}