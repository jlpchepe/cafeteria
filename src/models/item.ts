import { ItemCardShowable } from "../components/business/items/item-card/item-card";

/**
 * Información que debe contener un artículo que se puede listar
 */
export interface ItemListable extends ItemCardShowable {
    sizeSelected: boolean;
} 