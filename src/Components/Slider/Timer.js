import React,{useState, useEffect} from "react";


	const Timer = () => {
		const deadline = 'September, 16, 2024';
		
	const [days, setDays] = useState('0');
	const [hours, setHours] = useState('0');
	const [minutes, setMinutes] = useState('0');
	const [seconds, setSeconds] = useState('0');
	
	const getTimeUntil = (deadline) =>{
		const time = Date.parse(deadline) -Date.parse(new  Date());
	if(time < 0) {
		console.log('Date passed')
	} else {
		const seconds = Math.floor((time/1000)%60);
		const minutes = Math.floor((time/1000/60)%60);
		const hours = Math.floor((time/1000*60*60)%60);
		const days = Math.floor((time/1000*60*60*24)%60);
		setDays(days);
		setHours(hours);
		setMinutes(minutes);
		setSeconds(seconds);
	}
}
useEffect(()=>{
	setInterval(()=> getTimeUntil(deadline),1000)
},[seconds])	

	return(
	
	<div className="countdown_wrapper">
		<div className="countdown_top">Sales start in</div>
		<div className="countdown_bottom">
			<div className="countdown_item">
				<div className="countdown_time" className="countdown_tag">{days} Days</div>
				<div className="countdown_tag"></div>
			</div>
			<div className="countdown_item">
				<div className="countdown_time" className="countdown_tag">{hours} Hours</div>
				
			</div>
			<div className="countdown_item">
				<div className="countdown_time" className="countdown_tag">{minutes} Minutes</div>
				<div className="countdown_tag"></div>
			</div>
			<div className="countdown_item">
				<div className="countdown_time" className="countdown_tag">{seconds} Seconds</div>
				<div className="countdown_tag"></div>
			</div>
			</div>
			</div>

	);
	};
export default Timer;