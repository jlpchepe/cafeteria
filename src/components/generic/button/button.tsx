import * as React from "react";
import ButtonMaterial from '@material-ui/core/Button';

interface ButtonProps { 
    /**
     * Acción a ejecutar cuando el usuario dé clic en el artículo
     */
    onClick?: () => void;
}

/**
 * Debido a la forma en que podría variar el estilo de los botones a lo largo de la aplicación
 * Se crea este componente que se encarga de encapsular la visualización y comportamiento de estos
 */
export class Button extends React.Component<ButtonProps> {
    render(){
        return (
            <ButtonMaterial 
                onClick={this.props.onClick} 
                variant="contained"
                color="primary"
            >{this.props.children}</ButtonMaterial>
        );
    }
}