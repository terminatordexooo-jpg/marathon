export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-rose/20 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-2xl text-ink">
            Body by <span className="italic text-gradient-rose">Savi</span>
          </p>
          <p className="mt-1 font-display italic text-base text-rose-deep/80">клуб змін</p>
        </div>
        <div className="text-xs text-ink/55">
          <p>© {new Date().getFullYear()} Body by Savi. Усі права захищені.</p>
          <p className="mt-1">
            Питання —{' '}
            <a
              href="https://www.instagram.com/daria.savitskaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline-offset-4 hover:underline"
            >
              @daria.savitskaya
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
