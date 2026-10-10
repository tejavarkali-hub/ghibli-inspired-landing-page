import { Play } from "lucide-react"

export function HomeSection() {
  return (
    <section className="relative flex flex-col items-center bg-[#FBF6ED] px-4 py-24 text-center">
      {/* Gradient fade from sky into cream */}
      <div className="pointer-events-none absolute left-0 top-0 -mt-40 h-40 w-full bg-gradient-to-t from-[#FBF6ED] to-transparent" />
      <p className="mb-4 font-script text-2xl text-primary md:text-3xl">Aether</p>
      <h2 className="mb-6 max-w-lg font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
        {"It's not just a tool."}<br />
        {"It's not just a platform."}<br />
        {"It's where ideas come alive."}
      </h2>

      <button className="mt-8 flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:shadow-md">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
          <Play className="h-3 w-3 fill-primary-foreground text-primary-foreground" />
        </div>
        <span>Watch the story</span>
      </button>
    </section>
  )
}
