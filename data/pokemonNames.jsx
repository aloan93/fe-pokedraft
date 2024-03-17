const pokemonNames = [
  "abomasnow",
  "abomasnow-mega",
  "abra",
  "absol",
  "absol-mega",
  "accelgor",
  "aegislash-blade",
  "aegislash-shield",
  "aerodactyl",
  "aerodactyl-mega",
  "aggron",
  "aggron-mega",
  "aipom",
  "alakazam",
  "alakazam-mega",
  "alcremie",
  "alcremie-gmax",
  "alomomola",
  "altaria",
  "altaria-mega",
  "amaura",
  "ambipom",
  "amoonguss",
  "ampharos",
  "ampharos-mega",
  "annihilape",
  "anorith",
  "appletun",
  "appletun-gmax",
  "applin",
  "araquanid",
  "araquanid-totem",
  "arbok",
  "arboliva",
  "arcanine",
  "arcanine-hisui",
  "arceus",
  "archaludon",
  "archen",
  "archeops",
  "arctibax",
  "arctovish",
  "arctozolt",
  "ariados",
  "armaldo",
  "armarouge",
  "aromatisse",
  "aron",
  "arrokuda",
  "articuno",
  "articuno-galar",
  "audino",
  "audino-mega",
  "aurorus",
  "avalugg",
  "avalugg-hisui",
  "axew",
  "azelf",
  "azumarill",
  "azurill",
  "bagon",
  "baltoy",
  "banette",
  "banette-mega",
  "barbaracle",
  "barboach",
  "barraskewda",
  "basculegion-female",
  "basculegion-male",
  "basculin-blue-striped",
  "basculin-red-striped",
  "basculin-white-striped",
  "bastiodon",
  "baxcalibur",
  "bayleef",
  "beartic",
  "beautifly",
  "beedrill",
  "beedrill-mega",
  "beheeyem",
  "beldum",
  "bellibolt",
  "bellossom",
  "bellsprout",
  "bergmite",
  "bewear",
  "bibarel",
  "bidoof",
  "binacle",
  "bisharp",
  "blacephalon",
  "blastoise",
  "blastoise-gmax",
  "blastoise-mega",
  "blaziken",
  "blaziken-mega",
  "blipbug",
  "blissey",
  "blitzle",
  "boldore",
  "boltund",
  "bombirdier",
  "bonsly",
  "bouffalant",
  "bounsweet",
  "braixen",
  "brambleghast",
  "bramblin",
  "braviary",
  "braviary-hisui",
  "breloom",
  "brionne",
  "bronzong",
  "bronzor",
  "brute-bonnet",
  "bruxish",
  "budew",
  "buizel",
  "bulbasaur",
  "buneary",
  "bunnelby",
  "burmy",
  "butterfree",
  "butterfree-gmax",
  "buzzwole",
  "cacnea",
  "cacturne",
  "calyrex",
  "calyrex-ice",
  "calyrex-shadow",
  "camerupt",
  "camerupt-mega",
  "capsakid",
  "carbink",
  "carkol",
  "carnivine",
  "carracosta",
  "carvanha",
  "cascoon",
  "castform",
  "castform-rainy",
  "castform-snowy",
  "castform-sunny",
  "caterpie",
  "celebi",
  "celesteela",
  "centiskorch",
  "centiskorch-gmax",
  "ceruledge",
  "cetitan",
  "cetoddle",
  "chandelure",
  "chansey",
  "charcadet",
  "charizard",
  "charizard-gmax",
  "charizard-mega-x",
  "charizard-mega-y",
  "charjabug",
  "charmander",
  "charmeleon",
  "chatot",
  "cherrim",
  "cherubi",
  "chesnaught",
  "chespin",
  "chewtle",
  "chi-yu",
  "chien-pao",
  "chikorita",
  "chimchar",
  "chimecho",
  "chinchou",
  "chingling",
  "cinccino",
  "cinderace",
  "cinderace-gmax",
  "clamperl",
  "clauncher",
  "clawitzer",
  "claydol",
  "clefable",
  "clefairy",
  "cleffa",
  "clobbopus",
  "clodsire",
  "cloyster",
  "coalossal",
  "coalossal-gmax",
  "cobalion",
  "cofagrigus",
  "combee",
  "combusken",
  "comfey",
  "conkeldurr",
  "copperajah",
  "copperajah-gmax",
  "corphish",
  "corsola",
  "corsola-galar",
  "corviknight",
  "corviknight-gmax",
  "corvisquire",
  "cosmoem",
  "cosmog",
  "cottonee",
  "crabominable",
  "crabrawler",
  "cradily",
  "cramorant",
  "cramorant-gorging",
  "cramorant-gulping",
  "cranidos",
  "crawdaunt",
  "cresselia",
  "croagunk",
  "crobat",
  "crocalor",
  "croconaw",
  "crustle",
  "cryogonal",
  "cubchoo",
  "cubone",
  "cufant",
  "cursola",
  "cutiefly",
  "cyclizar",
  "cyndaquil",
  "dachsbun",
  "darkrai",
  "darmanitan-galar-standard",
  "darmanitan-galar-zen",
  "darmanitan-standard",
  "darmanitan-zen",
  "dartrix",
  "darumaka",
  "darumaka-galar",
  "decidueye",
  "decidueye-hisui",
  "dedenne",
  "deerling",
  "deino",
  "delcatty",
  "delibird",
  "delphox",
  "deoxys-attack",
  "deoxys-defense",
  "deoxys-normal",
  "deoxys-speed",
  "dewgong",
  "dewott",
  "dewpider",
  "dhelmise",
  "dialga",
  "dialga-origin",
  "diancie",
  "diancie-mega",
  "diggersby",
  "diglett",
  "diglett-alola",
  "dipplin",
  "ditto",
  "dodrio",
  "doduo",
  "dolliv",
  "dondozo",
  "donphan",
  "dottler",
  "doublade",
  "dracovish",
  "dracozolt",
  "dragalge",
  "dragapult",
  "dragonair",
  "dragonite",
  "drakloak",
  "drampa",
  "drapion",
  "dratini",
  "drednaw",
  "drednaw-gmax",
  "dreepy",
  "drifblim",
  "drifloon",
  "drilbur",
  "drizzile",
  "drowzee",
  "druddigon",
  "dubwool",
  "ducklett",
  "dudunsparce",
  "dudunsparce-three-segment",
  "dugtrio",
  "dugtrio-alola",
  "dunsparce",
  "duosion",
  "duraludon",
  "duraludon-gmax",
  "durant",
  "dusclops",
  "dusknoir",
  "duskull",
  "dustox",
  "dwebble",
  "eelektrik",
  "eelektross",
  "eevee",
  "eevee-gmax",
  "eevee-starter",
  "eiscue-ice",
  "eiscue-noice",
  "ekans",
  "eldegoss",
  "electabuzz",
  "electivire",
  "electrike",
  "electrode",
  "electrode-hisui",
  "elekid",
  "elgyem",
  "emboar",
  "emolga",
  "empoleon",
  "enamorus-incarnate",
  "enamorus-therian",
  "entei",
  "escavalier",
  "espathra",
  "espeon",
  "espurr",
  "eternatus",
  "eternatus-eternamax",
  "excadrill",
  "exeggcute",
  "exeggutor",
  "exeggutor-alola",
  "exploud",
  "falinks",
  "farfetchd",
  "farfetchd-galar",
  "farigiraf",
  "fearow",
  "feebas",
  "fennekin",
  "feraligatr",
  "ferroseed",
  "ferrothorn",
  "fezandipiti",
  "fidough",
  "finizen",
  "finneon",
  "flaaffy",
  "flabebe",
  "flamigo",
  "flapple",
  "flapple-gmax",
  "flareon",
  "fletchinder",
  "fletchling",
  "flittle",
  "floatzel",
  "floette",
  "floette-eternal",
  "floragato",
  "florges",
  "flutter-mane",
  "flygon",
  "fomantis",
  "foongus",
  "forretress",
  "fraxure",
  "frigibax",
  "frillish",
  "froakie",
  "frogadier",
  "froslass",
  "frosmoth",
  "fuecoco",
  "furfrou",
  "furret",
  "gabite",
  "gallade",
  "gallade-mega",
  "galvantula",
  "garbodor",
  "garbodor-gmax",
  "garchomp",
  "garchomp-mega",
  "gardevoir",
  "gardevoir-mega",
  "garganacl",
  "gastly",
  "gastrodon",
  "genesect",
  "gengar",
  "gengar-gmax",
  "gengar-mega",
  "geodude",
  "geodude-alola",
  "gholdengo",
  "gible",
  "gigalith",
  "gimmighoul",
  "gimmighoul-roaming",
  "girafarig",
  "giratina-altered",
  "giratina-origin",
  "glaceon",
  "glalie",
  "glalie-mega",
  "glameow",
  "glastrier",
  "gligar",
  "glimmet",
  "glimmora",
  "gliscor",
  "gloom",
  "gogoat",
  "golbat",
  "goldeen",
  "golduck",
  "golem",
  "golem-alola",
  "golett",
  "golisopod",
  "golurk",
  "goodra",
  "goodra-hisui",
  "goomy",
  "gorebyss",
  "gossifleur",
  "gothita",
  "gothitelle",
  "gothorita",
  "gouging-fire",
  "gourgeist-average",
  "gourgeist-large",
  "gourgeist-small",
  "gourgeist-super",
  "grafaiai",
  "granbull",
  "grapploct",
  "graveler",
  "graveler-alola",
  "great-tusk",
  "greavard",
  "greedent",
  "greninja",
  "greninja-ash",
  "greninja-battle-bond",
  "grimer",
  "grimer-alola",
  "grimmsnarl",
  "grimmsnarl-gmax",
  "grookey",
  "grotle",
  "groudon",
  "groudon-primal",
  "grovyle",
  "growlithe",
  "growlithe-hisui",
  "grubbin",
  "grumpig",
  "gulpin",
  "gumshoos",
  "gumshoos-totem",
  "gurdurr",
  "guzzlord",
  "gyarados",
  "gyarados-mega",
  "hakamo-o",
  "happiny",
  "hariyama",
  "hatenna",
  "hatterene",
  "hatterene-gmax",
  "hattrem",
  "haunter",
  "hawlucha",
  "haxorus",
  "heatmor",
  "heatran",
  "heliolisk",
  "helioptile",
  "heracross",
  "heracross-mega",
  "herdier",
  "hippopotas",
  "hippowdon",
  "hitmonchan",
  "hitmonlee",
  "hitmontop",
  "ho-oh",
  "honchkrow",
  "honedge",
  "hoopa",
  "hoopa-unbound",
  "hoothoot",
  "hoppip",
  "horsea",
  "houndoom",
  "houndoom-mega",
  "houndour",
  "houndstone",
  "huntail",
  "hydrapple",
  "hydreigon",
  "hypno",
  "igglybuff",
  "illumise",
  "impidimp",
  "incineroar",
  "indeedee-female",
  "indeedee-male",
  "infernape",
  "inkay",
  "inteleon",
  "inteleon-gmax",
  "iron-boulder",
  "iron-bundle",
  "iron-crown",
  "iron-hands",
  "iron-jugulis",
  "iron-leaves",
  "iron-moth",
  "iron-thorns",
  "iron-treads",
  "iron-valiant",
  "ivysaur",
  "jangmo-o",
  "jellicent",
  "jigglypuff",
  "jirachi",
  "jolteon",
  "joltik",
  "jumpluff",
  "jynx",
  "kabuto",
  "kabutops",
  "kadabra",
  "kakuna",
  "kangaskhan",
  "kangaskhan-mega",
  "karrablast",
  "kartana",
  "kecleon",
  "keldeo-ordinary",
  "keldeo-resolute",
  "kilowattrel",
  "kingambit",
  "kingdra",
  "kingler",
  "kingler-gmax",
  "kirlia",
  "klang",
  "klawf",
  "kleavor",
  "klefki",
  "klink",
  "klinklang",
  "koffing",
  "komala",
  "kommo-o",
  "kommo-o-totem",
  "koraidon",
  "koraidon-gliding-build",
  "koraidon-limited-build",
  "koraidon-sprinting-build",
  "koraidon-swimming-build",
  "krabby",
  "kricketot",
  "kricketune",
  "krokorok",
  "krookodile",
  "kubfu",
  "kyogre",
  "kyogre-primal",
  "kyurem",
  "kyurem-black",
  "kyurem-white",
  "lairon",
  "lampent",
  "landorus-incarnate",
  "landorus-therian",
  "lanturn",
  "lapras",
  "lapras-gmax",
  "larvesta",
  "larvitar",
  "latias",
  "latias-mega",
  "latios",
  "latios-mega",
  "leafeon",
  "leavanny",
  "lechonk",
  "ledian",
  "ledyba",
  "lickilicky",
  "lickitung",
  "liepard",
  "lileep",
  "lilligant",
  "lilligant-hisui",
  "lillipup",
  "linoone",
  "linoone-galar",
  "litleo",
  "litten",
  "litwick",
  "lokix",
  "lombre",
  "lopunny",
  "lopunny-mega",
  "lotad",
  "loudred",
  "lucario",
  "lucario-mega",
  "ludicolo",
  "lugia",
  "lumineon",
  "lunala",
  "lunatone",
  "lurantis",
  "lurantis-totem",
  "luvdisc",
  "luxio",
  "luxray",
  "lycanroc-dusk",
  "lycanroc-midday",
  "lycanroc-midnight",
  "mabosstiff",
  "machamp",
  "machamp-gmax",
  "machoke",
  "machop",
  "magby",
  "magcargo",
  "magearna",
  "magearna-original",
  "magikarp",
  "magmar",
  "magmortar",
  "magnemite",
  "magneton",
  "magnezone",
  "makuhita",
  "malamar",
  "mamoswine",
  "manaphy",
  "mandibuzz",
  "manectric",
  "manectric-mega",
  "mankey",
  "mantine",
  "mantyke",
  "maractus",
  "mareanie",
  "mareep",
  "marill",
  "marowak",
  "marowak-alola",
  "marowak-totem",
  "marshadow",
  "marshtomp",
  "maschiff",
  "masquerain",
  "maushold",
  "maushold-family-of-three",
  "mawile",
  "mawile-mega",
  "medicham",
  "medicham-mega",
  "meditite",
  "meganium",
  "melmetal",
  "melmetal-gmax",
  "meloetta-aria",
  "meloetta-pirouette",
  "meltan",
  "meowscarada",
  "meowstic-female",
  "meowstic-male",
  "meowth",
  "meowth-alola",
  "meowth-galar",
  "meowth-gmax",
  "mesprit",
  "metagross",
  "metagross-mega",
  "metang",
  "metapod",
  "mew",
  "mewtwo",
  "mewtwo-mega-x",
  "mewtwo-mega-y",
  "mienfoo",
  "mienshao",
  "mightyena",
  "milcery",
  "milotic",
  "miltank",
  "mime-jr",
  "mimikyu-busted",
  "mimikyu-disguised",
  "mimikyu-totem-busted",
  "mimikyu-totem-disguised",
  "minccino",
  "minior-blue",
  "minior-blue-meteor",
  "minior-green",
  "minior-green-meteor",
  "minior-indigo",
  "minior-indigo-meteor",
  "minior-orange",
  "minior-orange-meteor",
  "minior-red",
  "minior-red-meteor",
  "minior-violet",
  "minior-violet-meteor",
  "minior-yellow",
  "minior-yellow-meteor",
  "minun",
  "miraidon",
  "miraidon-aquatic-mode",
  "miraidon-drive-mode",
  "miraidon-glide-mode",
  "miraidon-low-power-mode",
  "misdreavus",
  "mismagius",
  "moltres",
  "moltres-galar",
  "monferno",
  "morelull",
  "morgrem",
  "morpeko-full-belly",
  "morpeko-hangry",
  "mothim",
  "mr-mime",
  "mr-mime-galar",
  "mr-rime",
  "mudbray",
  "mudkip",
  "mudsdale",
  "muk",
  "muk-alola",
  "munchlax",
  "munkidori",
  "munna",
  "murkrow",
  "musharna",
  "nacli",
  "naclstack",
  "naganadel",
  "natu",
  "necrozma",
  "necrozma-dawn",
  "necrozma-dusk",
  "necrozma-ultra",
  "nickit",
  "nidoking",
  "nidoqueen",
  "nidoran-f",
  "nidoran-m",
  "nidorina",
  "nidorino",
  "nihilego",
  "nincada",
  "ninetales",
  "ninetales-alola",
  "ninjask",
  "noctowl",
  "noibat",
  "noivern",
  "nosepass",
  "numel",
  "nuzleaf",
  "nymble",
  "obstagoon",
  "octillery",
  "oddish",
  "ogerpon",
  "ogerpon-cornerstone-mask",
  "ogerpon-hearthflame-mask",
  "ogerpon-wellspring-mask",
  "oinkologne",
  "oinkologne-female",
  "okidogi",
  "omanyte",
  "omastar",
  "onix",
  "oranguru",
  "orbeetle",
  "orbeetle-gmax",
  "oricorio-baile",
  "oricorio-pau",
  "oricorio-pom-pom",
  "oricorio-sensu",
  "orthworm",
  "oshawott",
  "overqwil",
  "pachirisu",
  "palafin",
  "palafin-hero",
  "palkia",
  "palkia-origin",
  "palossand",
  "palpitoad",
  "pancham",
  "pangoro",
  "panpour",
  "pansage",
  "pansear",
  "paras",
  "parasect",
  "passimian",
  "patrat",
  "pawmi",
  "pawmo",
  "pawmot",
  "pawniard",
  "pecharunt",
  "pelipper",
  "perrserker",
  "persian",
  "persian-alola",
  "petilil",
  "phanpy",
  "phantump",
  "pheromosa",
  "phione",
  "pichu",
  "pidgeot",
  "pidgeot-mega",
  "pidgeotto",
  "pidgey",
  "pidove",
  "pignite",
  "pikachu",
  "pikachu-alola-cap",
  "pikachu-belle",
  "pikachu-cosplay",
  "pikachu-gmax",
  "pikachu-hoenn-cap",
  "pikachu-kalos-cap",
  "pikachu-libre",
  "pikachu-original-cap",
  "pikachu-partner-cap",
  "pikachu-phd",
  "pikachu-pop-star",
  "pikachu-rock-star",
  "pikachu-sinnoh-cap",
  "pikachu-starter",
  "pikachu-unova-cap",
  "pikachu-world-cap",
  "pikipek",
  "piloswine",
  "pincurchin",
  "pineco",
  "pinsir",
  "pinsir-mega",
  "piplup",
  "plusle",
  "poipole",
  "politoed",
  "poliwag",
  "poliwhirl",
  "poliwrath",
  "poltchageist",
  "polteageist",
  "ponyta",
  "ponyta-galar",
  "poochyena",
  "popplio",
  "porygon",
  "porygon-z",
  "porygon2",
  "primarina",
  "primeape",
  "prinplup",
  "probopass",
  "psyduck",
  "pumpkaboo-average",
  "pumpkaboo-large",
  "pumpkaboo-small",
  "pumpkaboo-super",
  "pupitar",
  "purrloin",
  "purugly",
  "pyroar",
  "pyukumuku",
  "quagsire",
  "quaquaval",
  "quaxly",
  "quaxwell",
  "quilava",
  "quilladin",
  "qwilfish",
  "qwilfish-hisui",
  "raboot",
  "rabsca",
  "raging-bolt",
  "raichu",
  "raichu-alola",
  "raikou",
  "ralts",
  "rampardos",
  "rapidash",
  "rapidash-galar",
  "raticate",
  "raticate-alola",
  "raticate-totem-alola",
  "rattata",
  "rattata-alola",
  "rayquaza",
  "rayquaza-mega",
  "regice",
  "regidrago",
  "regieleki",
  "regigigas",
  "regirock",
  "registeel",
  "relicanth",
  "rellor",
  "remoraid",
  "reshiram",
  "reuniclus",
  "revavroom",
  "rhydon",
  "rhyhorn",
  "rhyperior",
  "ribombee",
  "ribombee-totem",
  "rillaboom",
  "rillaboom-gmax",
  "riolu",
  "roaring-moon",
  "rockruff",
  "rockruff-own-tempo",
  "roggenrola",
  "rolycoly",
  "rookidee",
  "roselia",
  "roserade",
  "rotom",
  "rotom-fan",
  "rotom-frost",
  "rotom-heat",
  "rotom-mow",
  "rotom-wash",
  "rowlet",
  "rufflet",
  "runerigus",
  "sableye",
  "sableye-mega",
  "salamence",
  "salamence-mega",
  "salandit",
  "salazzle",
  "salazzle-totem",
  "samurott",
  "samurott-hisui",
  "sandaconda",
  "sandaconda-gmax",
  "sandile",
  "sandshrew",
  "sandshrew-alola",
  "sandslash",
  "sandslash-alola",
  "sandy-shocks",
  "sandygast",
  "sawk",
  "sawsbuck",
  "scatterbug",
  "sceptile",
  "sceptile-mega",
  "scizor",
  "scizor-mega",
  "scolipede",
  "scorbunny",
  "scovillain",
  "scrafty",
  "scraggy",
  "scream-tail",
  "scyther",
  "seadra",
  "seaking",
  "sealeo",
  "seedot",
  "seel",
  "seismitoad",
  "sentret",
  "serperior",
  "servine",
  "seviper",
  "sewaddle",
  "sharpedo",
  "sharpedo-mega",
  "shaymin-land",
  "shaymin-sky",
  "shedinja",
  "shelgon",
  "shellder",
  "shellos",
  "shelmet",
  "shieldon",
  "shiftry",
  "shiinotic",
  "shinx",
  "shroodle",
  "shroomish",
  "shuckle",
  "shuppet",
  "sigilyph",
  "silcoon",
  "silicobra",
  "silvally",
  "simipour",
  "simisage",
  "simisear",
  "sinistcha",
  "sinistea",
  "sirfetchd",
  "sizzlipede",
  "skarmory",
  "skeledirge",
  "skiddo",
  "skiploom",
  "skitty",
  "skorupi",
  "skrelp",
  "skuntank",
  "skwovet",
  "slaking",
  "slakoth",
  "sliggoo",
  "sliggoo-hisui",
  "slither-wing",
  "slowbro",
  "slowbro-galar",
  "slowbro-mega",
  "slowking",
  "slowking-galar",
  "slowpoke",
  "slowpoke-galar",
  "slugma",
  "slurpuff",
  "smeargle",
  "smoliv",
  "smoochum",
  "sneasel",
  "sneasel-hisui",
  "sneasler",
  "snivy",
  "snom",
  "snorlax",
  "snorlax-gmax",
  "snorunt",
  "snover",
  "snubbull",
  "sobble",
  "solgaleo",
  "solosis",
  "solrock",
  "spearow",
  "spectrier",
  "spewpa",
  "spheal",
  "spidops",
  "spinarak",
  "spinda",
  "spiritomb",
  "spoink",
  "sprigatito",
  "spritzee",
  "squawkabilly",
  "squawkabilly-blue-plumage",
  "squawkabilly-white-plumage",
  "squawkabilly-yellow-plumage",
  "squirtle",
  "stakataka",
  "stantler",
  "staraptor",
  "staravia",
  "starly",
  "starmie",
  "staryu",
  "steelix",
  "steelix-mega",
  "steenee",
  "stonjourner",
  "stoutland",
  "stufful",
  "stunfisk",
  "stunfisk-galar",
  "stunky",
  "sudowoodo",
  "suicune",
  "sunflora",
  "sunkern",
  "surskit",
  "swablu",
  "swadloon",
  "swalot",
  "swampert",
  "swampert-mega",
  "swanna",
  "swellow",
  "swinub",
  "swirlix",
  "swoobat",
  "sylveon",
  "tadbulb",
  "taillow",
  "talonflame",
  "tandemaus",
  "tangela",
  "tangrowth",
  "tapu-bulu",
  "tapu-fini",
  "tapu-koko",
  "tapu-lele",
  "tarountula",
  "tatsugiri",
  "tatsugiri-droopy",
  "tatsugiri-stretchy",
  "tauros",
  "tauros-paldea-aqua-breed",
  "tauros-paldea-blaze-breed",
  "tauros-paldea-combat-breed",
  "teddiursa",
  "tentacool",
  "tentacruel",
  "tepig",
  "terapagos",
  "terapagos-stellar",
  "terapagos-terastal",
  "terrakion",
  "thievul",
  "throh",
  "thundurus-incarnate",
  "thundurus-therian",
  "thwackey",
  "timburr",
  "ting-lu",
  "tinkatink",
  "tinkaton",
  "tinkatuff",
  "tirtouga",
  "toedscool",
  "toedscruel",
  "togedemaru",
  "togedemaru-totem",
  "togekiss",
  "togepi",
  "togetic",
  "torchic",
  "torkoal",
  "tornadus-incarnate",
  "tornadus-therian",
  "torracat",
  "torterra",
  "totodile",
  "toucannon",
  "toxapex",
  "toxel",
  "toxicroak",
  "toxtricity-amped",
  "toxtricity-amped-gmax",
  "toxtricity-low-key",
  "toxtricity-low-key-gmax",
  "tranquill",
  "trapinch",
  "treecko",
  "trevenant",
  "tropius",
  "trubbish",
  "trumbeak",
  "tsareena",
  "turtonator",
  "turtwig",
  "tympole",
  "tynamo",
  "type-null",
  "typhlosion",
  "typhlosion-hisui",
  "tyranitar",
  "tyranitar-mega",
  "tyrantrum",
  "tyrogue",
  "tyrunt",
  "umbreon",
  "unfezant",
  "unown",
  "ursaluna",
  "ursaluna-bloodmoon",
  "ursaring",
  "urshifu-rapid-strike",
  "urshifu-rapid-strike-gmax",
  "urshifu-single-strike",
  "urshifu-single-strike-gmax",
  "uxie",
  "vanillish",
  "vanillite",
  "vanilluxe",
  "vaporeon",
  "varoom",
  "veluza",
  "venipede",
  "venomoth",
  "venonat",
  "venusaur",
  "venusaur-gmax",
  "venusaur-mega",
  "vespiquen",
  "vibrava",
  "victini",
  "victreebel",
  "vigoroth",
  "vikavolt",
  "vikavolt-totem",
  "vileplume",
  "virizion",
  "vivillon",
  "volbeat",
  "volcanion",
  "volcarona",
  "voltorb",
  "voltorb-hisui",
  "vullaby",
  "vulpix",
  "vulpix-alola",
  "wailmer",
  "wailord",
  "walking-wake",
  "walrein",
  "wartortle",
  "watchog",
  "wattrel",
  "weavile",
  "weedle",
  "weepinbell",
  "weezing",
  "weezing-galar",
  "whimsicott",
  "whirlipede",
  "whiscash",
  "whismur",
  "wigglytuff",
  "wiglett",
  "wimpod",
  "wingull",
  "wishiwashi-school",
  "wishiwashi-solo",
  "wo-chien",
  "wobbuffet",
  "woobat",
  "wooloo",
  "wooper",
  "wooper-paldea",
  "wormadam-plant",
  "wormadam-sandy",
  "wormadam-trash",
  "wugtrio",
  "wurmple",
  "wynaut",
  "wyrdeer",
  "xatu",
  "xerneas",
  "xurkitree",
  "yamask",
  "yamask-galar",
  "yamper",
  "yanma",
  "yanmega",
  "yungoos",
  "yveltal",
  "zacian",
  "zacian-crowned",
  "zamazenta",
  "zamazenta-crowned",
  "zangoose",
  "zapdos",
  "zapdos-galar",
  "zarude",
  "zarude-dada",
  "zebstrika",
  "zekrom",
  "zeraora",
  "zigzagoon",
  "zigzagoon-galar",
  "zoroark",
  "zoroark-hisui",
  "zorua",
  "zorua-hisui",
  "zubat",
  "zweilous",
  "zygarde-10",
  "zygarde-10-power-construct",
  "zygarde-50",
  "zygarde-50-power-construct",
  "zygarde-complete",
];

export default pokemonNames;
