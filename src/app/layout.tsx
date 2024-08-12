import './styles/globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>CareFinder Nigeria</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
