import * as React from "react";

interface BorderedContainerProps {
}

/**
 * Un contenedor que tiene borde
 */
export class BorderedContainer extends React.Component<BorderedContainerProps> {
    render() {
        return (
            <div 
                style={{ 
                    borderStyle: "solid",
                    borderColor: "gray"
                }}
            >
                {this.props.children}
            </div>
        );
    }
}