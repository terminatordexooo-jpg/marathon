export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.05] py-8 text-center">
      <p className="text-xs tracking-[3px] text-white/20">
        © {year} DASHA — MARATHON
      </p>
    </footer>
  )
}
