import PageWrapper from "@/common/components/PageWrapper";
import Home from "@/modules";

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <PageWrapper>
                <Home />
            </PageWrapper>
        </main>
    )
}
