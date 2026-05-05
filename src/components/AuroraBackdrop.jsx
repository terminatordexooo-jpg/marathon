export default function AuroraBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* base lifted gradient — slightly lighter than night-700 so the page never reads as flat black */}
      <div
        className="absolute inset-0 hue-flow"
        style={{
          background:
            'radial-gradient(120% 90% at 20% 10%, rgba(155,107,255,0.28) 0%, rgba(20,12,36,0) 55%), radial-gradient(110% 80% at 85% 30%, rgba(232,167,181,0.22) 0%, rgba(20,12,36,0) 60%), radial-gradient(120% 90% at 60% 100%, rgba(194,111,74,0.18) 0%, rgba(16,11,31,0) 65%), linear-gradient(180deg, #160F26 0%, #100B1F 60%, #0C0818 100%)',
        }}
      />
      <div className="absolute inset-0 mix-blend-screen">
        <div className="aurora aurora-rose aurora-drift-a w-[60vw] h-[60vw] -top-[15vw] -left-[15vw] opacity-40" />
        <div className="aurora aurora-plum aurora-drift-b w-[55vw] h-[55vw] top-[30vh] -right-[10vw] opacity-35" />
        <div className="aurora aurora-terra aurora-drift-c w-[50vw] h-[50vw] bottom-[-20vw] left-[20vw] opacity-25" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          background:
            'radial-gradient(circle at 20% 10%, rgba(232,167,181,0.25), transparent 35%), radial-gradient(circle at 80% 70%, rgba(155,107,255,0.22), transparent 40%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}
