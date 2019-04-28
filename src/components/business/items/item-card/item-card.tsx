import * as React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import classNames from "classnames";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
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
    }
}); 

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
export class ItemCardSimple extends React.Component<ItemCardProps> {
    handleSeeDetails = () => {
        this.props.onSeeDetails(this.props.item);
    }

    render() {
        const classes = this.props["classes"];

        return (
            <Grid item sm={12} md={3} lg={2} style={{width: "100%"}}>
                <Card className={classes.card} >
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
                                <Button color="primary"  onClick={this.handleSeeDetails}>Details</Button>
                            </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

export const ItemCard =  withStyles(styles as any)(ItemCardSimple);