import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { MessageSquare, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-10">
      <div className="mx-auto max-w-7xl justify-between px-4 lg:px-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="space-y-4">
          <Link
            href="/"
            className="flex  space-x-2 items-center font-bold text-2xl"
          >
            <Image
              src="https://pagegen.ai/logo.png"
              width={48}
              height={48}
              unoptimized
              alt={"PageGen Logo"}
            ></Image>
            <p>PageGen</p>
          </Link>
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <Link
              href="https://pagegen.ai/"
              target="_blank"
              className="text-primary hover:text-primary/80 transition-colors mr-6"
            >
              PageGen
            </Link>
          </p>
          <p className="text-sm text-muted-foreground">
            10x Faster Page Generation with PageGen AI
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://x.com/ahaapple2023"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Twitter className="size-4" />
              </Button>
            </Link>
            <Link
              href="https://discord.com/invite/7QqyMSTaRq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <DiscordLogoIcon className="size-4" />
              </Button>
            </Link>
            <Link href="/feedback" target="_blank">
              <Button variant="ghost" size="icon">
                <MessageSquare className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold">Product</h4>
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link
                  href="#features"
                  className="text-muted-foreground hover:text-primary"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-primary"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/templates"
                  className="text-muted-foreground hover:text-primary"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/generate"
                  className="text-muted-foreground hover:text-primary"
                >
                  Generator
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">Legal</h4>
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link
                  href="/terms"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
