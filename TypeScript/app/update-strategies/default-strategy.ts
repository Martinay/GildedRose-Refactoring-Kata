import Item from "../models/Item";
import UpdateStrategy from "./update-strategy";


export default class DefaultStrategy implements UpdateStrategy {    
    constructor(private qualityFactor : number) {}

    updateItem(item: Item) : Item {
        let newQuality = Math.max(0, item.quality - this.qualityFactor);
        let newSellIn = item.sellIn - 1;
        return new Item(item.name, newSellIn, newQuality);
    }
}
