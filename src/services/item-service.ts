import { ItemListable } from "../models/item";
import { getPreferredApiMode, getItemsApiEndpoint, ApiMode } from "../main/config";

/**
 * Servicio encargado de suministrar artículos
 */
interface ItemService {
    getItems: () => Promise<ItemListable[]>
}

/**
 * Servicio encargado de obtener los artículos consumiendo una API remota
 */
class RemoteItemService {
    async getItems(): Promise<ItemListable[]> {
        const response = await fetch(getItemsApiEndpoint());
        const json = await response.json();

        return json;
    }
}

/**
 * Servicio encargado de obtener los artículos en memoria
 */
class InMemoryItemService {
    async getItems(): Promise<ItemListable[]> {
         //GENERAMOS 100 ARTÍCULOS
         const items = Array.apply(null, {length: 20})
            .map(() => generateItems())
            .reduce((concatanatedItems, nextItems) => concatanatedItems.concat(nextItems), [])
            ;

        return items;
    }
}

export const ItemService: ItemService = 
    getPreferredApiMode() == ApiMode.Remote ?
        new RemoteItemService() :
        new InMemoryItemService();

const generateItems: () => ItemListable[] = () => [
    {
        name: "Hamburguer",
        description: "Tasty hamburguer with onion",
        price: 50,
        imageSource: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80",
        extras: [
            "Bacon",
            "Mushroom",
            "Cheddar cheese"
        ]
    },
    {
        name: "Pizza",
        description: "Delicious italian cheese pizza",
        price: 40,
        imageSource: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
        extras: [
            "Mushroom",
            "Pineapple"
        ]
    },
    {
        name: "Sandwich",
        description: "Delicious italian cheese hamburguer",
        price: 35,
        imageSource: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        extras: [
            "Bread",
            "Onion"
        ]
    },
    {
        name: "Salad",
        description: "Delicious salad",
        price: 60,
        imageSource: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        extras: [
            "Spinach",
            "Broccoli"
        ]
    },
    {
        name: "French fries",
        description: "Salty french fries",
        price: 20,
        imageSource: "https://images.unsplash.com/photo-1463183665146-ce2ed31df6b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        extras: [
            "Cheddar cheese"
        ]
    },
];