import "@/app/ui/global.css";
import { commissioner } from "@/app/ui/fonts";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${commissioner.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
