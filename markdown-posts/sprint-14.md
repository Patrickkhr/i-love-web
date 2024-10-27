## Week 1 23sept/27sept
Deze week ben ik begonnen met het maken en ontwerpen van een website voor een opdrachtgever op basis van een Headless CMS API. Ook heb ik een projectboard opgezet en de learnings van de vorige sprint meegenomen zoals de MoSCoW-planning en de planning poker.

#### Framework structuur

* src/ 
* * api/ 
 * * lib/  
* * * assets/   
* * * components/.    
* * routes/.   
* * app.html.   
* static/.   
.gitignore.   
.env.   
package.json.   
svelte.config.js    
vite.config.js.   

Routing

* src/.  
* * routes/.  
* * * [dynamic]/.   
* * * * +page.server.js.     
* * * * +page.svelte.     
* * static/.    
* * * +page.server.js.    
* * * +page.svelte.    
* * +page.server.js.   
+page.svelte

## Week 2 30sept/4okt

Deze week ben ik veel gaan leren over de code en structuur die de oude tweedejaars op met dit project gebruikt hebben, ook hebben ze een nieuw CMS gebruikt genaamd Contentful, ik ben begonnen met de [documentatie](https://www.contentful.com/developers/docs/) door te lezen om het te begrijpen en ook gekeken naar de [GraplQL documentatie](https://www.contentful.com/developers/docs/references/graphql/).  

Ook heb ik deze week geleerd over de 10 priciples of good design:
1. Good design is innovative
2. Good design makes a product useful
3. Good design is aesthetic
4. Good design makes a product understandable
5. Good design is unobtrusive
6. Good design is honest
7. Good design is long-lasting
8. Good design is thorough down to the last detail
9. Good design is environmentally friendly
10. Good design is as little design as possible

### We love web van Nicolas Garnier

Begon in 2018 met freelancen.
Hij bouwt websites, apps en gebruikt daarbij JavaScript, CSS, WebGL en Unity.  
De kern van zijn werk bestaat uit code, design, motion en interactiviteit.

Gebruik van animaties:
* Om de gebruiker aan te trekken.
* Gebruik animaties on beter een verhaal te vertellen.
* Niet iedereen houd van animaties.

Voorbeeld websites:     
[Vita Architecture](https://vitaarchitecture.com/).  
[Lief Amsterdam](https://liefamsterdam.nl/).   
[Loer](https://loerarchitecten.com/en).    
[Fila mountain](https://filaexplore.com/).    
[Alcest](https://alcestmusic.com/).   


## Week 3 7okt/11okt
Deze week heb ik gekeken naar hoe ik met [svelte component](https://svelte.dev/docs/special-elements#svelte-component) het werk van het project dynamisch kan maken zodat je de code niet hoeft aan te passen als je een component wilt toevoegen in Contentful.

Ook heb ik gekeken naar [atomic design](https://bradfrost.com/blog/post/atomic-web-design/), dit is een manier voor het maken en indelen van herbruikbare componenten. 

1. **Atoms:**   
De meest kleine elementen, zoals knoppen, input velden of labels. Deze elementen zijn niet meer op te splitsen in kleinere elementen.

2. **Molecules:**   
Dit is een groep/component van Atoms die samen iets maken, zoals een zoekbalk die bestaat uit een input veld en een zoekknop.

3. **Organisms:**    
Dit is een grotere groep/component meestal een sectie die bestaat uit molecules en atoms, zoals een header waar bijvoorbeeld een logo, een zoekbalk en een navigatie in staat.

4. **Templates:**   
Dit bestaat uit verschillende organisms die samen een layout maken. Maar deze stap werd overgeslagen in ons project

5. **Pages:**  
Hier staat de template in dat een pagina maakt.
