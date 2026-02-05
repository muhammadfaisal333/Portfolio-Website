
export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center gap-6">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Muhammad Faisal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}