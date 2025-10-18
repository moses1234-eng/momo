const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {currentYear} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
