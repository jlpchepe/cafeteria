import * as React from "react";

interface LabelProps {
    label: string;
}

/**
 * Debido a la forma en que podría variar el estilo de los labels a lo largo de la aplicación
 * Se crea este componente que se encarga de encapsular la visualización y comportamiento de los labels de la aplicación
 */
export class Label extends React.Component<LabelProps> {
    render(){
        return <label>{this.props.label}</label>
    }
}