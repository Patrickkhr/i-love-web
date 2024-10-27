## Week 1 14okt/18okt
Deze week kiezen we een nieuwe tech-stack die we gaan onderzoeken, ik ga [Remix](https://remix.run/docs/en/main) onderzoeken met het CMS Contentful.   

### Ook hebben we deze week een talk gehad van Kevin Lewis over Directus:    
Kevin heeft een team van 5 leden.  
Directus maakt geld door, Directus cloud, Directus plus, Directus tv en Marketplace.   

The iron triangle:   
![image](https://github.com/user-attachments/assets/71ca4209-dcf4-4d70-8cbf-5930ad13117f)

Prestaties vs onderhoudbaarheid - slordige code maar een snel project vs nette code maar een langzamer project.     
Snelheid vs flexibiliteit - eenvoudig/snel maar met weinig opties vs veel opties maar duurt langer en is moeilijker te gebruiken.    
Innovatie vs betrouwbaarheid - experimenteren vs betrouwbare inkomsten.

### Ook hebben we een talk gehad van Shyanta Vleugel van Triple.    
Hun core, development, design, technical operations en data en insights.  
Don’t t repeat yourself.    
Gebruik componenten.   
Wat heeft invloed op je tech-stack?
* SEO Performance
* Mechines met weinig performance?
* Eenmalige website?
* Wens voor animaties?
* Wat heeft je eindproduct nodig?


We love web met Dion Pieters




## Week 2 21okt/25okt

Opzet Remix met Contentful

1. Remix Javascript opzet:   
```npx create-remix@latest --template remix-run/remix/templates/remix-javascript```    
Github install (optional)    
Install dependances

2. Uninstall Tailwind:   
```npm uninstall tailwindcss postcss autoprefixer```      
```rm tailwind.config.js postcss.config.js```    
Verander de CSS in de root.jsx en het bestandsnaam.

3. Install Contentful:   
```npm install contentful```     
Maak een contentful.server.js     
Maak een .env file met ```CONTENTFUL_SPACE_ID="" CONTENTFUL_ACCESS_TOKEN=""```

4. Install Contentful Rich text field    
```npm install @contentful/rich-text-react-renderer```

5. GrapQL Testen    
```https://graphql.contentful.com/content/v1/spaces/your_space_id/explore?access_token=your_access_token```

  


## Week 3 28okt/1nov

### Herfstvakantie