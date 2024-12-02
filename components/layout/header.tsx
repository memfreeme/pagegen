import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "https://pagegen.ai/templates", label: "Templates" },
  { href: "https://pagegen.ai/showcases", label: "ShowCases" },
  { href: "https://pagegen.ai/generate", label: "Generator" },
  { href: "https://pagegen.ai/pricing", label: "Pricing" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      {/* <PromotionBanner /> */}
      <div className="container flex items-center h-16">
        <div className="flex-shrink-0">
          <Link
            href="https://pagegen.ai"
            className="flex items-center space-x-2.5 font-bold text-2xl"
          >
            <Image
              src="https://pagegen.ai/logo.png"
              width={32}
              height={32}
              unoptimized
              alt={"PageGen Logo"}
            ></Image>
            <p className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              PageGen
            </p>
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-center flex-1 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium text-base hover:text-primary transition-colors px-6",
                "relative after:absolute after:left-0 after:right-0 after:-bottom-1",
                "after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100",
                "after:origin-left after:transition-transform after:duration-300"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex justify-end ml-auto space-x-4 items-center">
          <div className="flex items-center space-x-3">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "default", size: "default" }),
                "rounded-full hidden md:inline-flex"
              )}
            >
              Sign in
            </Link>
          </div>
          {/* <div className="hidden md:block">
            <ThemeButton />
          </div> */}

          <Sheet>
            <SheetTrigger className="md:hidden hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md w-9 h-9 transition-colors">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <nav className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center h-10 px-4 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
