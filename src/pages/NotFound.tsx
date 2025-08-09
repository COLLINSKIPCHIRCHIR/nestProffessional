

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">Page Not Found</p>
      <a href="/" className="text-accent hover:underline">Go back to Home</a>
    </div>
  );
};

export default NotFound;