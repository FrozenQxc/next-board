import Image from 'next/image'

export const EmptySearch = () => {
	return (
		<div className='h-full flex flex-col items-center justify-center'>
			<Image src='/empty-search.svg' height={140} width={140} alt='empty' />
			<h2 className='text-2xl font-semibold'>Ничего не найдено</h2>
			<p className=' text-muted-foreground text-sm mt-2'>Попробуйте снова</p>
		</div>
	)
}
