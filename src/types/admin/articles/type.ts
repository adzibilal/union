export interface ArticleTableType {
    id: string
    title: string
    slug: string
    content: string
    image: string | null
    ArticleCategory: {
        category: {
            id: string
            name: string
        }
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

export interface ArticlePayload {
    title: string
    slug: string
    content: string
    image: string | null
    authorId: string
    categories: string[]
}