'use client'

import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { useOrganization } from '@clerk/nextjs'
import Image from 'next/image'
import { toast } from 'sonner'

export const EmptyBoards = () => {
	const { organization } = useOrganization()
	const { mutate, pending } = useApiMutation(api.board.create)

	const onClick = () => {
		if (!organization) return

		mutate({
			orgId: organization.id,
			title: 'Untitled',
		})
			.then(id => {
				toast.success('Доска создана!')
			})
			.catch(() => toast.error('Произошла ошибка при создание доски'))
	}
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
				<Button disabled={pending} onClick={onClick} size='lg'>
					Создать доску
				</Button>
			</div>
		</div>
	)
}
