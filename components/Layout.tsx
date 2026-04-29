import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="h-[100dvh] w-full bg-[#020202] text-white relative overflow-hidden font-sans selection:bg-primary/30">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Simplified Ambient Lights */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.03),transparent_70%)]" />
      </div>

      <div className="relative z-10 h-full w-full">
        {children}
      </div>

      <style>{`
        /* Custom selection color */
        ::selection {
          background: rgba(59, 130, 246, 0.3);
          color: white;
        }
      `}</style>
    </main>
  );
};

export default Layout;