import './App.css'



function Character({things, size}) {
  return (
    <>
	<img
      className="Character"
      src={getUrl(things)}
      alt={getAltText(things)}
      width={size}
      height={size}
    />
	<h3> {getAltText(things)} </h3>
	</>

  );
}

function getAltText(things) {
  return (
    'This is a picture of ' + things.action +' and his/her name is ' + things.name
  );
}

function getUrl(things) {
	return (
	'https://i.imgur.com/' + things.id +'.gif'
	);
}

export default function Gallery() {
  return (
  <>
   
  <h1>Video Game Characters</h1>

	<Character
		things={{ name: 'Karlach', action: 'The Tieflieng', id: 'fnHepwF' }} 
		size={300} 
	/>


	<Character
		things={{name: 'Geralt', action: 'The Witcher', id: 'ZIJgLNg' }}
		size={300}
	/>


<Character
		things={{ name: 'Shephered', action: 'The Commander', id: 'UulfMUq' }} 
		size={300} 
	/>

	<Character
		things={{name: 'Kratos', action: 'The God of War', id: 'gsMVepp' }}
		size={300}
	/>

<Character
		things={{name: 'Lara Croft', action: 'The Tomb Raider', id: 'tkgQjMc' }}
		size={300}
	/>

  </>
  );
}
