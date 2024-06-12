export interface PortofolioTableType {
    id: string
    title: string
    resume: string
    slug: string
    content: string
    image: string | null
    buildPrice: number
    client: string
    designPrice: number
    isPublished: boolean
    location: string
    material: string
    projectType: string
    size: string
    PortofolioStyle: {
        style: {
            id: string
            name: string
            description: string | null
            image: string | null
        }
    }[]
    author: {
        id: string
        name: string
    }
    createdAt: string
}

export interface StyleDesignType {
    id: string
    name: string
    description: string | null
    image: string | null
}

export interface PortofolioPayload {
    title: string
    resume: string
    slug: string
    content: string
    image: string | null
    buildPrice: number
    client: string
    designPrice: number
    isPublished: boolean
    location: string
    material: string
    projectType: string
    size: string
    authorId: string
    styleDesigns: string[]
}
