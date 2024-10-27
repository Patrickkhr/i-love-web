---
title: "My First Post"
slug: "sprint-13"
---

## Leervragen
 
* Aan het einde van deze sprint wil ik weten wat Sveltekit is en hoe ik het moet gebruiken.  
* Aan het einde van deze sprint wil ik weten Wat Sveltekit doet voor de performance en de eindgebruikers.  
* Aan het einde van deze sprint wil ik weten hoe ik de framework Sveltekit kan implementeren bij complexe frontend code.
 
## Week 1 2sept/6sept
 
Deze week ben ik begonnen met het ontwerpen en maken van een Squadpage met een nieuw team in Sveltekit.
Ik heb geleerd hoe ik een basis installatie van een sveltekit project moet installeren, hoe ik ervoor dat ik meerdere paginas kan aanmaken met sveltekit, hoe ik styling moet toevoegen aan de pagina.

### Installatie sveltekit project

#### Kies Skeleton project

```bash
npm create svelte@latest
npm install
npm install @directus/sdk
```

Wrapper voor SDK in directus.js
```js
import { createDirectus, rest } from '@directus/sdk';
import { readItems, readItem, updateItem, updateUser, createItem, deleteItem } from '@directus/sdk';
import { PUBLIC_APIURL } from '$env/static/public';

function getDirectusInstance(fetch) {
  	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus(PUBLIC_APIURL, options ).with(rest());
	return directus;
}

export default getDirectusInstance;
```
Hooks.server.js
```js
export async function handle({ event, resolve }) {
	return await resolve(event, {
		filterSerializedResponseHeaders: (key, value) => {
			return key.toLowerCase() === 'content-type';
		},
	});
}
```

.env file de API url, zonder quotes en semicolon
```js
PUBLIC_APIURL = https://directus.example.com
```

 
## Week 2 9sept/13sept

We love web van Vasilis van Gemert

Frontender en docent CMD
Hoe belangrijk is toegankelijkheid?
Alles wat nieuw is probeer er is mee te experimenteren 
Sticky was nieuw en hij maakte er nieuwe dingen mee
Allemaal verschillende klokken gemaakt meeste om te ontdekken hoe animaties werken met css.
Test altijd je website met een screenreader

Maak leuke dingen op je website

#### Feedback code en design van de squadpage:

* Meerdere variaties van een design kunnen helpen om problemen te voorkomen.
* Minder algemene termen gebruiken in het projectboard.
* Altijd duidelijke beschrijvingen geven in het projectboard.
* Gebruik maken van MoSCoW-prioritering.
* Taken inschatten met pokerplanning.
* Focus op perceived performance (bijv. optimaliseren van afbeeldingen).
* Onnodige fouten zoals onerror-afhandeling bij afbeeldingen verwijderen.
 
 
## Week 3 16sept/21sept

Deze week heb ik geleerd over de MoSCoW-planning, dit is een manier om te bepalen wat belangrijk is in een project. Dit helpt om een beter overzicht te krijgen over de taken en welke taken of functies hogere prioriteit hebben.

Ook staan de letters in MoSCoW voor vier prioriteiten:

Must have: Deze dingen zijn essentieel. Zonder dit faalt het project.  
Should have: Belangrijk, maar niet cruciaal.  
Could have: Leuke extra’s. Fijn om te hebben, maar niet nodig.  
Won't have: Dit is nog niet van toepassing.  

Professionele Readme en code conventies

* Beschrijving
* Inhoudsopgave
* Gebruik
* Kenmerken
* Installatie
* Bronnen

* Refactor je code
* Semantische code
* Console log verwijderen
* Commented code verwijderen
 
