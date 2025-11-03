import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import  Link from "next/link";
import { books, Book } from '../../../../data';
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return books.flatMap((book) => 
        book.chapters?.map((chapter) => ({
            bookId: book.id.toString(),
            chapterId: chapter.number.toString(),
        })) || []
    );
}

export default async function BookPage(props: {params: Promise<{ bookId: string, chapterId: string  }>}) {

    const params = await props.params;
    const thisbook = books.find((book) => book.id === parseInt(params.bookId, 10));
    const thischapter = thisbook?.chapters?.find((chapter) => chapter.number === parseInt(params.chapterId, 10));

    if (!thisbook) {
        throw new Error("Book not found");
    }
    if (!thischapter) {
        notFound();
    }

    return ( 
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
            <Card className="p-6">
            <CardHeader>
                <CardTitle>Objet dispo</CardTitle>
            </CardHeader>
            <CardContent>
                <pre>{JSON.stringify(thischapter, null, 2)}</pre>
            </CardContent>
        </Card>
    </div>
    );
}