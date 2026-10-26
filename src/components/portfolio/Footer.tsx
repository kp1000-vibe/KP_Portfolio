export function Footer() {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-mono">
          <div className="flex items-center gap-2">
            <div className="status-dot status-dot--online" />
            <p>© {new Date().getFullYear()} Kunal Patro — system.online</p>
          </div>
          <p className="text-primary font-medium">Senior Product Manager • Bay Area, CA</p>
        </div>
      </div>
    </footer>
  );
}
