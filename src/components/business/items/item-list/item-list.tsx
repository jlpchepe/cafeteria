import * as React from "react";
import { Label } from "../../../generic/label/label";
import { ItemCardShowable, ItemCard } from "../item-card/item-card";
import { ItemModal, ItemModalShowable } from "../item-modal/item-modal";
import { Grid, withStyles } from "@material-ui/core";
import classNames from "classnames";
import { withItems } from "../../../hoc/with-items";
import { ItemListable } from "../../../../models/item";

/**
 * Propiedades que requiere la lista de artículos para funcionar
 */
interface ItemListProps {
    classes: ItemListStyle;
    items: ItemListable[];
}

interface ItemListState {
    itemShownInModal: ItemListable;
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
    handleShowItemDetails = (item: ItemListable) => {
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

    handleOnSelectItem = (size) => {
        this.state.itemShownInModal.sizeSelected = size;
    }

    render() {
        const classes = this.props.classes;
        const items = this.props.items;

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
                                    selected={item.sizeSelected != null}
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
                            onSelectSize={this.handleOnSelectItem}
                        >
                        </ItemModal> :
                        null
                }
                
            </React.Fragment>
        );
    }
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

type ItemListStyle = ReturnType<typeof styles>;

export const ItemList =  withStyles(styles)(withItems(ItemListPure) as any);