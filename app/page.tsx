import { SakuraPetals } from "@/components/sakura-petals"
import { InvitationContent } from "@/components/invitation-content"

export default function OmakaseInvitation() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Three.js Sakura petals background */}
      <SakuraPetals />

      {/* Subtle gradient overlay for depth */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, var(--background) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Main invitation content */}
      <InvitationContent />
    </main>
  )
}
