import Item from "../models/Item";
import UpdateStrategy from "./update-strategy";

export default class ConjuredStrategy implements UpdateStrategy {
    constructor(private qualityFactor : number) {}

    updateItem(item: Item) : Item {
        let quality = Math.max(0, item.quality - 2 * this.qualityFactor);
        let sellIn = item.sellIn - 1;
        return new Item(item.name, sellIn, quality);
    }
}
