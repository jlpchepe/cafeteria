import { join } from "path";

//Archivo con configuraciones generales para el despliegue de la aplicación

/**
 * La aplicación puede utilizar servicios en memoria o bien hacer peticiones a una API remota para obtener sus datos
 */
export enum ApiMode {
    InMemory,
    Remote
}

/**
 * En base a este parámetro la aplicación decidirá si inyectar servicio en memoria o remoto para los componentes
 */
export const getPreferredApiMode = () => ApiMode.Remote;
/**
 * En base a este parámetros, la aplicación determinará a donde mandar la petición para obtener los artículos
 */
export const getItemsApiEndpoint = () => "http://localhost:54556/api/item";