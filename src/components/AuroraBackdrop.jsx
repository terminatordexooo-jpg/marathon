export default function AuroraBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* soft white-pink wash so bubbles sit on a luminous canvas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 20% 10%, rgba(248,210,218,0.55) 0%, rgba(255,255,255,0) 55%), radial-gradient(110% 80% at 85% 30%, rgba(255,224,229,0.5) 0%, rgba(255,255,255,0) 60%), radial-gradient(120% 90% at 60% 100%, rgba(244,238,228,0.6) 0%, rgba(255,255,255,0) 65%), linear-gradient(180deg, #FFFFFF 0%, #FDF6F4 60%, #FAEFEF 100%)',
        }}
      />
    </div>
  )
}
