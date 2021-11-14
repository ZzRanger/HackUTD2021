export interface CategoryType {
  name: string,
  subcategories: Array<string>
}

export const categories: Array<CategoryType> = [
  {
    "name": "personal",
    "subcategories": [
      "wallet",
      "keys",
      "purse",
      "backpack",
      "other"
    ]
  }, {
    "name": "technology",
    "subcategories": [
      "laptop",
      "calculator",
      "phone",
      "other"
    ]
  }, {
    "name": "clothing",
    "subcategories": [
      "jacket",
      "sweater",
      "shoes",
      "other"
    ]
  }
]

export default categories;
