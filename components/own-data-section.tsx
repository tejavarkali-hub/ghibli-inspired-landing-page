import Image from "next/image"

export function OwnDataSection() {
  return (
    <section className="relative">
      {/* Image with top and bottom fades */}
      <div className="relative h-[500px] w-full md:h-[600px]">
        <Image
          src="/images/cloud-machinery.jpg"
          alt="Fantastical cloud machinery floating in the sky"
          fill
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#FBF6ED] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FBF6ED] to-transparent" />
      </div>

      <div className="flex flex-col items-center bg-[#FBF6ED] px-4 py-20 text-center">
        <p className="mb-4 font-script text-2xl text-primary md:text-3xl">Your Data, Your Rules</p>
        <h2 className="mb-6 max-w-lg font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
          Everything you create<br />
          stays yours forever.
        </h2>
        <p className="mb-12 max-w-md text-sm leading-relaxed text-muted-foreground">
          Every project lives in its own secure sandbox, giving
          you full control over your work and data.
          Export, share, or delete anything at any time --
          you are always in charge.
        </p>

        {/* Chat UI mockup */}
        <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
              <span className="text-xs font-bold text-foreground">AI</span>
            </div>
            <span className="text-sm font-medium text-foreground">AI Assistant</span>
          </div>
          <div className="flex">
            {/* Sidebar */}
            <div className="hidden w-48 border-r border-border bg-secondary/50 p-3 md:block">
              <div className="mb-2 text-xs font-medium text-muted-foreground">All Chats</div>
              <div className="mb-2 text-xs font-medium text-muted-foreground">Starred</div>
            </div>
            {/* Chat area */}
            <div className="flex flex-1 flex-col p-4">
              <div className="mb-4 flex gap-3">
                <div className="rounded-2xl rounded-bl-sm bg-secondary px-4 py-2">
                  <p className="text-xs text-foreground">Can you help me draft</p>
                  <p className="text-xs text-foreground">the project proposal?</p>
                </div>
              </div>
              <div className="mb-4 flex justify-end gap-3">
                <div className="rounded-2xl rounded-br-sm bg-primary px-4 py-2">
                  <p className="text-xs text-primary-foreground">Sure, let me pull up the brief.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="rounded-2xl rounded-bl-sm bg-secondary px-4 py-2">
                  <p className="text-xs text-foreground">{"Here's the outline so far..."}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] text-muted-foreground">
                <span>09:32 AM</span>
                <span>-</span>
                <span>09:36 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
