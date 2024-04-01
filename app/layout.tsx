//import global.css file here
import '@/app/ui/global.css';
/*import fonts here*/
import { lusitana } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} bold`}>{children}</body>
    </html>
  );
}
