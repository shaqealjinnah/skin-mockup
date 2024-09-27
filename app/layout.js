import "./globals.css";

export const metadata = {
  title: "SKIN",
  description: "Make your skin glow...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
