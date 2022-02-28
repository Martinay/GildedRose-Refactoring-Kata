import Item from "@/models/Item";
import UpdateStrategy from "./update-strategy";

export default class NoUpdateStrategy implements UpdateStrategy {
    updateItem(item: Item) : Item {        
        return new Item(item.name, item.sellIn, item.quality);
    }
}