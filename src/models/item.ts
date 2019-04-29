import { ItemCardShowable } from "../components/business/items/item-card/item-card";

/**
 * Posee las selecciones actuales del artículo
 */
export interface ItemSelection {
    size: string;
    extras: string[];
}

/**
 * Información que debe contener un artículo que se puede listar
 */
export interface ItemListable extends ItemCardShowable {
    name: string;
    description: string;
    imageSource: string;
    price: number;

    /**
     * Selecciones hechas para un artículo
     * Puede ser nulo o indefinido si el artículo no está seleccionado
     */
    selection?: ItemSelection;
    /**
     * Indica los posibles extras del artículo
     */
    extras: string[];
} 