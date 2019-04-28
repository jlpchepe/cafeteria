import * as React from "react";

/**
 * Una columna que puede estar contenida dentro de una fila
 */
export class Column extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}