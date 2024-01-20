import {Variation} from "../variation.model";
import {VariationTemplateGenerator} from "./variation-template-generator";

export class SimpleVariationTemplateGenerator implements VariationTemplateGenerator {

    constructor(private variation: Variation) {
    }

    public getHtml() {
        return this.variation.data.content['text']
    }

}