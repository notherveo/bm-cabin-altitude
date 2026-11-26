import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © 2026 CABIN ALTITUDE. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
            <Link href="/safety" className="hover:text-primary">
              Safety
            </Link>
            <span className="text-muted-foreground">Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
