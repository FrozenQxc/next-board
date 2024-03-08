import { ConvexClientProvider } from '@/providers/convex-client-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: '⚡Next Board',
	description: 'Generated by create next app',
	icons: {
		icon: '1.jpg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Toaster />
				<ConvexClientProvider>{children}</ConvexClientProvider>
			</body>
		</html>
	)
}
