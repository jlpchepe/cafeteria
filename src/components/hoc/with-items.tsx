import * as React from "react";
import { ItemListable } from "../../models/item";
import { ItemService } from "../../services/item-service";
import { CircularProgress } from "@material-ui/core";

type WithItemsProps = {
    items: ItemListable[];
};

interface WithItemsState {
    loadedItems: ItemListable[];
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Diff<T, K> = Omit<T, keyof K>;

const itemService = ItemService;
  
export function withItems<OriginalProps extends WithItemsProps>(WrappedComponent: React.ComponentType<OriginalProps>) {
    return class WithItemsComponent extends React.Component<Diff<OriginalProps, WithItemsProps>, WithItemsState> {
        state = {
            loadedItems: null
        }

        async componentDidMount(){
            const items = await itemService.getItems();

            this.setState({
                loadedItems: items
            });
        }

        render() {
            const loading = this.state.loadedItems == null;

            return (
                loading ?
                    <CircularProgress/>
                    : 
                    <WrappedComponent
                        {...this.props as OriginalProps} // we need to be explicit here
                        items={this.state.loadedItems}
                    /> 
            );
        }
    };
}