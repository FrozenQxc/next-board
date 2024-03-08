import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { CreateOrganization } from '@clerk/nextjs'
import Image from 'next/image'

export const EmptyOrg = () => {
	return (
		<div className='h-full flex flex-col items-center justify-center'>
			<Image alt='empty' height={200} width={200} src='/elements.svg' />
			<h2 className='text-2xl font-semibold mt-6'>Добро пожаловать </h2>
			<p className=' text-muted-foreground text-sm mt-2'>
				Создайте организацию что бы начать
			</p>
			<div className='mt-6'>
				<Dialog>
					<DialogTrigger asChild>
						<Button size='lg'>Создать организацию</Button>
					</DialogTrigger>
					<DialogContent className='max-w-[480px] p-0 bg-transparent border-none'>
						<CreateOrganization />
					</DialogContent>
				</Dialog>
			</div>
		</div>
	)
}
