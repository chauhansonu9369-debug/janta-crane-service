import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "जनता क्रेन सर्विस | 24 घंटे Crane Service | बहराइच",
  description:
    "जनता क्रेन सर्विस से 24 घंटे क्रेन सेवा प्राप्त करें। नानपारा बाईपास, लक्ष्मीपुर रोड, मिहींपुरवा और बहराइच क्षेत्र में क्रेन सेवा के लिए संपर्क करें।",
  keywords:
    "Crane Service Bahraich, Crane Rental Bahraich, Crane Service Nanpara, Crane Service Mihimpurva, Janta Crane Service, 24 Hour Crane Service, जनता क्रेन सर्विस, क्रेन सर्विस बहराइच",
  openGraph: {
    title: "जनता क्रेन सर्विस | 24 घंटे Crane Service",
    description: "भरोसेमंद क्रेन सेवा और भारी सामान उठाने के लिए प्रोफेशनल सहायता।",
    locale: "hi_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏗️</text></svg>" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
