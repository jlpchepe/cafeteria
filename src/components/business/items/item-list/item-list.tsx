import * as React from "react";
import { ItemImage } from "../item-image/item-image";
import { Label } from "../../../generic/label/label";
import { ItemCardShowable, ItemCard } from "../item-card/item-card";
import { ItemModal, ItemModalShowable } from "../item-modal/item-modal";
import { Grid, withStyles } from "@material-ui/core";
import classNames from "classnames";

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
    
}

interface ItemListState {
    itemShownInModal: ItemModalShowable;
}

const styles = theme => ({
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    layout: {
        width: "auto",
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
          width: 1100,
          marginLeft: "auto",
          marginRight: "auto",
        },
    },
});

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

    items: ItemListable[] = [
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
            imageSource: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
            selected: false
        },
        {
            name: "Sandwich",
            description: "Delicious italian cheese hamburguer",
            price: 35,
            imageSource: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            selected: true
        },
        {
            name: "Salad",
            description: "Delicious salad",
            price: 60,
            imageSource: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            selected: false
        }
    ];

    render() {
        const classes = this.props["classes"];
        const items = this.items.concat(this.items).concat(this.items);

        return (
            <React.Fragment>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    <Grid container spacing={24}>
                        {
                            items.map((item, itemIndex) => (
                                <ItemCard 
                                    key={itemIndex}
                                    item={item} 
                                    onSeeDetails={this.handleShowItemDetails}
                                    selected={item.selected}
                                ></ItemCard>
                            ))
                        }
                    </Grid>
                </div>
                {
                    this.state.itemShownInModal ?
                        <ItemModal
                            item={this.state.itemShownInModal}
                            onClose={this.handleOnCloseItemModal}
                        >
                        </ItemModal> :
                        null
                }
                
            </React.Fragment>
        );
    }
}

export const ItemList = withStyles(styles)(ItemListPure);