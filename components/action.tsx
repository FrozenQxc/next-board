'use client'

import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu'
import { Link2, Pencil, Trash } from 'lucide-react'
import { toast } from 'sonner'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { api } from '@/convex/_generated/api'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { useRenameModal } from '@/store/use-rename-modal'
import { ConfirmModal } from './confirm-modal'
import { Button } from './ui/button'

interface ActionsProps {
	children: React.ReactNode
	side?: DropdownMenuContentProps['side']
	sideOffset?: DropdownMenuContentProps['sideOffset']
	id: string
	title: string
}

export const Actions = ({
	children,
	side,
	sideOffset,
	id,
	title,
}: ActionsProps) => {
	const { mutate, pending } = useApiMutation(api.board.remove)
	const { onOpen } = useRenameModal()

	const onCopyLink = () => {
		navigator.clipboard
			.writeText(`${window.location.origin}/board/${id}`)
			.then(() => toast.success('Сылка скопирована'))
			.catch(() => toast.error('Произошла ошибка'))
	}

	const onDelete = () => {
		mutate({ id })
			.then(() => toast.success('Доска удаленна'))
			.catch(() => toast.error('Произошла ошибка'))
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent
				onClick={e => e.stopPropagation()}
				side={side}
				sideOffset={sideOffset}
				className='w-60'
			>
				<DropdownMenuItem onClick={onCopyLink} className='p-3 cursor-pointer'>
					<Link2 className='h-4 w-4 mr-2' />
					Скопировать сылку
				</DropdownMenuItem>
				<ConfirmModal
					disabled={pending}
					onConfirm={onDelete}
					header='Удалить доску?'
					description='Все будет удаленно'
				>
					<Button
						variant='ghost'
						className='p-3 cursor-pointer text-sm w-full justify-start font-normal'
					>
						<Trash className='h-4 w-4 mr-2' />
						Удалить
					</Button>
				</ConfirmModal>
				<DropdownMenuItem
					onClick={() => onOpen(id, title)}
					className='p-3 cursor-pointer'
				>
					<Pencil className='h-4 w-4 mr-2' />
					Переименовать
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
