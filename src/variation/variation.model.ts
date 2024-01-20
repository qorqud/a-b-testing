export interface Variation {
    id: string
    data: VariationData
}

interface VariationData {
    style: VariationStyle
    content: VariationContent
}

export enum VariationStyle {
    SIMPLE = 'SIMPLE'
}

interface VariationContent {

}

export interface SimpleVariationContent extends VariationContent {
    text: string
}