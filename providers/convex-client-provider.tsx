'use client'

import { Loading } from '@/components/auth/loading'
import { ClerkProvider, useAuth } from '@clerk/clerk-react'
import { AuthLoading, Authenticated, ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'

interface ConvexClientProviderProps {
	children: React.ReactNode
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!

const convex = new ConvexReactClient(convexUrl)

export const ConvexClientProvider = ({
	children,
}: ConvexClientProviderProps) => {
	return (
		<ClerkProvider publishableKey='pk_test_d2lubmluZy15ZXRpLTQxLmNsZXJrLmFjY291bnRzLmRldiQ'>
			<ConvexProviderWithClerk useAuth={useAuth} client={convex}>
				<Authenticated>{children}</Authenticated>
				<AuthLoading>
					<Loading />
				</AuthLoading>
			</ConvexProviderWithClerk>
		</ClerkProvider>
	)
}
