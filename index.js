let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

function getJoke(){
    let n = Math.floor(Math.random() * 90);
    if(n%2 != 0)
    {
        n = n+1;
    }
    let d = arr[n];
    p1.innerHTML=d;
    p2.innerHTML="click me to know the ans";
    document.getElementById("p2").addEventListener("click" ,()=>{
        document.getElementById("p2").innerHTML=arr[n+1];
    })
}

let arr = [`What do you call a sleeping bull?`,
`A bulldozer`,

`Why do melons have weddings?`,
`They cantaloupe`,

`How do you make a tissue dance?`,
`You put a little boogie in it`,

`Why did the photo go to jail?`,
`It was framed`,

`Why did the golfer bring an extra pair of pants?`,
`In case he got a hole in one`,

`Why did the baby strawberry cry?`,
`His parents were in a jam`,

`Why did the scarecrow win an award?`,
`He was outstanding in his field`,

`What kind of jewelry do rabbits wear?`,
`14 carrot gold`,

`Where do polar bears keep their money?`,
`In a snowbank`,

`What do you call a factory that makes okay products?`,
`A satis-factory`,


`What did the ocean say to the sand?`,
`Nothing — it just waved`,

`Why couldn’t the sailor learn his alphabet?`,
`He kept getting lost at C`,

`What do lawyers wear to court?`,
`Lawsuits`,

`What do cows most like to read?`,
`Cattle-logs`,

`What do you call an unpredictable camera?`,
`A loose Canon`,

`Why did the invisible man turn down the job offer?`,
`He couldn’t see himself doing it`,

`Why can’t a nose be 12 inches long?`,
`Then it’d be a foot`,

`Why is the grass so dangerous?`,
`It’s full of blades`,

`How do you fix a cracked pumpkin?`,
`With a pumpkin patch`,


`What does the dentist of the year get?`,
`A little plaque`,

`What do you call an angry carrot?`,
`A steamed veggie`,

`Why do ghosts like to ride in elevators?`,
`It lifts their spirits`,

`How do you make an octopus laugh?`,
`With ten-tickles`,

`How can you tell it’s a dogwood tree?`,
`By the bark`,

`When is a door not a door?`,
`When it’s ajar`,

`How do snails fight?`,
`They slug it out`,

`How do you get a country girl’s attention?`,
`A-tractor`,

`Why do bees have sticky hair?`,
`They use a honeycomb`,

`Why can’t you trust duck doctors?`,
`They’re all quacks`,


`Why is Peter Pan always flying?`,
`He Neverlands`,

`What do you call a toothless bear?`,
`A gummy bear`,

`Why are spiders so smart?`,
`They can find everything on the web`,

`Why was the ghost so tired?`,
`He worked the graveyard shift`,

`How does a duck buy lipstick?`,
`She just puts it on her bill`,

`Which school subject was the witch’s favorite?`,
`Spelling`,

`What do you call someone with no body and no nose?`,
`Nobody Knows`,

`What do you call a blind dinosaur?`,
`A do-you-think-he-saw-us`,

`What do you call a priest who becomes a lawyer?`,
`A father-in-law`,

`Why do cows have hooves and not feet?`,
`They lactose`,

`What do you get when you cross a snowman and a vampire?`,
`Frostbite`,

`Why does Waldo only wear striped shirts?`,
`He doesn’t want to be spotted`,

`What do you get when you cross a cactus and a pig?`,
`A porky pine`,

`How do you tell if a vampire is sick?`,
`See if he's coffin`,

`Why do pancakes always win at baseball?`,
`They have the best batter`,

`Why couldn’t the couple get married at the library?`,
`It was all booked up`,

`What does a baby computer call his father?`,
`Data`,

`Why is it so cheap to throw a party at a haunted house?`,
`The ghosts bring all the boos`,

`Where do pirates get their hooks?`,
`Second hand stores`,


`What do you call a beehive without an exit?`,
`Unbelievable`,

`How do you find Will Smith in a snowstorm?`,
`You look for fresh prints`,

`What's a lawyer's favorite drink?`,
`Subpoena colada`,

`What's brown and sticky?`,
`A stick`,

`What do you call a sad cup of coffee?`,
`Depresso`,

`How do you make a water bed bouncier?`,
`Add spring water`,

`Why should you always knock on a refrigerator door before opening it?`,
`In case there's a salad dressing`,

`What happens when frogs park illegally?`,
`They get toad`,

`Why won't swords ever become obsolete?`,
`They're cutting edge technology`,

`Why is it a bad idea to eat a clock?`,
`It's too time-consuming`,

`What kind of shoes do burglars wear?`,
`Sneakers`,

`What job did the frog have at the hotel?`,
`Bellhop`,

`Why did the restaurant hire a pig?`,
`He was good at bacon`,



`Why is it a bad idea to iron your four-leaf clover?`,
`You shouldn't press your luck`,

`Why wouldn’t the sesame seed leave the casino?`,
`He was on a roll`,

`What do sprinters eat before a race?`,
`Nothing — they fast`,

`Why did the restaurant on the moon get bad reviews?`,
`It has no atmosphere`,

`How does Moses make his coffee?`,
`Hebrews it`,

`What do you call a shoe made from a banana?`,
`A slipper`,

`Why was the coach yelling at a vending machine?`,
`He wanted his quarterback`,

`Why don’t they play poker in the jungle?`,
`Too many cheetahs`,


`Why did the stadium get so hot after the game?`,
`All the fans left`,

`What do you call a fake noodle?`,
`An impasta`,


`How did the barber win the race?`,
`He knew a shortcut`,

`Why don't lobsters like to share?`,
`They're shellfish`,

`What do scholars eat when they're hungry?`,
`Academia nuts`,

`What do you get from a pampered cow?`,
`Spoiled milk`,

`Where do baby cats learn to swim?`,
`The kitty pool`,

`Why did the bicycle collapse?`,
`It was two tired`,

`Why do seagulls fly over the sea?`,
`If they flew over the bay, they’d be called bagels`,

`How does a boar sign its name?`,
`With a pig pen`,

`How do you organize a space party?`,
`You planet`,

`Why did the poor man stock up on yeast?`,
`To make some dough`,



`"hat did the big flower say to the little flower?`,
`"Hey there, bud`,


`What kind of car does an egg drive?`,
`A yolkswagen`,

`Why can’t you give Elsa a balloon?`,
`Because she’d let it go`,

`What do you call an alligator detective?`,
`An investi-gator`,

`Why shouldn’t you write with a broken pencil?`,
`It’s pointless`,

`When do computers overheat?`,
`When they need to vent`,

`What kind of music do planets like?`,
`Neptunes`,

`"hat did the yoga instructor say when her landlord tried to evict her?`,
`"Namaste`,



`"Why didn't the skeleton get a prom date?`,
`He didn't have the guts to ask anyone"`]

