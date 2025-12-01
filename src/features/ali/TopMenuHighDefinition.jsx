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

	// Schedule
	const { days, open, time } = {
		"days": [1, 2, 3, 4, 5],
		"open": "23:00",
		"time": "11"
	}

	const OpenTimeComponents = schedule.map((it, index) => {
		return <OpenTime key={index} days={it.days} open={it.open} time={it.time} isSpanish={isSpanish} />
	});

	return (
		<div className='w-full flex flex-col justify-center bg-orange-100 p-8 gap-4'>
			<HeaderPage name={name} slogan={slogan} logo={logo} isSpanish={isSpanish} address={address} contact={contact} />
			{/* Schedule */}
			<div className='flex justify-center overflow-x-scroll lg:overflow-x-visible'>
				{OpenTimeComponents}
			</div>
			<div className='flex gap-4  '>
				{menuComponents}
			</div>
		</div>
	)
}

function OpenTime({ days, open, time, isSpanish }) {
	function getFinalTime() {
		const closeHour = new Date(0, 0, 0, parseInt(open), 0, 0, 0);
		closeHour.setHours(closeHour.getHours() + parseInt(time));
		const hours = closeHour.getHours();
		const minuts = closeHour.getMinutes();
		return closeHour.toLocaleTimeString(navigator.language, { hourCycle: "h24", hour: "2-digit", minute: "2-digit" })
	}

	const daysOfWeek = days.map((it, index) => {
		const endTime = getFinalTime()
		return (
			<div className='shadow-lg rounded-xl m-1 p-2 items-center bg-white justify-between' key={index}>
				<DaysOfWeekList dayIndex={it} isSpanish={isSpanish} openTime={open} closeTime={endTime} />
			</div>
		)
	})

	return (
		<div className='flex'>
			{daysOfWeek}
		</div>
	)
}

function DaysOfWeekList({ dayIndex, isSpanish, openTime, closeTime }) {
	const listOfDaysOfWeek = [
		{ es: "Domingo", en: "Sunday" },
		{ es: "Lunes", en: "Monday" },
		{ es: "Martes", en: "Tuesday" },
		{ es: "Miercoles", en: "Wensday" },
		{ es: "Juevas", en: "Thursday" },
		{ es: "Viernes", en: "Friday" },
		{ es: "Sabado", en: "Saturday" },
	]

	return (
		<div className='flex my-4 items-center'>
			<div className='me-2'>
				{isSpanish ? listOfDaysOfWeek[dayIndex].es : listOfDaysOfWeek[dayIndex].en}
			</div>
			<div>
				{openTime} - {closeTime}
			</div>
		</div>
	)
}


function HeaderPage({ name, slogan, logo, isSpanish, address, contact }) {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 shadow-lg rounded-xl p-4 items-center bg-white justify-between'>
			<div className='flex items-center'>
				<img src={logo.url} className='w-16 h-16 lg:w-32 lg:h-32 me-4' />
				<div>
					<div className='text-3xl'>{name}</div>
					<p className='text-xl'>{isSpanish ? slogan.es : slogan.en}</p>
					<p className='text-xs text-gray-500'>{address.street}. {address.zip}. {address.city}. {address.state}. {address.country}</p>
				</div>
			</div>
			<div className='flex lg:flex-row-reverse mt-2 lg:mt-0'>
				<ContactPart contact={contact} />
			</div>
		</div>
	)
}

function ContactPart({ contact }) {
	const contactIcons = {
		phone: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>,
		email: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" /></svg>,
		instagram: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30"><path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path></svg>,
		facebook: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50"><path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path></svg>
	}

	const { phone, email, social } = contact
	const { instagram, facebook } = social

	return (
		<div>
			<ContactItem icon={contactIcons.phone} text={phone} />
			<ContactItem icon={contactIcons.email} text={email} />
			<ContactItem icon={contactIcons.instagram} text={instagram} />
			<ContactItem icon={contactIcons.facebook} text={facebook} />
		</div>
	)
}

function ContactItem({ icon, text }) {
	return (
		<div className=''>
			<div className='flex text-xs items-center'>
				<div className='me-2'>
					{icon}
				</div>
				<div>
					{text}
				</div>
			</div>
		</div>
	)
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
			<img src={icon} className='p-4 w-24 h-24 lg:w-32 lg:h-32' />
			<div>
				<div className='text-xl'>{isSpanish ? name.es : name.en}</div>
				{description && <p className='text-sm'>{isSpanish ? description.es : description.en}</p>}
				<div className='text-lg font-bold'>${isSpanish ? price.mxn : price.usd}</div>
			</div>
		</div>
	)
}

export default TopMenuHighDefinition;
