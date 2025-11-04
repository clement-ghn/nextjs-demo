import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import  Link from "next/link";
import { prisma } from "@/src/lib/prisma";



export default async function Page() {

    const reviews = await prisma.review.findMany();

    return ( 
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
            <Card className="p-6">
            <CardHeader>
                <CardTitle>Les films</CardTitle>
            </CardHeader>
            <CardContent>
               {reviews.map((review) => (
                   <div key={review.id}>
                       <h3>{review.name}</h3>
                       <p>{review.review}</p>
                       <p>Rating: {review.rating}</p>
                   </div>
               ))}
            </CardContent>
        </Card>
    </div>
    );
}