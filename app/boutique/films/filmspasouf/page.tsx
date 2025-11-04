import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";




export default async function Page() {
    return ( 
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
            <Card className="p-6">
            <CardHeader>
                <CardTitle>Test PRs</CardTitle>
            </CardHeader>
            <CardContent>
                Pas si ouf le film
            </CardContent>
        </Card>
    </div>
    );
}