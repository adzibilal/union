export interface ArticleTableType {
    id: string
    title: string
    resume: string
    slug: string
    content: string
    image: string | null
    isPublished: boolean
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
    resume: string
    slug: string
    content: string
    image: string | null
    isPublished: boolean
    authorId: string
    categories: string[]
}