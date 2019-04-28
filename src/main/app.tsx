import * as React from "react";
import { ItemList } from '../components/business/items/item-list/item-list';

/**
 * Componente principal de la aplicación
 */
export class App extends React.Component {
    render() {
        return (
            <ItemList></ItemList>
        );
    }
}