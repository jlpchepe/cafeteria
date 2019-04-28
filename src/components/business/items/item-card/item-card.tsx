import * as React from "react";
import { ItemImage } from "../item-image/item-image";
import { Label } from "../../../generic/label/label";
import { Row } from "../../../generic/grid/row";
import { BorderedContainer } from "../../../generic/container/bordered-container";
import { Button } from "../../../generic/button/button";

/**
 * Información que se necesita para mostar un artículo en una tarjeta
 */
export interface ItemCardShowable {
    name: string;
    description: string;
    imageSource: string;
    price: number;
}

interface ItemCardProps {
    item: ItemCardShowable;
    selected: boolean;
    /**
     * Función a ejecutar cuando el usuario dé clic en ver detalles del artículo
     */
    onSeeDetails: (item: ItemCardShowable) => void;
}

/**
 * Representa una tarjeta que muestra la información de un artículo 
 */
export class ItemCard extends React.Component<ItemCardProps> {
    handleSeeDetails = () => {
        this.props.onSeeDetails(this.props.item);
    }

    render() {
        return (
            <BorderedContainer>
                <Row>
                    <ItemImage imageSource={this.props.item.imageSource}></ItemImage>
                </Row>
                <Row> 
                    <Label label={this.props.item.name}></Label>               
                </Row>
                <Row>                
                    <Label label={`$${this.props.item.price}`}></Label>
                </Row>
                <Row>                
                    <Button onClick={this.handleSeeDetails}>Details</Button>
                </Row>
            </BorderedContainer>
        );
    }
}