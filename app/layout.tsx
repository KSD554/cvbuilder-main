import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV Forge – Créez un CV unique, forgé à votre image.",
  description: "Avec CV Forge, transformez votre parcours professionnel en une véritable œuvre d'art. Notre plateforme intuitive vous permet de concevoir un CV moderne, personnalisé et impactant, adapté à votre domaine d'expertise. Que vous soyez étudiant, jeune diplômé ou professionnel expérimenté, CV Forge vous offre des outils puissants pour mettre en valeur vos compétences et captiver les recruteurs.Car votre carrière mérite un CV aussi solide et remarquable que vous. 💼✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="sunset">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
