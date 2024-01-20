import {CookieUtil} from "../util/cookie-util";
import {SimpleVariationContent, Variation, VariationStyle} from "./variation.model";

export class VariationService {

    private static readonly VARIATION_COOKIE_KEY_PREFIX = 'ab_variation';
    private variations: Variation[]

    constructor(private readonly articleId: string) {
        this.articleId = articleId;
        this.initializeVariation()
    }

    public getVariationObject() {
        return this.variations.find(variation => variation.id == this.getVariationIdForArticle())
    }

    public getVariationIdForArticle() {
        return CookieUtil.getValueFromCookie(this.getVariationCookieKeyForArticle());
    }

    private initializeVariation() {
        this.loadVariationsForArticle()
        const variationIdFromCookie = this.getVariationIdForArticle()
        if (!variationIdFromCookie) {
            this.setVariationIdCookieForArticle(this.generateRandomVariationId());
        }
    }

    private loadVariationsForArticle() {
        const controlVariationContent: SimpleVariationContent = {
            text: 'Meet the app that revolutionized reading.'
        }
        const testVariationContent: SimpleVariationContent = {
            text: 'Meet the app that has 18 million users.'
        }
        this.variations = [
            {
                id: 'control',
                data: {
                    style: VariationStyle.SIMPLE,
                    content: controlVariationContent
                }
            },
            {
                id: 'test',
                data: {
                    style: VariationStyle.SIMPLE,
                    content: testVariationContent
                }
            }
        ];
    }

    private generateRandomVariationId(): string {
        const randomIndex = Math.floor(Math.random() * this.variations.length);
        return this.variations[randomIndex].id
    }

    private setVariationIdCookieForArticle(variationId: string) {
        CookieUtil.setCookieValue(this.getVariationCookieKeyForArticle(), variationId)
    }

    private getVariationCookieKeyForArticle() {
        return `${VariationService.VARIATION_COOKIE_KEY_PREFIX}_${this.articleId}`
    }

}