export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-18 py-10">
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-lg font-semibold">
            Tenacitas: Workforce Transformation
          </p>
          <p className="text-base opacity-80">
            © {new Date().getFullYear()} Tenacitas. All rights reserved.
          </p>
          <p className="text-base opacity-80">
            Registered in England - Company number: 17154220
          </p>
        </div>
      </div>
    </footer>
  );
}
