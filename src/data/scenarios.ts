const scenarios = {
  modifiers: {
    environmental: [
      'Darkness / limited sight',
      'Difficult terrain',
      'Magical anomaly',
      'Weather phenomenon',
      'Confined space',
      'Crowded area',
      'Clock/timer threat',
      'Hazardous ground'
    ],
    "social/situational": [
      'Civilians present',
      'High-ranking NPC involved',
      'Tension is already high',
      'Someone has mistaken identity',
      'Enforcement/patrols increase',
      'Rival group is also present',
      'Misleading rumor complicates things',
      'Stakes escalate suddenly',
    ],
    narrative: [
      'Someone betrays expectations',
      'Time window closes',
      'Another thread intersects',
      'Incorrect assumptions are revealed',
      'Moral dilemma emerges',
      'New resource opportunity discovered',
      'Allies arrive unexpectedly',
      'Enemy calls for reinforcements',
    ],
  },
  types: {
    Social: {
      subTypes: [
        'Negotiation',
        'Interrogation (hostile or soft)',
        'Diplomatic Mediation',
        'Deception / Bluffing',
        'Charm & Rapport Building',
        'Coercion / Intimidation',
        'Negotiation over resources / price',
        'Interrogation (hostile)',
        'Diplomatic mediation between factions',
        'Deception / bluff to gain favor',
        'Public speech / rally (influence crowd)',
        'Blackmail / leverage negotiation',
        'Court / bureaucratic hearing',
        'Seduction / courtship for gain',
        'Recruit an ally / mercenary band',
        'Exchange / trade with strict terms',
        'Ambush social (trap posed as talk)',
        'GM choice'
      ],
      objectives: [
        'Secure a bargain / discount / resource',
        'Extract specific info',
        'Recruit or convince NPC to act',
        'Sow discord between rivals',
        'Obtain promise of future help',
        'Avoid arrest / legal penalty'
      ],
      opposition: [
        'Stubborn official',
        'Hostile rival negotiator',
        'Misinformed crowd',
        'Secret enforcers in audience',
        'Competing faction offering better terms',
        'Moral objection within party',
        'NPC is being coerced by another',
        'Translator / interpreter misleads'
      ],
      escalation: [
        'Talks break down → Combat',
        'NPC runs → Chase',
        'NPC admits something damaging → Discovery',
        'Someone reveals a secret → Twist - Complication|Twist',
        'Third party interrupts (riot) → Exploration/Chase',
        'Agreement holds but at cost → Resource or Debt'
      ],
      stakes: [
        'Political fallout',
        'Party reputation / law standing',
        'Alliance secured / lost',
        'Cash / rare item at stake',
        'Prison time for an ally',
        'Accelerated enemy plans'
      ],
      transitions: [
        'Discovery (NPC gives info)',
        'Stealth (shadow NPC after meeting)',
        'Combat (if talks break down)',
        'Chase (NPC bolts)',
        'Resource (gain ally or item)',
        'Extraction - Escape|Extraction (smuggle someone out)',
        'Twist - Complication|Twist (betrayal revealed)',
        'Wildcard'
      ]
    },
    Stealth: {
      subTypes: [
        'GM choice / hybrid',
        'Plant surveillance or bug an office',
        'Evade a magical detection field',
        'Infiltrate a private carriage/vehicle',
        'Use disguise to enter building',
        'Hide inside a crowd (blend)',
        'Shadow a target through streets',
        'Slip past patrols into a compound',
        'Silent infiltration to lift an object',
        'Rooftop traversal above city guards',
        'Tunnel/sewer bypass of defenses',
        'Silent takedowns of solitary guards'
      ],
      objectives: [
        'Follow target without being seen',
        'Steal a small but critical item',
        'Place evidence / frame someone',
        'Recon the compound layout',
        'Get into an office and copy documents',
        'Set up a silent ambush for later'
      ],
      opposition: [
        'Guard dogs / watch animals',
        'Infrared / magical sensors',
        'Alert patrols with shifting patterns',
        'Suspicious NPC recognizes you',
        'Rival thief on same job',
        'Civilians that complicate movement',
        'Environmental noise changes (rain, drums)',
        'Party member mistakes signal and acts'
      ],
      escalation: [
        'You’re spotted → Chase',
        'You trigger alarm → Combat / Extraction - Escape|Extraction',
        'You succeed quietly → Discovery (overheard info)',
        'Target doubles back → Stealth (renew effort)',
        'You plant evidence → Social consequences (accusation)',
        'Unexpected VIP arrival → Twist - Complication|Twist / Social'
      ],
      stakes: [
        'Alarm triggers citywide search',
        'Item is one-time use (lose if fail)',
        'Ally’s identity compromised',
        'Faction war escalates',
        'Legal bounty on heads',
        'Personal code / honour tested'
      ],
      transitions: [
        'Discovery (overhear conversations)',
        'Chase (being spotted)',
        'Combat (caught or ambusher becomes the ambushed)',
        'Infiltration (continue deeper)',
        'Resource (steal valuable tools)',
        'Combat (caught / ambushed)',
        'Twist - Complication|Twist (plant was trap)',
        'Wildcard'
      ]
    },
    Exploration: {
      subTypes: [
        'Environmental Hazard (lava, storms, collapsing ruins)',
        'Puzzle / Mechanism',
        'Wilderness Route Finding / foraging',
        'Search the Room / Area',
        'Traversing Social Space (crowded market, festival, riots)',
        'Ruins mapping / dungeon crawl',
        'Urban maze / back-alley investigation',
        'Derelict ship / ruins salvage',
        'Puzzle and mechanism chamber',
        'Hazardous zone (toxic, cursed)',
        'Festival / public space traversal',
        'Labyrinth / hedge maze (traps)',
        'Interdimensional rift exploration',
        'Mapping underground caverns',
        'Archaeological dig / excavation',
        'GM choice'
      ],
      objectives: [
        'Reach a specified landmark',
        'Solve a puzzle to unlock next area',
        'Locate a hidden cache / relic',
        'Find safe route for caravans',
        'Collect samples / data',
        'Escort NPC through terrain'
      ],
      opposition: [
        'Natural predators / monsters',
        'Environmental hazard (trap, quake)',
        'Territorial locals / savages',
        'Rival explorers / scavengers',
        'Cursed guardians / animated constructs',
        'Local bureaucracy (permits, tolls)',
        'Weather turning violent',
        'Internal party exhaustion / morale drop'
      ],
      escalation: [
        'Puzzle misstep → Trap / Combat',
        'Weather crash → Extraction - Escape|Extraction / Escape',
        'Find something priceless → Social / Resource',
        'Area collapses → Twist - Complication|Twist / Extraction - Escape|Extraction',
        'Rival ambush → Combat / Chase',
        'Portal opens → Wildcard / Twist - Complication|Twist'
      ],
      stakes: [
        'Expedition funding lost',
        'Permanent loss of unique relic',
        'Party member injury / death',
        'Local ecosystem poisoned',
        'Reputation among scholars',
        'New campaign thread unlocked'
      ],
      transitions: [
        'Discovery (hidden chambers / clues)',
        'Combat (guardians, beasts)',
        'Stealth (avoid environmental watchers)',
        'Chase (moving environment or stampede)',
        'Resource (find salvage)',
        'Infiltration (enter defended complex)',
        'Twist - Complication|Twist (map was wrong / trap)',
        'Wildcard'
      ]
    },
    Chase: {
      subTypes: [
        'Mounted pursuit across plains',
        'Vehicle/coach chase (city streets)',
        'Aerial chase (flying mounts/airships)',
        'Underwater pursuit (submersible)',
        'Labyrinthine indoor chase (palace, tunnels)',
        'Crowd chase (lose in festival)',
        'Escape through market (obstacles)',
        'Time-delayed pursuit (trail following)',
        'GM choice'
      ],
      objectives: [
        'Catch the fleeing NPC alive',
        'Prevent package from being delivered',
        'Reach escape point before them',
        'Intercept message / drop',
        'Push target into trap zone',
        'Keep civilians safe during pursuit'
      ],
      opposition: [
        'Agile courier / thief',
        'Mounted guards with spears',
        'Mob that blocks path',
        'Vehicles / carts in the way',
        'Hazardous terrain (rivers, rooftops)',
        'Trap set by the target',
        'Target has invisibility / disguise',
        'Weather hampers movement'
      ],
      escalation: [
        'Catch up → Combat or Social',
        'Lose trail → Exploration / Discovery',
        'Target leaps into danger → Extraction - Escape|Extraction / Rescue',
        'Collateral damage → Social / Twist - Complication|Twist (wanted by authorities)',
        'Target splits crowd → Stealth (blend)',
        'Target reaches rendezvous → Infiltration / Ambush'
      ],
      stakes: [
        'Target escapes with critical info',
        'Civilians injured → bounty / law issues',
        'Party reputation suffers',
        'Wanted level raised',
        'Reward lost if fail',
        'Rival gains upper hand'
      ],
      transitions: [
        'Combat (confrontation)',
        'Discovery (item left behind)',
        'Extraction - Escape|Extraction (get detainee out)',
        'Stealth (lose in crowd)',
        'Twist - Complication|Twist (third party intercepts)',
        'Exploration (new area entered)',
        'Wildcard'
      ]
    },
    Combat: {
      subTypes: [
        'Small skirmish (3–6 enemies)',
        'Ambush (one side has surprise)',
        'Siege / mass battle',
        'Boss duel (unique enemy)',
        'Hit-and-run harassment',
        'Defensive stand (hold position)',
        'Assassination attempt turned fight',
        'Arena / sanctioned combat',
        'Environmental hazard fight (lava, collapsing)',
        'Magical ritual fight (stop ritual)',
        'Capture / non-lethal objective in fight',
        'GM choice'
      ],
      objectives: [
        'Eliminate enemy commander',
        'Capture, not kill (for info)',
        'Delay / hold until reinforcements',
        'Protect a VIP or asset',
        'Break enemy morale / rout them',
        'Secure battlefield objective (control point)'
      ],
      opposition: [
        'Trained soldiers / militia',
        'Mercenaries with better gear',
        'Monsters / magical constructs',
        'Guerrilla fighters (hit-and-run)',
        'Enemies with artillery / ranged advantage',
        'Enemy magic caster(s)',
        'Civilians used as shields',
        'Reinforcements inbound'
      ],
      escalation: [
        'Enemy flees → Chase / Extraction - Escape|Extraction',
        'Prisoner captured → Social / Interrogation',
        'Battlefield event (bridge collapses) → Exploration/Twist - Complication|Twist',
        'Reinforcements arrive → Combat escalates or Twist - Complication|Twist',
        'Enemy surrenders → Social / Resource (parley)',
        'Magical surge → Twist - Complication|Twist / Wildcard'
      ],
      stakes: [
        'Strategic town/faction falls',
        'Permanent loss of party member',
        'War/peace balance changes',
        'Valuable artifact destroyed/lost',
        'Bounty / reputation changes widely',
        'Political fallout / war declared'
      ],
      transitions: [
        'Chase (pursue or be pursued)',
        'Social (parley / interrogation)',
        'Exploration (loot battlefield)',
        'Extraction - Escape|Extraction (evacuate wounded/prize)',
        'Resource (gain gear)',
        'Twist - Complication|Twist (enemy tactic change)',
        'Wildcard'
      ]
    },
    Infiltration: {
      subTypes: [
        'Penetrate a fortress via secret route',
        'Assume a false identity and gain access',
        'Disable defenses quietly (alarms, locks)',
        'Plant saboteur devices',
        'Covertly rescue a captive within',
        'Impersonate a staff member to walk in',
        'Replace a document / swap items',
        'Take control of the guardroom / communications',
        'Bribe an insider to open a gate',
        'Infiltrate a ritual / ceremony unnoticed',
        'Hack or scry via magic to open doors',
        'GM choice'
      ],
      objectives: [
        'Reach secure vault / data node',
        'Free or kidnap a target',
        'Plant forged orders / incriminating evidence',
        'Disable defenses permanently',
        'Gather intelligence for strike',
        'Set sabotage charge / trigger'
      ],
      opposition: [
        'Trusted insider watching for anomalies',
        'Magic wards / detection glyphs',
        'Rotating patrols (schedule puzzle)',
        'Highly suspicious quartermaster',
        'Locked areas with keyed tokens',
        'Allies of the target inside',
        'Trapdoor / escape denial systems',
        'Hidden guardians (golems, constructs)'
      ],
      escalation: [
        'Cover blown → Combat / Chase',
        'Partial success → Extraction - Escape|Extraction / Stealth continuation',
        'Insider betrays you → Twist - Complication|Twist / Combat',
        'You set trap → Social (blame)',
        'Silent success → Discovery (info acquired)',
        'Alarms looped → Reinforcements approach → Combat'
      ],
      stakes: [
        'Long-term political infiltration fails',
        'Prisoner’s life on the line',
        'Lost access to a major resource',
        'Blackmail material ends up public',
        'Enemy learns your identities',
        'War escalates due to sabotage'
      ],
      transitions: [
        'Extraction - Escape|Extraction (leave with prize/target)',
        'Stealth (deeper infiltration)',
        'Discovery (intelligence gained)',
        'Combat (defenses active)',
        'Social (bribery / parley)',
        'Twist - Complication|Twist (insider double-agent revealed)',
        'Wildcard'
      ]
    },
    "Extraction/Escape": {
      subTypes: [
        'Break out from prison / cell',
        'Exfiltrate someone under guard',
        'Escape collapsing structure with prize',
        'Smuggle item through checkpoints',
        'Evacuate civilians from danger zone',
        'Escape under siege (create corridor)',
        'Heist getaway sequence (planned route)',
        'Slip away during festival / diversion',
        'Boat/aircraft escape under pursuit',
        'GM choice'
      ],
      objectives: [
        'Get target to safehouse before dawn',
        'Leave the city with prize undetected',
        'Evacuate and avoid collateral casualties',
        'Disable tracking devices and flee',
        'Create false identities to cross borders',
        'Leave a decoy to cover escape'
      ],
      opposition: [
        'Patrol checkpoints & guards',
        'Magical tracking / beacon on target',
        'Rival gang watching exits',
        'Roadblocks & tolls enforced',
        'Weather blocking escape routes',
        'Dockmaster / customs official suspicious',
        'Pursuit mounted (horses, vehicles)',
        'Party fatigue reduces speed'
      ],
      escalation: [
        'Pursuit starts → Chase',
        'Escape vehicle disabled → Combat / Exploration',
        'Target panics & reveals identity → Social/Twist - Complication|Twist',
        'You reach border → Social (bribe) or Discovery (inspector)',
        'You lose the prize → Resource loss / Twist - Complication|Twist',
        'Civilians endangered → Moral choice / Social'
      ],
      stakes: [
        'Target recaptured permanently',
        'International incident / warrant',
        'Prize destroyed or confiscated',
        'Party member captured as diversion',
        'Reputation as criminals increases',
        'Debt to benefactor for escape'
      ],
      transitions: [
        'Chase (pursued)',
        'Social (bribe border official)',
        'Exploration (lost in wilderness)',
        'Resource (secure transport)',
        'Combat (hold until extraction)',
        'Twist - Complication|Twist (another group intercepts escape)',
        'Wildcard'
      ]
    },
    Resource: {
      subTypes: [
        'Purchase rare material / weapon',
        'Recruit specialized NPC / mercenary',
        'Craft or repair magical item',
        'Barter favors with a noble',
        'Secure a vehicle / ship',
        'Acquire forged papers / IDs',
        'Obtain ancient ritual components',
        'Invest money to gain influence',
        'Trade information for service',
        'Repair base / fortifications',
        'Secure intel subscription / spy network',
        'GM choice'
      ],
      objectives: [
        'Obtain item within budget/time',
        'Win loyalty of new NPC ally',
        'Make a long-term investment (returns later)',
        'Repair/upgrade gear to survive next arc',
        'Swap resource for intel/trust',
        'Establish supply line or safehouse'
      ],
      opposition: [
        'Merchant cheating / price gouging',
        'Scarcity or embargo enforced',
        'Rival buyer outbids you',
        'Item cursed / has strings attached',
        'Mercenary demands upfront price (trust risk)',
        'Craftsman sabotages or is incompetent',
        'Authority seizes goods (inspection)',
        'Informant double-deals both sides'
      ],
      escalation: [
        'Merchant cheating / price gouging',
        'Scarcity or embargo enforced',
        'Rival buyer outbids you',
        'Item cursed / has strings attached',
        'Mercenary demands upfront price (trust risk)',
        'Craftsman sabotages or is incompetent',
        'Authority seizes goods (inspection)',
        'Informant double-deals both sides'
      ],
      stakes: [
        'Funds exhausted / bankruptcy',
        'Item is one-off (only chance)',
        'Ally loses faith if fail',
        'Black market attention / bounty',
        'Faction losses if supply line fails',
        'Moral cost (deal with unsavory party)'
      ],
      transitions: [
        'Social (haggle / diplomacy)',
        'Stealth (steal if deal fails)',
        'Exploration (go to source location)',
        'Combat (protect transport)',
        'Twist - Complication|Twist (item has hidden effect)',
        'Resource (secured + followup planning)',
        'Wildcard'
      ]
    },
    "Twist/Complication": {
      subTypes: [
        'Ally betrays at critical moment',
        'Unexpected reinforcements arrive for enemy',
        'A new, deadlier threat appears',
        'Objective changes (double objective revealed)',
        'Long-hidden secret becomes public',
        'Natural catastrophe (earthquake, flood)',
        'Law / proclamation changes mid-scene',
        'Rival steals your prize before you can act',
        'Time anomaly / temporal shift occurs',
        'GM choice (wildcard twist)'
      ],
      objectives: [
        'Recover from betrayal / repair trust',
        'Adapt plan and secure alternate objective',
        'Mitigate collateral damage from twist',
        'Exploit twist to gain advantage',
        'Track the new threat / source of twist',
        'Cover up the twist to avoid panic'
      ],
      opposition: [
        'Your former ally now fights you',
        'Enemy now has unpredictable tactics',
        'Authority using twist to seize power',
        'Public hysteria / mobs',
        'Environmental hazard as opposition',
        'Time pressure from new deadline',
        'A third party benefiting from the twist',
        'The twist reveals a personal secret of a PC'
      ],
      escalation: [
        'Twist triggers Combat',
        'Twist forces immediate Extraction - Escape|Extraction',
        'Twist opens new Discovery (clue)',
        'Twist compels Social resolution (appeasing public)',
        'Twist collapses current plan → new Infiltration/Heist',
        'Twist reveals bigger antagonist → Campaign reframe'
      ],
      stakes: [
        'Campaign goal overturned',
        'Major NPC death',
        'Public order collapsed',
        'Secrets exposed permanently',
        'Loss of safe haven/supply line',
        'PC’s past consequences revealed'
      ],
      transitions: [
        'Combat',
        'Social',
        'Exploration',
        'Infiltration',
        'Discovery',
        'Wildcard'
      ]
    },
    "Rest/Downtime": {
      subTypes: [
        'Full rest & recovery at safehouse',
        'Training / skill development montage',
        'Rumor & gossip gathering in taverns',
        'Crafting / forging items or rituals',
        'Political maneuvering / courtly downtime',
        'Spiritual retreat / divine audience',
        'Short rest interrupted by small event',
        'GM choice'
      ],
      objectives: [
        'Heal up and remove conditions',
        'Improve an ability or craft an item',
        'Gather rumors leading to threads',
        'Repair gear, ship, or base',
        'Recruit long-term ally or hireling',
        'Plan next act in safety'
      ],
      opposition: [
        'Robbers / thieves in the night',
        'Infection / lingering curse flares',
        'Spy infiltrates camp',
        'Political rival undermines you',
        'Local law enforcement questions you',
        'Contractor fails to deliver goods',
        'Enemy agent sows rumors',
        'A lover / ally creates complications'
      ],
      escalation: [
        'Rest interrupted by attack → Combat/Extraction - Escape|Extraction',
        'Rumor reveals vital Discovery → Discovery/Social',
        'Training reveals new sidequest → Resource/Exploration',
        'Political event forces immediate attendance → Social',
        'Blackmailer appears → Social/Twist - Complication|Twist',
        'Unexpected visitor (ally or enemy) → Social/Twist - Complication|Twist'
      ],
      stakes: [
        'Recovery fails → permanent debuff',
        'Ally leaves if neglected',
        'Important opportunity lost',
        'Reputation changes in locale',
        'Resource/gear lost or improved',
        'Party morale shift'
      ],
      transitions: [
        'Discovery (rumor leads to clue)',
        'Resource (equipment ready)',
        'Social (political meeting)',
        'Combat (attack during rest)',
        'Infiltration (resupply operation)',
        'Twist - Complication|Twist (blackmail / betrayal)'
      ]
    },
    Wildcard: {
      subTypes: [
        'Festival / unique world event',
        'Dream / prophetic vision (roleplay heavy)',
        'Time/time loop anomaly',
        'Planar visitor / extradimensional contact',
        'Moral test / trial by NPC institution',
        'Mini-game (gambling, contest)',
        'PC-specific flashback scenario',
        'Economy shock / market collapse',
        'Environmental metamorphosis (city becomes swamp)',
        'GM chooses'
      ],
      objectives: [
        'Catch the fleeing NPC alive',
        'Prevent package from being delivered',
        'Reach escape point before them',
        'Intercept message / drop',
        'Push target into trap zone',
        'Keep civilians safe during pursuit',
        'Eliminate enemy commander',
        'Capture, not kill (for info)',
        'Delay / hold until reinforcements',
        'Protect a VIP or asset',
        'Break enemy morale / rout them',
        'Secure battlefield objective (control point)',
        'Translate/interpret the discovery',
        'Confirm whether clue is genuine',
        'Trace clue to origin / follow trail',
        'Secure the find (protect, steal, photograph)',
        'Determine who benefits from the info',
        'Use the clue to lure an NPC / set a trap',
        'Reach a specified landmark',
        'Solve a puzzle to unlock next area',
        'Locate a hidden cache / relic',
        'Find safe route for caravans',
        'Collect samples / data',
        'Escort NPC through terrain',
        'Get target to safehouse before dawn',
        'Leave the city with prize undetected',
        'Evacuate and avoid collateral casualties',
        'Disable tracking devices and flee',
        'Create false identities to cross borders',
        'Leave a decoy to cover escape',
        'Reach secure vault / data node',
        'Free or kidnap a target',
        'Plant forged orders / incriminating evidence',
        'Disable defenses permanently',
        'Gather intelligence for strike',
        'Set sabotage charge / trigger',
        'Obtain item within budget/time',
        'Win loyalty of new NPC ally',
        'Make a long-term investment (returns later)',
        'Repair/upgrade gear to survive next arc',
        'Swap resource for intel/trust',
        'Establish supply line or safehouse',
        'Heal up and remove conditions',
        'Improve an ability or craft an item',
        'Gather rumors leading to threads',
        'Repair gear, ship, or base',
        'Recruit long-term ally or hireling',
        'Plan next act in safety',
        'Secure a bargain / discount / resource',
        'Extract specific info',
        'Recruit or convince NPC to act',
        'Sow discord between rivals',
        'Obtain promise of future help',
        'Avoid arrest / legal penalty',
        'Follow target without being seen',
        'Steal a small but critical item',
        'Place evidence / frame someone',
        'Recon the compound layout',
        'Get into an office and copy documents',
        'Set up a silent ambush for later',
        'Recover from betrayal / repair trust',
        'Adapt plan and secure alternate objective',
        'Mitigate collateral damage from Twist - Complication|twist',
        'Exploit Twist - Complication|twist to gain advantage',
        'Track the new threat / source of Twist - Complication|twist',
        'Cover up the Twist - Complication|twist to avoid panic'
      ],
      opposition: [
        'Agile courier / thief',
        'Mounted guards with spears',
        'Mob that blocks path',
        'Vehicles / carts in the way',
        'Hazardous terrain (rivers, rooftops)',
        'Trap set by the target',
        'Target has invisibility / disguise',
        'Weather hampers movement',
        'Trained soldiers / militia',
        'Mercenaries with better gear',
        'Monsters / magical constructs',
        'Guerrilla fighters (hit-and-run)',
        'Enemies with artillery / ranged advantage',
        'Enemy magic caster(s)',
        'Civilians used as shields',
        'Reinforcements inbound',
        'Rival investigator',
        'Guard / patrol near clue site',
        'Bystanders who saw something',
        'A cultist / fanatic guarding secret',
        'Corrupt official who wants it suppressed',
        'Natural/monster hazard at site',
        'A double agent (misleading informer)',
        'Internal party disagreement about authenticity',
        'Natural predators / monsters',
        'Environmental hazard (trap, quake)',
        'Territorial locals / savages',
        'Rival explorers / scavengers',
        'Cursed guardians / animated constructs',
        'Local bureaucracy (permits, tolls)',
        'Weather turning violent',
        'Internal party exhaustion / morale drop',
        'Patrol checkpoints & guards',
        'Magical tracking / beacon on target',
        'Rival gang watching exits',
        'Roadblocks & tolls enforced',
        'Weather blocking escape routes',
        'Dockmaster / customs official suspicious',
        'Pursuit mounted (horses, vehicles)',
        'Party fatigue reduces speed',
        'Trusted insider watching for anomalies',
        'Magic wards / detection glyphs',
        'Rotating patrols (schedule puzzle)',
        'Highly suspicious quartermaster',
        'Locked areas with keyed tokens',
        'Allies of the target inside',
        'Trapdoor / escape denial systems',
        'Hidden guardians (golems, constructs)',
        'Merchant cheating / price gouging',
        'Scarcity or embargo enforced',
        'Rival buyer outbids you',
        'Item cursed / has strings attached',
        'Mercenary demands upfront price (trust risk)',
        'Craftsman sabotages or is incompetent',
        'Authority seizes goods (inspection)',
        'Informant double-deals both sides',
        'Robbers / thieves in the night',
        'Infection / lingering curse flares',
        'Spy infiltrates camp',
        'Political rival undermines you',
        'Local law enforcement questions you',
        'Contractor fails to deliver goods',
        'Enemy agent sows rumors',
        'A lover / ally creates complications',
        'Stubborn official',
        'Hostile rival negotiator',
        'Misinformed crowd',
        'Secret enforcers in audience',
        'Competing faction offering better terms',
        'Moral objection within party',
        'NPC is being coerced by another',
        'Translator / interpreter misleads',
        'Guard dogs / watch animals',
        'Infrared / magical sensors',
        'Alert patrols with shifting patterns',
        'Suspicious NPC recognizes you',
        'Rival thief on same job',
        'Civilians that complicate movement',
        'Environmental noise changes (rain, drums)',
        'Party member mistakes signal and acts',
        'Your former ally now fights you',
        'Enemy now has unpredictable tactics',
        'Authority using Twist - Complication|twist to seize power',
        'Public hysteria / mobs',
        'Environmental hazard as opposition',
        'Time pressure from new deadline',
        'A third party benefiting from the Twist - Complication|twist',
        'The Twist - Complication|twist reveals a personal secret of a PC'
      ],
      escalation: [
        'Catch up → Combat or Social',
        'Lose trail → Exploration / Discovery',
        'Target leaps into danger → Extraction - Escape|Extraction / Rescue',
        'Collateral damage → Social / Twist - Complication|Twist (wanted by authorities)',
        'Target splits crowd → Stealth (blend)',
        'Target reaches rendezvous → Infiltration / Ambush',
        'Enemy flees → Chase / Extraction - Escape|Extraction',
        'Prisoner captured → Social / Interrogation',
        'Battlefield event (bridge collapses) → Exploration/Twist - Complication|Twist',
        'Reinforcements arrive → Combat escalates or Twist - Complication|Twist',
        'Enemy surrenders → Social / Resource (parley)',
        'Magical surge → Twist - Complication|Twist / Wildcard',
        'Someone discovers your presence → Stealth/Chase',
        'Clue proves false → Twist - Complication|Twist',
        'Clue points to a dangerous location → Exploration/Infiltration',
        'You’re accused of tampering → Social (interrogation)',
        'Time-limited revelation (ritual starts) → Extraction - Escape|Extraction/Chase',
        'Discovery attracts attention → Combat',
        'Puzzle misstep → Trap / Combat',
        'Weather crash → Extraction - Escape|Extraction / Escape',
        'Find something priceless → Social / Resource',
        'Area collapses → Twist - Complication|Twist / Extraction - Escape|Extraction',
        'Rival ambush → Combat / Chase',
        'Portal opens → Wildcard / Twist - Complication|Twist',
        'Pursuit starts → Chase',
        'Escape vehicle disabled → Combat / Exploration',
        'Target panics & reveals identity → Social/Twist - Complication|Twist',
        'You reach border → Social (bribe) or Discovery (inspector)',
        'You lose the prize → Resource loss / Twist - Complication|Twist',
        'Civilians endangered → Moral choice / Social',
        'Cover blown → Combat / Chase',
        'Partial success → Extraction - Escape|Extraction / Stealth continuation',
        'Insider betrays you → Twist - Complication|Twist / Combat',
        'You set trap → Social (blame)',
        'Silent success → Discovery (info acquired)',
        'Alarms looped → Reinforcements approach → Combat',
        'Merchant cheating / price gouging',
        'Scarcity or embargo enforced',
        'Rival buyer outbids you',
        'Item cursed / has strings attached',
        'Mercenary demands upfront price (trust risk)',
        'Craftsman sabotages or is incompetent',
        'Authority seizes goods (inspection)',
        'Informant double-deals both sides',
        'Rest - Downtime|Rest interrupted by attack → Combat/Extraction - Escape|Extraction',
        'Rumor reveals vital Discovery → Discovery/Social',
        'Training reveals new sidequest → Resource/Exploration',
        'Political event forces immediate attendance → Social',
        'Blackmailer appears → Social/Twist - Complication|Twist',
        'Unexpected visitor (ally or enemy) → Social/Twist - Complication|Twist',
        'Talks break down → Combat',
        'NPC runs → Chase',
        'NPC admits something damaging → Discovery',
        'Someone reveals a secret → Twist - Complication|Twist',
        'Third party interrupts (riot) → Exploration/Chase',
        'Agreement holds but at cost → Resource or Debt',
        'You’re spotted → Chase',
        'You trigger alarm → Combat / Extraction - Escape|Extraction',
        'You succeed quietly → Discovery (overheard info)',
        'Target doubles back → Stealth (renew effort)',
        'You plant evidence → Social consequences (accusation)',
        'Unexpected VIP arrival → Twist - Complication|Twist / Social',
        'Twist - Complication|Twist triggers Combat',
        'Twist - Complication|Twist forces immediate Extraction - Escape|Extraction',
        'Twist - Complication|Twist opens new Discovery (clue)',
        'Twist - Complication|Twist compels Social resolution (appeasing public)',
        'Twist - Complication|Twist collapses current plan → new Infiltration/Heist',
        'Twist - Complication|Twist reveals bigger antagonist → Campaign reframe'
      ],
      stakes: [
        'Target escapes with critical info',
        'Civilians injured → bounty / law issues',
        'Party reputation suffers',
        'Wanted level raised',
        'Reward lost if fail',
        'Rival gains upper hand',
        'Strategic town/faction falls',
        'Permanent loss of party member',
        'War/peace balance changes',
        'Valuable artifact destroyed/lost',
        'Bounty / reputation changes widely',
        'Political fallout / war declared',
        'Personal reputation at risk',
        'An ally’s freedom',
        'Major story thread stalls',
        'Wealth / artifact lost',
        'Enemy gains advantage',
        'Public panic / political fallout',
        'Expedition funding lost',
        'Permanent loss of unique relic',
        'Party member injury / death',
        'Local ecosystem poisoned',
        'Reputation among scholars',
        'New campaign thread unlocked',
        'Target recaptured permanently',
        'International incident / warrant',
        'Prize destroyed or confiscated',
        'Party member captured as diversion',
        'Reputation as criminals increases',
        'Debt to benefactor for escape',
        'Long-term political infiltration fails',
        'Prisoner’s life on the line',
        'Lost access to a major resource',
        'Blackmail material ends up public',
        'Enemy learns your identities',
        'War escalates due to sabotage',
        'Funds exhausted / bankruptcy',
        'Item is one-off (only chance)',
        'Ally loses faith if fail',
        'Black market attention / bounty',
        'Faction losses if supply line fails',
        'Moral cost (deal with unsavory party)',
        'Recovery fails → permanent debuff',
        'Ally leaves if neglected',
        'Important opportunity lost',
        'Reputation changes in locale',
        'Resource/gear lost or improved',
        'Party morale shift',
        'Political fallout',
        'Party reputation / law standing',
        'Alliance secured / lost',
        'Cash / rare item at stake',
        'Prison time for an ally',
        'Accelerated enemy plans',
        'Alarm triggers citywide search',
        'Item is one-time use (lose if fail)',
        'Ally’s identity compromised',
        'Faction war escalates',
        'Legal bounty on heads',
        'Personal code / honour tested',
        'Campaign goal overturned',
        'Major NPC death',
        'Public order collapsed',
        'Secrets exposed permanently',
        'Loss of safe haven/supply line',
        'PC’s past consequences revealed'
      ],
      transitions: [
        'Discovery - Learn information, reveal a clue, find an opening',
        'Social - Negotiate, deceive, intimidate, bond',
        'Stealth – get around danger unseen',
        'Exploration – navigate a space, hazard, puzzle, or environment',
        'Chase – flee, pursue, or intercept',
        'Combat – direct conflict',
        'Infiltration – deeper or purpose-driven stealth',
        'Extraction - Escape – leave with something/after something',
        'Resource – acquire tools, allies, leverage',
        'Twist - Complication – dynamic change of stakes or context',
        'Rest - Downtime – recovery, crafting, planning',
        'Wildcard – (GM chooses / meta-plot forces)'
      ]
    },
    Discovery: {
      subTypes: [
        'Reveal NPC Intent',
        'Find Hidden Trail / Clue / Tracks',
        'Eavesdrop Accidentally',
        'Stumble Upon Scene in Progress',
        'Magical/Divine Insight Moment',
        'Find a physical clue (map, letter, relic)',
        'Locate hidden entrance / secret door',
        'Discover a corpse / crime scene',
        'Uncover overheard conversation (eavesdrop)',
        'Spy a private meeting / clandestine deal',
        'Magical revelation / omen appears',
        'Discover tracks / scent trail',
        'Discover falsified evidence (planted)',
        'Uncover a ledger / records cache',
        'A stranger offers a lead (ambiguous)',
        'Find a dead drop / payment point',
        'GM choice / wild revelation'
      ],
      objectives: [
        'Translate/interpret the discovery',
        'Confirm whether clue is genuine',
        'Trace clue to origin / follow trail',
        'Secure the find (protect, steal, photograph)',
        'Determine who benefits from the info',
        'Use the clue to lure an NPC / set a trap'
      ],
      opposition: [
        'Rival investigator',
        'Guard / patrol near clue site',
        'Bystanders who saw something',
        'A cultist / fanatic guarding secret',
        'Corrupt official who wants it suppressed',
        'Natural/monster hazard at site',
        'A double agent (misleading informer)',
        'Internal party disagreement about authenticity'
      ],
      escalation: [
        'Someone discovers your presence → Stealth/Chase',
        'Clue proves false → Twist - Complication|Twist',
        'Clue points to a dangerous location → Exploration/Infiltration',
        'You’re accused of tampering → Social (interrogation)',
        'Time-limited revelation (ritual starts) → Extraction/Chase',
        'Discovery attracts attention → Combat'
      ],
      stakes: [
        'Personal reputation at risk',
        'An ally’s freedom',
        'Major story thread stalls',
        'Wealth / artifact lost',
        'Enemy gains advantage',
        'Public panic / political fallout'
      ]
    }
  }
} as const

export type ScenarioTypeKey = keyof typeof scenarios.types
export type ScenarioCategoryKey =
  | 'subTypes'
  | 'objectives'
  | 'opposition'
  | 'escalation'
  | 'stakes'
  | 'transitions'

export type ModifierKey = keyof typeof scenarios.modifiers

const pickRandom = (items: readonly string[] | undefined) => {
  if (!items || items.length === 0) return ''
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

export const getRandomCategoryItem = (
  type: ScenarioTypeKey,
  category: ScenarioCategoryKey,
  exclude?: string
) => {
  const categoryItems = (
    scenarios.types[type] as Partial<Record<ScenarioCategoryKey, readonly string[]>>
  )?.[category]
  if (!categoryItems || categoryItems.length === 0) return ''

  const filtered =
    exclude && categoryItems.length > 1
      ? categoryItems.filter((item) => item !== exclude)
      : categoryItems

  return pickRandom(filtered)
}

export const getRandomModifierItem = (category: ModifierKey, exclude?: string) => {
  const items = scenarios.modifiers[category]
  const filtered = exclude && items.length > 1 ? items.filter((item) => item !== exclude) : items
  return pickRandom(filtered)
}
export default scenarios
