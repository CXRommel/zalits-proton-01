import menuData from '#src/data/client.json'
import { useEffect } from 'react';
import { useState } from 'react';



function TopMenuHighDefinition() {
	const { address, contact, menus, schedule, profile, name } = menuData;
	const [isSpanish, setIsSpanish] = useState(false);
	const menuComponents = menus.map((it, index) => {
		return <MenuComponent menu={it} key={index} setIsSpanish={setIsSpanish} isSpanish={isSpanish} />
	})

	const { logo, slogan } = profile;

	return (
		<div className='size-full flex flex-col justify-center bg-orange-100 p-8 gap-4'>
			<HeaderPage name={name} slogan={slogan} logo={logo} isSpanish={isSpanish} />
			<div className='flex gap-4'>
				{menuComponents}
				<div className='flex shadow-lg rounded-xl p-2 bg-white'>
					Barra lateral
				</div>
			</div>
		</div>
	)
}

function HeaderPage({ name, slogan, logo, isSpanish }) {
	return (<div className='flex shadow-lg rounded-xl p-2 items-center bg-white'>
		<img src={logo.url} className='p-4 w-32 h-32' />
		<div>
			<div className='text-3xl'>{name}</div>
			<p className='text-xl'>{isSpanish ? slogan.es : slogan.en}</p>
		</div>
	</div>)
}

function MenuComponent({ menu, isSpanish = false, setIsSpanish }) {


	const changeLanguaje = () => {
		setIsSpanish(current => !current)
	}
	const { name, sections } = menu;
	const sectionComponents = sections.map((section, index) => {
		return <SectionComponent key={index} section={section} isSpanish={isSpanish} />
	})

	return (
		<div className='box-border shadow-2xl p-4 rounded-xl relative bg-white'>
			<div className='text-center text-6xl my-4'>{isSpanish ? name.es : name.en}</div>
			{sectionComponents}
			<button onClick={changeLanguaje} className='absolute top-16 sm:top-0 right-0 p-4 rounded-full shadow-md mt-5 me-7 hover:scale-110 hover:shadow-blue-200 duration-300' >
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
				</svg>
			</button>
		</div>
	)
}

function SectionComponent({ section, isSpanish }) {
	const { name, description, icon, items } = section

	const itemsComponents = items.map((it) => {
		return <Item key={it.id} name={it.name} description={it.description ? it.description : ""} price={it.price} icon={icon} isSpanish={isSpanish} />
	})

	return (
		<div className='mt-6'>
			<div className="text-center text-3xl font-bold">{isSpanish ? name.es : name.en}</div>
			{description && <div className="text-center text-2xl my-3">{isSpanish ? description.es : description.en}</div>}
			<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 p-3 '>
				{itemsComponents}
			</div>
		</div>
	)
}

function Item({ name = "", description = "", price = "", isSpanish = false, icon }) {
	return (
		<div className='flex shadow-lg rounded-xl p-2 items-center hover:scale-110 duration-300 bg-white hover:bg-orange-50'>
			<img src={icon} className='p-4 w-32 h-32' />
			<div>
				<div className='text-xl'>{isSpanish ? name.es : name.en}</div>
				{description && <p className='text-sm'>{isSpanish ? description.es : description.en}</p>}
				<div className='text-lg font-bold'>${isSpanish ? price.mxn : price.usd}</div>
			</div>
		</div>
	)
}

export default TopMenuHighDefinition;
