export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="fixed inset-0 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/ALbg.png')",
          opacity: 1,
          zIndex: 0,
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
