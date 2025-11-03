// app/boutique/data.ts
export interface Chapter {
    number: number
    title: string
    startPage?: number
}

export interface Book {
    id: number
    title: string
    author: string
    year?: number
    description?: string
    price?: number
    cover?: string
    category?: string
    rating?: number
    stock?: number
    chapters?: Chapter[]
}

export const books: Book[] = [
    {
        id: 1,
        title: "Le Petit Prince",
        author: "Antoine de Saint-Exupéry",
        year: 1943,
        description: "Conte poétique et philosophique sur l'enfance, l'amitié et le sens de la vie.",
        price: 8.9,
        cover: "/images/le-petit-prince.jpg",
        category: "Conte",
        rating: 4.8,
        stock: 12,
        chapters: [
            { number: 1, title: "Rencontre avec le pilote", startPage: 1 },
            { number: 2, title: "Le portrait du Petit Prince", startPage: 7 },
            { number: 3, title: "La planète de l'allumeur de réverbères", startPage: 15 },
        ],
    },
    {
        id: 2,
        title: "Les Misérables",
        author: "Victor Hugo",
        year: 1862,
        description: "Épopée sociale et humaine explorant la justice, la rédemption et la misère.",
        price: 14.5,
        cover: "/images/les-miserables.jpg",
        category: "Roman historique",
        rating: 4.7,
        stock: 5,
        chapters: [
            { number: 1, title: "Fantine", startPage: 1 },
            { number: 2, title: "Cosette", startPage: 120 },
            { number: 3, title: "Marius", startPage: 360 },
            { number: 4, title: "La bataille", startPage: 520 },
        ],
    },
    {
        id: 3,
        title: "L'Étranger",
        author: "Albert Camus",
        year: 1942,
        description: "Roman existentialiste sur l'absurdité et la condition humaine.",
        price: 7.5,
        cover: "/images/letranger.jpg",
        category: "Roman",
        rating: 4.4,
        stock: 8,
        chapters: [
            { number: 1, title: "Partie I", startPage: 1 },
            { number: 2, title: "Partie II", startPage: 80 },
        ],
    },
]
