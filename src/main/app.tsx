import * as React from "react";
import { ItemList } from '../components/business/items/item-list/item-list';
import { CssBaseline } from "@material-ui/core";

/**
 * Componente principal de la aplicación
 */
export class App extends React.Component {
    render() {
        return (
            <div>
                <CssBaseline/>
                <ItemList></ItemList>
            </div>
        );
    }
}