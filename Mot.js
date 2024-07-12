import{useState}from"react";
import axios from "axios";

export default function Mot()
{

	const[msg,setMsg]=useState();
	const[author,setAuthor]=useState("");
	
	const gm=(event)=>{
		event.preventDefault();
		let url="https://api.quotable.io/random";
		axios.get(url)
		.then(res=>{
			setMsg(res.data.content);
			setAuthor(res.data.author);
		})
		.catch(err=>setMsg("issue"+err));
	}
return(
<>
<center>
	<h1>Mot App</h1>
	<h2>Please Click on the Button </h2>
	<form onSubmit={gm}>
		<input type="submit" value="Get Msg" />
	</form>
	<h3>{msg}</h3>
	<h3>{author}</h3>

</center>
</>	
);
}
