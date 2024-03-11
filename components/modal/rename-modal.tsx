'use client'

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { api } from '@/convex/_generated/api'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { useRenameModal } from '@/store/use-rename-modal'
import { FormEventHandler, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export const RenameModal = () => {
	const { mutate, pending } = useApiMutation(api.board.update)
	const { isOpen, onClose, initialValues } = useRenameModal()

	const [title, setTitle] = useState(initialValues.title)

	useEffect(() => {
		setTitle(initialValues.title)
	}, [initialValues.title])

	const onSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		mutate({
			id: initialValues.id,
			title,
		})
			.then(() => {
				toast.success('Доска переименована')
				onClose()
			})
			.catch(() => toast.error('Произошла ошибка'))
	}

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Переименовать заголовок</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					Нажмите Enter что бы применить изменение
				</DialogDescription>
				<form onSubmit={onSubmit} className='space-y-4'>
					<Input
						disabled={pending}
						required
						maxLength={60}
						value={title}
						onChange={e => setTitle(e.target.value)}
						placeholder='Заголовок доски'
					/>
					<DialogFooter>
						<DialogClose asChild>
							<Button type='button' variant='outline'>
								Закрыть
							</Button>
						</DialogClose>
						<Button disabled={pending} type='submit'>
							Сохранить
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
