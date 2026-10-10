import Image from "next/image"
import { Sparkles, Layers, Palette, Pen } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-sky.jpg"
        alt="Dreamy twilight sky with pink and purple clouds"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a1845]/40 via-transparent to-transparent" />
      {/* Bottom fade into cream section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-[#FBF6ED] to-transparent" />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <p className="mb-2 font-script text-2xl text-[#f5c6d0] md:text-3xl">Your Creative</p>
        <h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-primary-foreground md:text-7xl lg:text-8xl">
          Workspace in the Cloud
        </h1>
        <p className="mb-8 max-w-md text-sm leading-relaxed text-primary-foreground/80 md:text-base">
          Aether is a personal workspace that belongs to you. Create,
          collaborate, and build anything you imagine -- your tools,
          your data, your space to grow.
        </p>
        <button className="rounded-full bg-gradient-to-r from-[#d94f7a] to-[#e8738a] px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-110">
          Start Creating
        </button>

        <div className="mt-16 flex items-center gap-6">
          {[
            { icon: Pen, color: "from-[#f5a623] to-[#f7c948]" },
            { icon: Palette, color: "from-[#3a3a5c] to-[#5a5a8c]" },
            { icon: Layers, color: "from-[#8b5cf6] to-[#a78bfa]" },
            { icon: Sparkles, color: "from-[#ef4444] to-[#f87171]" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg md:h-16 md:w-16`}
            >
              <item.icon className="h-6 w-6 text-primary-foreground" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
