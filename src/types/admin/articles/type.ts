export interface ArticleTableType {
    id: string
    title: string
    slug: string
    content: string
    image: string | null
    categories: {
        id: string
        name: string
    }[]
    author: {
        id: string
        name: string
    }
    createdAt: string
}

export interface CategoryType {
    id: string
    name: string
}