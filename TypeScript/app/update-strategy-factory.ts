import Item from "./models/Item";
import AgedBrieStrategy from "./update-strategies/aged-brie-strategy";
import BackstagePassStrategy from "./update-strategies/backstage-pass-strategy";
import ConjuredStrategy from "./update-strategies/conjured-strategy";
import DefaultStrategy from "./update-strategies/default-strategy";
import UpdateStrategy from "./update-strategies/update-strategy";
import NoUpdateStrategy from "./update-strategies/no-update-strategy";

export class UpdateStrategyFactory {
    static getUpdateStrategy(item: Item): UpdateStrategy {

        let qualityFactor = item.sellIn <= 0 ? 2 : 1;

        switch (item.name) {
            case 'Aged Brie':
                return new AgedBrieStrategy(qualityFactor);
            case 'Sulfuras, Hand of Ragnaros':
                return new NoUpdateStrategy();
            case 'Backstage passes to a TAFKAL80ETC concert':
                return new BackstagePassStrategy();
            case 'conjured':
                return new ConjuredStrategy(qualityFactor);
            default:
                return new DefaultStrategy(qualityFactor);
        }
    }
}