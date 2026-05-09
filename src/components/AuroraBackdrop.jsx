export default function AuroraBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* hi-key wash — almost white with the faintest pink/grey gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 0%, rgba(248,238,238,1) 0%, rgba(244,239,237,1) 60%, rgba(238,232,231,1) 100%)',
        }}
      />
    </div>
  )
}
