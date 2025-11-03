"use client"

import { Alert } from "@/src/components/ui/alert";
import { TriangleAlert } from "lucide-react";

export default function ErrorPage() {
    return (
        <Alert  variant="destructive">
            <TriangleAlert className="h-4 w-4" />
            Une erreur est survenue, Le livre que vous recherchez est introuvable.
        </Alert>
    );
}
