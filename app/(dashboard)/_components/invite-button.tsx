import { Button } from '@/components/ui/button'
import { DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { OrganizationProfile,  } from '@clerk/nextjs'
import { Dialog } from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'

export const InviteButton = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline'>
					<Plus className='h-4 w-4 mr-2' />
					Пригласить участника
				</Button>
			</DialogTrigger>
			<DialogContent className='p-0 bg-transparent border-none max-w-[880px]'>
				<OrganizationProfile />
			</DialogContent>
		</Dialog>
	)
}
