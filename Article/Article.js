/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
	{
		title: 'Lambda School Students: "We\'re the best!"',
		date: "Nov 5th, 2018",
		firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

		secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

		thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
	},
	{
		title: "Javascript and You, ES6",
		date: "May 7th, 2019",
		firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

		secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

		thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
	},
	{
		title: "React vs Angular vs Vue",
		date: "June 7th, 2019",
		firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

		secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

		thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
	},
	{
		title: "Professional Software Development in 2019",
		date: "Jan 1st, 2019",
		firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

		secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

		thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
	},
	{
		title: "Man Tries to Hug a Lion, You Will Not Believe What Happens Next",
		date: "Spt 4th, 2019",
		firstParagraph: `Vegan lo-fi single-origin coffee tote bag slow-carb jean shorts pinterest, four dollar toast iceland asymmetrical viral poutine plaid blog. Offal migas cloud bread seitan gluten-free artisan. Pinterest squid brooklyn succulents. PBR&B prism health goth copper mug, swag XOXO tilde irony keffiyeh neutra before they sold out put a bird on it vaporware master cleanse normcore. Banjo distillery gastropub, ugh hell of meh mlkshk unicorn austin tacos freegan you probably haven't heard of them tumblr. Man braid cornhole bicycle rights forage sustainable 90's post-ironic tacos yuccie salvia.`,

		secondParagraph: `Etsy gentrify man bun raw denim. YOLO before they sold out flannel chambray quinoa. Umami salvia williamsburg bushwick cornhole drinking vinegar la croix authentic hell of synth forage. Quinoa flexitarian thundercats, venmo enamel pin church-key narwhal fixie gluten-free hella polaroid authentic mixtape pabst lumbersexual.`,

		thirdParagraph: `Readymade sriracha tbh cronut af. Waistcoat tousled marfa blog DIY gastropub 90's echo park farm-to-table cardigan copper mug kinfolk stumptown irony. Cornhole gluten-free hashtag, slow-carb cloud bread bicycle rights man bun twee chillwave beard tofu humblebrag migas. Green juice cold-pressed scenester farm-to-table drinking vinegar. Authentic kinfolk you probably haven't heard of them meh tofu. YOLO celiac forage hashtag woke sriracha craft beer lomo bespoke roof party kickstarter fixie.`
	},
	{
		title: "Hipser Ipsum is the Best Ipsum",
		date: "Oct 30, 2019",
		firstParagraph: `90's pop-up organic bitters before they sold out hexagon, celiac mlkshk venmo. Vegan franzen vexillologist microdosing yr chillwave. YOLO chia franzen prism kombucha kitsch, post-ironic single-origin coffee health goth kogi church-key succulents. Gentrify thundercats polaroid lyft kickstarter post-ironic franzen.`,

		secondParagraph: `Portland pickled raw denim chicharrones cliche. Readymade green juice chartreuse hexagon four dollar toast franzen irony. Neutra cold-pressed DIY sustainable viral narwhal, poke hot chicken jean shorts. Ennui vegan banh mi, cliche gochujang pinterest freegan salvia taxidermy small batch chambray ramps. Semiotics listicle squid mustache, 3 wolf moon lyft post-ironic stumptown coloring book selfies plaid. Shoreditch freegan affogato, leggings offal flannel slow-carb copper mug post-ironic fixie keffiyeh organic godard pickled.`,

		thirdParagraph: `Kinfolk irony jean shorts meh. Kombucha ennui typewriter, kitsch synth jean shorts tofu intelligentsia. Poutine post-ironic palo santo copper mug, vegan disrupt lomo mumblecore cloud bread cardigan. Retro four dollar toast bespoke beard schlitz banjo master cleanse forage, wayfarers flannel tumeric chambray chicharrones williamsburg flexitarian. Snackwave fanny pack tacos schlitz twee hammock, affogato tote bag chillwave. Truffaut you probably haven't heard of them lyft tousled wayfarers. Raclette chartreuse typewriter tbh.`
	}
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  √ Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  √ Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  √ Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

const container = document.querySelector(".articles");

data.map(a => {
	container.appendChild(
		article(
			a.title,
			a.date,
			a.firstParagraph,
			a.secondParagraph,
			a.thirdParagraph
		)
	);
});

function article(title, date, firstParagraph, secondParagraph, thirdParagraph) {
	// ceation of elements
	const card = document.createElement("div");
	const cardTitle = document.createElement("h2");
	const cardDate = document.createElement("p");
	const pOne = document.createElement("p");
	const pTwo = document.createElement("p");
	const pThree = document.createElement("p");
	const button = document.createElement("span");

	// structure
	card.appendChild(cardTitle);
	card.appendChild(cardDate);
	card.appendChild(pOne);
	card.appendChild(pTwo);
	card.appendChild(pThree);
	card.appendChild(button);

	// set classes
	card.classList.add("article");
	cardDate.classList.add("date");
	button.classList.add("expandButton");

	// text content
	cardTitle.textContent = title;
	cardDate.textContent = date;
	pOne.textContent = firstParagraph;
	pTwo.textContent = secondParagraph;
	pThree.textContent = thirdParagraph;
	button.textContent = "click here to expand";

	// button function
	button.addEventListener("click", () => {
		card.classList.toggle("article-open");
	});
	return card;
}
