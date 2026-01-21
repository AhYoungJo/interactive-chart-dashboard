import GlobalProvider from "./_provider/GlobalProvider";
import { Jost, PT_Serif } from "next/font/google";
import GlobalStyles from "../styles/GlobalStyles";
import { AppLayout } from "./_components/AppLayout";

const jost = Jost({
  variable: "--font-jost",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const PTSerif = PT_Serif({
  variable: "--font-pt-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${PTSerif.variable}`}>
        <GlobalProvider>
          <GlobalStyles />
          <AppLayout>{children}</AppLayout>
        </GlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
