import Image from 'next/image'

export const EmptyFavorites = () => {
	return (
		<div className='h-full flex flex-col items-center justify-center gap-2'>
			<Image src='/empty-favorites.svg' height={140} width={140} alt='empty' />
			<h2 className='text-2xl font-semibold'>Нет избранных</h2>
		</div>
	)
}
