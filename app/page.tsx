import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-20 min-h-screen bg-gradient-to-b from-primary/5 via-background to-background font-[family-name:var(--font-geist-sans)]">
      <Header />
      <ol className="list-inside list-decimal text-md text-center sm:text-left py-10 font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">
          Copy the code generated by PageGen AI to{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            app/page.tsx
          </code>
          .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/preview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Preview The Page
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="https://pagegen.ai/how-to-use-pagegen-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read PageGen Docs
        </a>
      </div>
      <Footer />
    </main>
  );
}
