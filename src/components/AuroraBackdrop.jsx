export default function AuroraBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden mix-blend-screen">
      <div className="aurora aurora-rose w-[60vw] h-[60vw] -top-[15vw] -left-[15vw] opacity-30" />
      <div className="aurora aurora-plum w-[55vw] h-[55vw] top-[40vh] -right-[10vw] opacity-25" />
      <div className="aurora aurora-terra w-[50vw] h-[50vw] bottom-[-20vw] left-[20vw] opacity-15" />
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          background:
            'radial-gradient(circle at 20% 10%, rgba(232,167,181,0.25), transparent 35%), radial-gradient(circle at 80% 70%, rgba(155,107,255,0.22), transparent 40%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}
