import * as React from "react";

/**
 * Representa la tarjeta 
 */
export class Row extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}