import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import  Link from "next/link";
import { books, Book } from '../../data';

export async function generateStaticParams() {
    return books.map((book) => ({
        bookId: book.id.toString(),
    }));
}

export default async function BookPage(props: {params: Promise<{ bookId: string  }>}) {

    const params = await props.params;
    const thisbook = books.find((book) => book.id === parseInt(params.bookId, 10));

    if (!thisbook) {
        return <div>Book not found</div>;
    }

    return ( 
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
            <Card className="p-6">
            <CardHeader>
                <CardTitle>{thisbook.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul>
                    <li>Auteur: {thisbook.author}</li>
                    <li>Année: {thisbook.year}</li>
                    <li>Description: {thisbook.description}</li>
                    <li>Prix: {thisbook.price} €</li>
                    <li>Catégorie: {thisbook.category}</li>
                    <li>Rating: {thisbook.rating}</li>
                    <li>Stock: {thisbook.stock}</li>
                </ul>
                <h2 className="mt-6 text-lg font-semibold">Chapitres</h2>
                <ul className="mt-4 list-disc pl-5 font-bold">
                    {thisbook.chapters?.map((chapter) => (
                        <li key={chapter.number}>
                            <Link href={`/boutique/books/${thisbook.id}/chapter/${chapter.number}`}>
                                {chapter.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    </div>
    );
}