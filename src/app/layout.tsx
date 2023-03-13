import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "SolClan",
  description: "On-Chain governance for your Business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
