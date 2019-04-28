import * as React from "react";
import { Row } from "../../../generic/grid/row";
import { Column } from "../../../generic/grid/column";
import { ItemImage } from "../item-image/item-image";
import { Label } from "../../../generic/label/label";
import { ItemCardShowable, ItemCard } from "../item-card/item-card";
import { ItemModal, ItemModalShowable } from "../item-modal/item-modal";

/**
 * Información que debe contener un artículo que se puede listar
 */
interface ItemListable extends ItemCardShowable {
    selected: boolean;
} 

/**
 * Propiedades que requiere la lista de artículos para funcionar
 */
interface ItemListProps {
    items: ItemListable[];
}

interface ItemListState {
    itemShownInModal: ItemModalShowable;
}

/**
 * Representa un listado de artículos con su correspondiente funcionalidad de interacción con el usuario
 */
class ItemListPure extends React.Component<ItemListProps, ItemListState> {
    state = {
        itemShownInModal: null
    };

    /**
     * Si el usuario indica que se debe mostrar los detalles de algún artículo, este manejador se encarga
     */
    handleShowItemDetails = (item: ItemModalShowable) => {
        // Es importante, que si ya está mostrando otro artículo debemos ignorar al usuario 
        // y seguir mostrando el artículo anterior
        if(this.state.itemShownInModal == null){
            this.setState({
                itemShownInModal: item
            });
        }
    }

    /**
     * Manejador que se encargará de realizar los cambios para dejar de mostrar el modal de artículos
     */
    handleOnCloseItemModal = () => {
        this.setState({
            itemShownInModal: null
        });
    }

    render() {
        return (
            <Row>
                {
                    this.props.items.map((item, itemIndex) => (
                        <Column key={itemIndex}>
                            <ItemCard 
                                item={item} 
                                onSeeDetails={this.handleShowItemDetails}
                                selected={item.selected}
                            ></ItemCard>
                        </Column>
                    ))
                }
                {
                    this.state && this.state.itemShownInModal != null ?
                    (
                        <ItemModal
                            item={this.state.itemShownInModal}
                            onClose={this.handleOnCloseItemModal}
                        >
                        </ItemModal>
                    ) :
                    null
                }
            </Row>
        );
    }
}

const inMemoryItems: ItemListable[] = [
{
    name: "Hamburguer",
    description: "Tasty hamburguer with onion",
    price: 50,
    imageSource: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80",
    selected: false
},
{
    name: "Pizza",
    description: "Delicious italian cheese pizza",
    price: 40,
    imageSource: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80",
    selected: false
},
{
    name: "Sandwich",
    description: "Delicious italian cheese hamburguer",
    price: 35,
    imageSource: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80",
    selected: true
},
{
    name: "Salad",
    description: "Delicious salad",
    price: 60,
    imageSource: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80",
    selected: false
}
];

export const ItemList = () =>
    <ItemListPure items={inMemoryItems}></ItemListPure>;