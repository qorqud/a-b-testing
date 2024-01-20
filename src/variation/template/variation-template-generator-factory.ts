import {Variation, VariationStyle} from "../variation.model";
import {VariationTemplateGenerator} from "./variation-template-generator";
import {SimpleVariationTemplateGenerator} from "./simple-variation-template-generator";

export class VariationTemplateGeneratorFactory {

    public static get(variation: Variation): VariationTemplateGenerator {
        if (variation.data.style == VariationStyle.SIMPLE) {
            return new SimpleVariationTemplateGenerator(variation)
        }
    }

}