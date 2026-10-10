import Link from "next/link"

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
          <span className="text-sm font-bold text-primary-foreground">A</span>
        </div>
        <span className="text-sm font-medium text-primary-foreground/90">Aether</span>
      </div>
      <div className="flex items-center gap-6">
        <Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
          Login
        </Link>
        <Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
          Sign up
        </Link>
      </div>
    </nav>
  )
}
