import * as React from "react";
import { BorderedContainer } from "../../../generic/container/bordered-container";

interface ItemImageProps {
    /**
     * Fuente de origen (URL) de la que se tomará la fotografía a mostrar, por ejemplo:
     * "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80"
     */
    imageSource: string;
}

/**
 * Representa una fotografía de un artículo
 */
export class ItemImage extends React.Component<ItemImageProps> {
    render() {
        return (
            <BorderedContainer>
                <img src={this.props.imageSource}></img>
            </BorderedContainer>
        );
    }
}