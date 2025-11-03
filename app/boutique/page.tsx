import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import  Link from "next/link";
import {books } from "./data";


export async function generateStaticParams() {
    return books.map((book) => ({
        bookId: book.id.toString(),
    }));
}

export default function BoutiquePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-4xl font-bold">Livres</h1>
            <Card className="p-6">
                <CardHeader>
                    <CardTitle>Livres Disponibles</CardTitle>
                </CardHeader>
                <CardContent>
                    {books.map((book) => (
                        <div key={book.id} className="mb-4">
                        <Link 
                                href={`/boutique/books/${book.id}`}
                                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                            >
                                {book.title}
                        </Link>
                        <ul className="list-disc pl-5">
                            <li>Auteur: {book.author}</li>
                            <li>Prix: {book.price} €</li>
                            <li>Description: {book.description}</li>
                        </ul>
                    </div>
                    ))}
                </CardContent>
            </Card>
        </div>  
    );
}