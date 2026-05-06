export const metadata = {
  title: "E.D.W.A.R.D. Water Restoration",
  description: "Emergency water clean up and restoration services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
