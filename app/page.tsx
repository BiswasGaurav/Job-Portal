import Image_tabs from "@/components/image-tabs";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth/auth";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              A better way to track your job application
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              capture, organise, and manage your job search in one place.
            </p>
            <div className="flex flex-col items-center gap-4">
              {(session?.user) ? (
                <>
                  <Link href="/dashboard">
                    <Button variant="ghost" className="text-gray-700 hover:text-black">
                      Dashboard
                    </Button>
                  </Link>
                </>
            ):(<>
                <Link href="/sign-up">
                  <Button size="lg" className="h-12 px-8 text-lg font-medium">
                    Start for free <ArrowRight className="ml-2 mt-1" />
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground">
                  Free forever. No payment required.{" "}
                </p>
              </>)}
            </div>
          </div>
        </section>

        {/* Hero Images with Tabs */}
        <Image_tabs />
      </main>
    </div>
  );
}
