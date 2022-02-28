import Item from "../models/Item";


export default interface UpdateStrategy {
    updateItem(item: Item) : Item;
}
