import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const EmptyBoards = () => {
	return (
		<div className='h-full flex flex-col items-center justify-center'>
			<Image src='/note.svg' height={140} width={140} alt='empty' />
			<h2 className='text-2xl font-semibold mt-6'>
				Создайте свой первый проект!
			</h2>
			<p className=' text-muted-foreground text-sm mt-2'>
				Начните с создания доски для вашей организации
			</p>
			<div className='mt-6'>
				<Button size='lg'>Создать доску</Button>
			</div>
		</div>
	)
}
