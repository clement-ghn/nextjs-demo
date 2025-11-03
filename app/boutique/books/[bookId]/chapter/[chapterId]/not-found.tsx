import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";


export default async function NotFound() {

    return ( 
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
            <Card className="p-6">
            <CardHeader>
                <CardTitle>404</CardTitle>
            </CardHeader>
            <CardContent className="py-4">
                <p className="text-center">Le chapitre que vous recherchez est introuvable.</p>
            </CardContent>
        </Card>
    </div>
    );
}