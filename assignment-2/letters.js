var chance = require('chance').Chance();

var wrap = require('word-wrap');

var program = require('commander');

const first = ['SWEET','LITTLE','ADORABLE', 'DEAR','DEAREST','CHERISHED','PRECIOUS', 'CHARMING'];

const second = ['PUPPY', 'HONEY', 'CANDY', 'SUGAR', 'DARLING', 'BUNNY', 'PUMKIN PIE','POPPET', 'MARMOT', 'LOVE-APPLE'];

const determiner = ['MY', 'YOUR', 'A', 'THIS']

const adjectives = ['ANXIOUS', 'CHEESY', 'ARDENT', 'JOBLESS', 'NOBLE', 'GENTLE', 'AMBITIOUS', 'JOYFUL', 'HUNGRY', 'DEVOURING', 'CHARMING', 'LOVELY', 'DEAR', 'BURNING', 'IMPATIENT', 'DESTRUCTIVE', 'BRAVE', 'NAIVE', 'INNOCENT', 'OLD', 'NEW', 'BRILLIANT', 'RADIOACTIVE', 'FORGOTTEN', 'PRECIOUS','WEIRD','INCOMPLETE','UNBELIEVABLE','AMAZING','UNBEARABLE','FOOLISH','STANGE','CUTE','FASCINATING','PRETTY','GRACEFUL','DELICIOUS','SYRUPY','BEAUTIFUL','LAZY','PINK','RED','BLUE','GREEN','FLUFFY'];

const nouns = ['IMPERFECTION', 'DESIRE', 'LOVE', 'ACTION', 'AVIDITY', 'LUST', 'HEART', 'HEARTBEAT', 'VICTORY', 'CHARM', 'PARADISE', 'TASTE', 'PASSION', 'FIDELITY', 'SPIRIT', 'DAY', 'NIGHT','EYES','LIPS','STUPIDITY','JOKE','MADNESS','SWEETHEART','SMILE','DINNER','CAROT CAKE','MUFFIN', 'RAINBOW', 'UNICORN', 'CHEEKBONE','SENSUALITY','DEVOTEDNESS','AFFECTION','TENDERNESS','INVOLVMENT','SENTIMENT','NOSE','FEET'];

const adverbs = ['ARDENTLY', 'JOYFULLY', 'IMPATIENTLY', 'KINDLY', 'CHARMLY', 'INCREDIBLY','GENTLY','CHARMINGLY','LUCKILY','TRAGICALLY','SOFTLY','BEAUTIFULLY','GENEROUSLY','HAPPILY','GRACEFULLY','PRECIOUSLY','INNOCENTLY','QUIETLY','PEACEFULLY','SWEETLY','BLINDLY','CLEARLY','ACCIDENTALLY','BRAVELY','ELEGANTLY', 'ENTHOUSIASTICLY','HONESTLY','MADLY','PAINFULLY','PATIENTLY'];

const verbs = ['EATS', 'TAKES CARE OF', 'REPRODUCES', 'BEATS FOR', 'REMPLACES', 'ABANDONS', 'IMPROVES', 'ENHANCES', 'COMPLEMENTS', 'RAISES', 'AMPLIFIES', 'COLLAPSES', 'DISAPEARS BEHIND', 'STABS', 'EXPLOSES', 'ILLUMINATES','OVERCOMES','COMPLETES','SATISFIES','CALMS','THROWS AWAY','BURNS FOR','STAYS','DEPENDS OF','KISSES'];

const deco = ['******************************************************************','<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<','<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3','°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°'];


program
	.option('-w, --width [uint]', 'Width')
	.option('-s, --sentences [uint]', 'Number of sentences')
	.parse(process.argv);

var w = parseInt(program.width) || 65;
var s = parseInt(program.sentences) || 5;

//Functions :
function choice(array) {
	var index = chance.natural({'min': 0, 'max': array.length -1});
	return array[index];
}


function entry() {
	return choice(first)+' '+choice(second);
}

function sentence1() {
	return choice(determiner)+" "+choice(adjectives)+" "+choice(nouns)+" "+choice(adverbs)+" "+choice(verbs)+" "+choice(determiner)+" "+choice(adjectives)+" "+choice(nouns)+".";
}

function end() {
	return "YOURS "+choice(adverbs)
}

function decoration() {
	return choice(deco)
}

function alternative() {
	return "MY "+choice(first)+' '+choice(second)+'...'+'YOUR '+choice(nouns)+' '+choice(verbs)+' ME.'
}

function alternative2() {
	return choice(determiner)+' '+choice(adjectives)+' '+choice(nouns)+' '+choice(verbs)+' '+choice(determiner)+' '+choice(nouns)+'.';
}


function maybe() {
    var variation = chance.natural({'min':0, 'max':10});
    if (4 < variation) {
        console.log(wrap(sentence1(), {width: w} ,{indent: '                    '}));
    return ''
    } 
    if (5 < variation <7) {
        console.log(wrap(alternative(), {width: w} ,{indent: '                    '}));
    return ''
    }
    else {console.log (wrap(alternative2(), {width: w} ,{indent: '                    '}));
    return ''};
}

var text = "";

text += "\n\n" + decoration() + "\n" + entry() + "\n";

for(var i =0; i < s; i++) {

	var variation = chance.natural({'min':0, 'max':10});

    if (4 < variation) {
        text += sentence1() + " ";
    } 
    if (5 < variation <7) {
        text += alternative() + " ";
    }
    else {
    	text += alternative2() + " ";
    }

}

text += "\n\n" + (wrap(end(), {indent: '          '})) + "\n";

text += "YOU KNOW WHO...\n" + decoration() + "\n";

console.log(wrap(text, {"width": w},{indent: ' '}));

/*
//text :
console.log ("  ")
console.log ("  ")
console.log (decoration())
console.log ("  ")
console.log(wrap(entry(), {indent: ' '}, {newline: '\n\n'}));
console.log ("  ")
console.log ("  ")
console.log(wrap(sentence1(), {width: 80} ,{indent: '                    '}));
console.log ("  ")
console.log(wrap(maybe(), {width: 80} ,{indent: '                    '}));
console.log(wrap(sentence1(), {width: 80} ,{indent: '     '}));
console.log ("  ")
console.log(wrap(end(), {indent: '                                    '}));
console.log (wrap("  ", {indent: '                                   '}));
console.log (wrap('YOU KNOW WHO...' ,{indent: '                                              '}));
console.log (decoration());
console.log ("  ");
*/




