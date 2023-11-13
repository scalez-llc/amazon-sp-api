import { ApiTemplate } from "../../../ApiTemplate";

export type ItemAsin = string;
export interface ItemAttributes {

}
export interface ItemDimensions {

}
export interface ItemIdentifiers {

}
export interface ItemImages {

}
export interface ItemProductTypes {

}
export interface ItemRelationships {

}
export interface ItemSalesRanks {

}
export interface ItemSummaries {

}
export interface ItemVendorDetails {
    
}
export interface Item {
    asin: ItemAsin,
    attributes?: ItemAttributes
}

export type IdentifiersType = "ASIN" | "EAN" | "GTIN" | "ISBN" | "JAN" | "MINSAN" | "SKU" | "UPC"
export type IncludedData = "attributes" | "dimensions" | "identifiers" | "images" | "productTypes" | "relationships" | "salesRanks" | "summaries" | "vendorDetails"
export interface Pagination {
    nextToken: string,
    previousToken: string
}
export interface BrandRefinement {
    numberOfResults: number,
    brandName: string
}
export interface ClassificationRefinement {
    numberOfResults: number,
    displayName: string,
    classificationId: string
}
export interface Refinements {
    brands: BrandRefinement[],
    classifications: ClassificationRefinement[]
}

export interface ItemSearchResults {
    numberOfResults: number,
    pagination: Pagination,
    refinements: Refinements,
    items: Item[]
}

class CatalogItems_20220401 extends ApiTemplate {
    async searchCatalogItems (
        marketplaceIds: string[],
        identifiers?: string[],
        identifiersType?: IdentifiersType,
        includedData?: IncludedData[],
        locale?: string,
        sellerId?: string,
        keywords?: string[],
        brandNames?: string[],
        classificationIds?: string[],
        pageSize?: number,
        pageToken?: string,
        keywordsLocale?: string
    ): ItemSearchResults {

    }
}