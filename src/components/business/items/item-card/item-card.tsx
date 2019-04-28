import * as React from "react";
import * as A from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import classNames from "classnames";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles, Theme } from "@material-ui/core/styles";
import teal from '@material-ui/core/colors/teal';

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
class ItemCardSimple extends React.Component<ItemCardProps> {
    /**
     * Manejador de cuando el usuario da clic en ver detalles del artículo actual
     */
    handleSeeDetails = () => {
        this.props.onSeeDetails(this.props.item);
    }

    render() {
        const classes = this.props["classes"];

        return (
            <Grid item sm={12} md={3} lg={2} style={{flexBasis: "100%"}}>
                <Card className={classNames(classes.card, this.props.selected ? classes.selectedCard : null)}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={this.props.item.imageSource}
                        title={this.props.item.name}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6" align="center">
                            {this.props.item.name}
                        </Typography>
                        <Typography align="center">
                            {`$ ${this.props.item.price}`}
                        </Typography>
                        <CardActions className={classes.cardActions}>
                            <Button color="primary" onClick={this.handleSeeDetails}>
                                Details
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

/**
 * Estilos utilizados por la tarjeta
 */
const styles = (theme: Theme) => ({
    card: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            flexDirection: "column"
        }
    },
    cardContent: {
        flexGrow: 1,
        alignItems: "center"
    },
    cardMedia: {
        minWidth: "50%",
        [theme.breakpoints.up("md")]: {
            paddingTop: "56.25%" // 16:9
        }
    },
    cardActions: {
        justifyContent: "center",
        paddingBottom: 0
    },
    selectedCard: {
        borderColor: theme.palette.primary.main, 
        backgroundColor: teal[100],
        borderBottomWidth:"2px", 
        borderStyle: "solid"
    }
}); 

export const ItemCard =  withStyles(styles as any)(ItemCardSimple);