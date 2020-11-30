let quotes=[
	'Kyllä. Saatana on herra.',
	'Saatana on herra.',
	'Saatana on suurin.',
	'Saatana on vapahtaja.',
	'Älä epäile Saatanan herruutta.',
	'No se on Saatana tässä, terve.',
    'Saatana pelastaa.',
    'Saatana on kaikkivaltias.',
    'Mene helvettiin siitä kyselemästä.',
];

function displayQuote(){
  
    let index=Math.floor(Math.random()*quotes.length);
   
 
    let div=document.querySelector('#quote');
    let quote=`<div class="card">

    <p>${quotes[index]}</p>
 
   </div>
    `;
    div.innerHTML=quote;
    
}
