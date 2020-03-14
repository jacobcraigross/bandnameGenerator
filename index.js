const button = document.querySelector('.button');
const output = document.querySelector('.output');
const arrayOne = ['Poisoned', 'Blackened', 'Bestial', 'Ruptured', 'Nuclear', 'Wolflike', 'Wretched',
'Punished', 'Hooded', 'Howling', 'Clandestine', 'Noxious', 'Infernal', 'Slaughtered',
'Sullen', 'Abhorrent', 'Barbaric', 'Diseased', 'Blasphemous', 'Desecrated', 'Devoured',
'Genocidal', 'Apocalyptic', 'Acidic', 'Monstrous', 'Murderous', 'Relentless', 'Blazing',
'Corrupt', 'Vomitous', 'Malignant', 'Hateful', 'Dying', 'Animalistic', 'Nauseating', 'Darkened',
'Vomiting', 'Unrelenting', 'Tormented', 'Graven', 'Menacing', 'Cold Grim', 'Putrid', 'Vile',
'Bleeding', 'Destroyed', 'Vicious', 'Satanic', 'Pagan', 'Repulsive', 'Terroristic', 'Fascistic',
'Vomitous', 'Revolting', 'Sickening', 'Inhuman', 'Caustic', 'Blind', 'Cursed', 'Holocaustic',
'Sacriligious', 'Heretical', 'Venomous', 'Decapitated', 'Impaled', 'Mutilated', 'Withered', 'Eucharist',
'Ripping', 'Charred', 'Nihilistic', 'Hellish', 'Decomposing', 'Festering', 'Gutted', 'Militant',
'Nailed', 'Fucking', 'Orthodox', 'Ritualistic', 'Cannibalistic', 'Necrotic', 'Cryptic', 'Grinding',
'Astral', 'Obsidian', 'Abyssal', 'Spectral', 'Chained', 'Splattered', 'Torturous', 'Convulsive',
'Rotting', 'Disembodied', 'Radioactive', 'Ruthless', 'Fractured', 'Gnawing', 'Cosmic', 'Ravenous',
'Crushing', 'Eternal', 'Defleshed', 'Crawling', 'Conquered', 'Primordial', 'Ancient', 'Instinctual',
'Merciless', 'Primal', 'Primitive', 'Atavistic', 'Lawless', 'Doomed', 'Prophetic', 'Nocturnal',
'Skeletal', 'Morbid', 'Lurking', 'Psychic', 'Occultic', 'Disavowed', 'Visceral', 'Mournful', 'Paganizer',
'Midnight', 'Immortal', 'Transylvanian', 'Disgorged', 'Condemned', 'Forgotten', 'Brazen', 'Mystical',
'Luciferian', 'Despised', 'Misanthropic', 'Sentenced', 'Skinless', 'Reptilian', 'Subterranean', 'Vengeful',
'Arctic', 'Northern', 'Winter', 'Iced', 'Frozen', 'Chaotic', 'Severed', 'Hopeless', 'Entrenched',
'Exploited', 'Esoteric', 'Carpathian', 'Glacial', 'Burning', 'Irreparable', 'Obscure', 'Arcane',
'Medieval', 'Druidic', 'Enochian', 'Antediluvian', 'Malthusian', 'Wotanistic', 'Anti Gnostic',
'Regicidal', 'Insecticidal', 'Putricidal', 'Omnicidal', 'Pathophobian', 'Thanatophobian', 'Disfigured',
'Theophobian', 'Aural', 'Deosilian', 'Omniscient', 'Sabbathian', 'Hellenic', 'Litanical',
'Mithraistic', 'Atheistic', 'Sacred', 'Scourging', 'Scalding', 'Scrying', 'Zoroastrian', 'Ceremonial',
'Ascended', 'Hermetic', 'Banished', 'Druidian', 'Elemental', 'Galdrian', 'Lithomanical', 'Mitochondrial',
'Divine', 'Quantum', 'Resurrected', 'Shamanic', 'Ahrimanic', 'Transfigured', 'Warped', 'Unconquerable',
'Reincarnated', 'Sacrificial', 'Vampiric', 'Amarokian', 'Abraxian', 'Astarothian', 'Thermonuclear',
'Theocratic', 'Anarchic', 'Despotic', 'Authoritarian', 'Totalitarian', 'Nightmarish', 'Demonic', 'Scorned',
'Violated', 'Fatalistic', 'Eviscerated', 'Hammering', 'Exterminated', 'Virulent', 'Harsh', 'Inverted',
'Invasive', 'Conspiratorial', 'Subversive', 'Abandoned', 'Barricaded', 'Enforced', 'Insurgent',
'Maimed', 'Predatory', 'Ravaging', 'Lacerated', 'Writhing', 'Paralyzed', 'Sadistic', 'Caged', 'Cloaked',
'Damned', 'Scorched', 'Clawing', 'Draconian', 'Vast', 'Parasitic', 'Defiled', 'Riven', 'Envenomed', 'Apex',
'Sallow', 'Dismal', 'Abiotic', 'Exogenetic', 'Ethereal', 'Adversarial', 'Protean', 'Baneful', 'Flayed',
'Eugenic', 'Remorseless', 'Intercenine', 'Uncompromising', 'Unmerciful', 'Putrified', 'Pandemonic',
'Disemboweled', 'Ashen', 'Poisonous', 'Bastard', 'Rote', 'Salted', 'Viral', 'Cardinal', 'Nordic', 'Slavic',
'Septentrional', 'Cozen', 'Sanguinolent', 'Hyperborean', 'Heathen', 'Enslaved', 'Vulgar', 'Abusive', 'Empyrean',
'Godless', 'Goddamned', 'Mercurial', 'Dispirited', 'Norse', 'Germanic', 'Teutonic', 'Chthonic', 'Foul', 'Wormed'];

const arrayTwo = ['Rites', 'Vengeance', 'Revenge', 'Tragedy', 'Scythe', 'Butchery', 'Contempt', 'Darkness', 'Banner',
'Annihilation', 'Throne', 'Hellfire', 'Suffering', 'Pestilence', 'Genocide', 'Strife', 'Evil', 'Honor', 'Blood Honor', 'Intolerance',
'Warfare', 'Harm', 'Extermination', 'Beast', 'Tomb', 'Grave', 'Vomit', 'Misery', 'Blade', 'Consecration', 'Entity', 'Depravity',
'Execution', 'Gore', 'Entrails', 'Fear', 'Goat', 'Wolf', 'Sorrow', 'Grief', 'Serpent', 'Scum', 'Stronghold', 'Strangulation',
'Death Penalty', 'Atrocity', 'Anguish', 'Blight', 'Flame', 'Iron Spear', 'Gore Axe', 'Tribulation', 'Blood Eagle',
'Judgement', 'Reaper', 'Remains', 'Mockery', 'Retaliation', "Mind's Eye", 'Holocaust', 'Ritual', 'Berserker', 'Penetration',
'Crucifixion', 'Hypothermia', 'Burden', 'Acid', 'Cruelty', 'War', 'Agony', 'Willpower', 'Strength', 'Wound', 'Imprecation',
'Discipline', 'Punishment', 'Death Sentence', 'Brutality', 'Barbarism', 'Enemy', 'Rot', 'Hatred', 'Wolfsblood', 'Incursion',
'Repulsion', 'Suffocation', 'Isolation', 'Weaponry', 'Fortress', 'Armor', 'Oath', 'Covenant', 'Struggle', 'Pogrom',
'Execration', 'Venom', 'Heresey', 'Disgust', 'Abomination', 'Damnation', 'Beheading', 'Electrocution', 'Revulsion', 'Eradication',
'Plague', 'Scourge', 'Hex', 'Mercenary', 'Warlord', 'Scalp', 'Witchcraft', 'Witchery', 'Funeral', 'Baptism', 'Invasion',
'Mastery', 'Shrine', 'Altar', 'Domination', 'Spirit', 'Crypt', 'Assault', 'Autopsy', 'Cauldron', 'Blood Hammer', 'Hammer',
'Supremacy', 'Necrosis', 'Blackness', 'Warhammer', 'Invocation', 'Armageddon', 'Hallucination', 'Sinew', 'Castle', 'Gallows',
'Extinction', 'Cemetary', 'Graveyard', 'Famine', 'Starvation', 'Ash', 'Prison', 'Cloak', 'Harvest', 'Abyss', 'Nihilist',
'Sorcery', 'Ceremony', 'Emptiness', 'Liturgy', 'Incantation', 'Collapse', 'Dismemberment', 'Mourning', 'Ravensblood', 'Filth',
'Ruins', 'Emperor', 'Inquisition', 'Leviathan', 'Behemoth', 'Monolith', 'Maggot', 'Disintegration', 'Possession', 'Doctrine',
'Guillotine', 'Infection', 'Obituary', 'Bone Fragment', 'Krieg', 'Wermacht', 'Oppression', 'Immolation', 'Elimination',
'Massacre', 'Effigy', 'Dissection', 'Carnage', 'Asphyxiation', 'Exhumation', 'Mortification', 'Napalm', 'Anathema', 'Ruination',
'Nightfall', 'Panzerfist', 'Vomitorium', 'Terrorizer', 'Lunacy', 'Fate', 'Death Hammer', 'Death Axe', 'Denunciation',
'War Dagger', 'Assasination', 'Aeon', 'Initiation', 'Wasteland', 'Devil Worshiper', 'Demonology', 'Savagery', 'Parasite',
'Goat Skull', 'Wolf Skull', 'Proclamation', 'Firing Squad', 'Betrayal', 'Incarnate', 'Summoning', 'Reign', 'Satanist',
'Seance', 'Megalith', 'Torchlight', 'Wilderness', 'Witch Trial', 'Neanderthal', 'Treason', 'Revocation', 'Violation',
'Blood', 'Blood Ash', 'Bonedust', 'Dust', 'Burial', 'Abuse', 'Necromancy', 'Dark Age', 'Chainmail', 'War Scythe',
'Mauling', 'Augury', 'Baphomet', 'Chalice', 'Coven', 'Exorcism', 'Contagion', 'Nazgul', 'Omen', 'Rune', 'Benediction',
'Deicide', 'Biocide', 'Phobia', 'Pendulum', 'Clairvoyant', 'Zodiac', 'Wrath', 'Human Sacrifice', 'Brute', 'Vessel',
'Force', 'Basilisk', 'Hellhound', 'Poltergeist', 'Revenant', 'Succubus', 'Imperium', 'Bloodletting', 'Goatsblood',
'Arsenal', 'Sentinel', 'Cadaver', 'Downfall', 'Nailbomb', 'Pipebomb', 'Siege', 'Survival', 'Treachery', 'Mutilation',
'Wraith', 'Accuser', 'Void', 'Iron', 'Monarch', 'Leech', 'Marrow', 'Leechcraft', 'Thralldom', 'Vigil', 'Tower',
'Weregild', 'Wold', 'Wrest', 'Zenith', 'Meridian', 'Abiogenesis', 'Exogenesis', 'Veneration', 'Poison', 'Sewage', 'Sewer',
'Paralysis', 'Parabellum', 'Bastard', 'Conqueror', 'Subjugation', 'Arson', 'Vesper', 'Law', 'Archaism', 'Degradation',
'Vermin', 'Atonement', 'Pesticide', 'Divination', 'Sigil', 'Henosis', 'Ethnocide', 'Heathenry', 'Sickness',
'Coffin', 'Cancer', 'Slavery', 'Bloodthirst', 'Blood Ceremony', 'Cloven Hoof', 'Antichrist', 'Contamination',
'Yggdrasil', 'Ragnarok', 'Jotun', 'Troll', 'Mass Grave', 'War Grave', 'Cremation', 'Viking Burial', 'Heritage',
'Cenotaph', 'Horror', 'Megaron', 'Vampirism', 'Utterance', 'Miasma', 'Accurser', 'Black Wind', 'Devourer', 'Desecration'];

loadEventListener();
function loadEventListener(){
    button.addEventListener('click', finalName)
}

function finalName(){
    const firstName = arrayOne[Math.floor(Math.random() * arrayOne.length)];
    const secondName = arrayTwo[Math.floor(Math.random() * arrayTwo.length)];
    output.classList.add('animated', 'fadeIn');
    output.textContent = `${firstName} ${secondName}`;
    setTimeout(() => {
        output.classList.remove('animated');
        output.classList.remove('fadeIn');
    }, 1000);
}



