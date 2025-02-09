import Item from "./models/Item";
import { UpdateStrategyFactory } from "./update-strategy-factory";
export class GildedRose {
  private constructor() {}

  static updateQuality(items = [] as Array<Item>) {    
    let updatedItems = items.map(
      item => UpdateStrategyFactory.getUpdateStrategy(item).updateItem(item));
    return updatedItems;
  }
}
