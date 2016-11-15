
var program = require('commander');
 
var book1_title = "Heroes of the Frontier";
var book1_author = "Dave Eggerts";
var book1_price = "17.95";
var book1_kind = "Paperback";

var book2_title = "Jamie's Chistmas Cookbook";
var book2_author = "Jamie Oliver";
var book2_price = "31.95";
var book2_kind = "Hardback";

var book3_title = "The Fault in Our Stars";
var book3_author = "John Green";
var book3_price = "10.99";
var book3_kind = "Paperback";

var book4_title = "Miss Peregrine's Home for Peculiar Children";
var book4_author = "Ransom Riggs";
var book4_price = "11.99";
var book4_kind = "Trade Paperback";

var book5_title = "Fangirl";
var book5_author = "Rainbow Rowell";
var book5_price = "11.95";
var book5_kind = "Paperback";


program
  .version('0.1')
  .option('-t, --title [string]', 'Title')
  .option('-a, --author [string]', 'Author')
  .option('-p, --price [string]', 'Price')
  .option('-k, --kind [string]', 'Kind')
  .parse(process.argv);

switch(program.title)
{
    case(book1_title):
        console.log('Title: '+book1_title);
        console.log('Author: '+book1_author);
        console.log('Price: '+book1_price);
        console.log('Kind:'+book1_kind);
        break;

    case(book2_title):
        console.log('Title: '+book2_title);
        console.log('Author: '+book2_author);
        console.log('Price: '+book2_price);
        console.log('Kind:'+book2_kind);
        break;
    
    case(book3_title):
        console.log('Title: '+book3_title);
        console.log('Author: '+book3_author);
        console.log('Price: '+book3_price);
        console.log('Kind:'+book3_kind);
        break;
    
    case(book4_title):
        console.log('Title: '+book4_title);
        console.log('Author: '+book4_author);
        console.log('Price: '+book4_price);
        console.log('Kind:'+book4_kind);
        break;
    
    case(book5_title):
        console.log('Title: '+book5_title);
        console.log('Author: '+book5_author);
        console.log('Price: '+book5_price);
        console.log('Kind:'+book5_kind);
        break;

}
    
switch(program.author)
{
    case(book1_author):
        console.log('Title: '+book1_title);
        console.log('Author: '+book1_author);
        console.log('Price: '+book1_price);
        console.log('Kind:'+book1_kind);
        break;

    case(book2_author):
        console.log('Title: '+book2_title);
        console.log('Author: '+book2_author);
        console.log('Price: '+book2_price);
        console.log('Kind:'+book2_kind);
        break;
    
    case(book3_author):
        console.log('Title: '+book3_title);
        console.log('Author: '+book3_author);
        console.log('Price: '+book3_price);
        console.log('Kind:'+book3_kind);
        break;
    
    case(book4_author):
        console.log('Title: '+book4_title);
        console.log('Author: '+book4_author);
        console.log('Price: '+book4_price);
        console.log('Kind:'+book4_kind);
        break;
    
    case(book5_author):
        console.log('Title: '+book5_title);
        console.log('Author: '+book5_author);
        console.log('Price: '+book5_price);
        console.log('Kind:'+book5_kind);
        break;
}

 switch(program.price)
{
    case(book1_price):
        console.log('Title: '+book1_title);
        console.log('Author: '+book1_author);
        console.log('Price: '+book1_price);
        console.log('Kind:'+book1_kind);
        break;

    case(book2_price):
        console.log('Title: '+book2_title);
        console.log('Author: '+book2_author);
        console.log('Price: '+book2_price);
        console.log('Kind:'+book2_kind);
        break;
    
    case(book3_price):
        console.log('Title: '+book3_title);
        console.log('Author: '+book3_author);
        console.log('Price: '+book3_price);
        console.log('Kind:'+book3_kind);
        break;
    
    case(book4_price):
        console.log('Title: '+book4_title);
        console.log('Author: '+book4_author);
        console.log('Price: '+book4_price);
        console.log('Kind:'+book4_kind);
        break;
    
    case(book5_price):
        console.log('Title: '+book5_title);
        console.log('Author: '+book5_author);
        console.log('Price: '+book5_price);
        console.log('Kind:'+book5_kind);
        break;

}
    
   switch(program.price)
{
    case(book1_price):
        console.log('Title: '+book1_title);
        console.log('Author: '+book1_author);
        console.log('Price: '+book1_price);
        console.log('Kind:'+book1_kind);
        break;

    case(book2_price):
        console.log('Title: '+book2_title);
        console.log('Author: '+book2_author);
        console.log('Price: '+book2_price);
        console.log('Kind:'+book2_kind);
        break;
    
    case(book3_price):
        console.log('Title: '+book3_title);
        console.log('Author: '+book3_author);
        console.log('Price: '+book3_price);
        console.log('Kind:'+book3_kind);
        break;
    
    case(book4_price):
        console.log('Title: '+book4_title);
        console.log('Author: '+book4_author);
        console.log('Price: '+book4_price);
        console.log('Kind:'+book4_kind);
        break;
    
    case(book5_price):
        console.log('Title: '+book5_title);
        console.log('Author: '+book5_author);
        console.log('Price: '+book5_price);
        console.log('Kind:'+book5_kind);
        break;

}

   switch(program.kind)
{
    case(book1_kind):
        console.log('Title: '+book1_title);
        console.log('Author: '+book1_author);
        console.log('Price: '+book1_price);
        console.log('Kind:'+book1_kind);
        break;

    case(book2_kind):
        console.log('Title: '+book2_title);
        console.log('Author: '+book2_author);
        console.log('Price: '+book2_price);
        console.log('Kind:'+book2_kind);
        break;
    
    case(book3_kind):
        console.log('Title: '+book3_title);
        console.log('Author: '+book3_author);
        console.log('Price: '+book3_price);
        console.log('Kind:'+book3_kind);
        break;
    
    case(book4_kind):
        console.log('Title: '+book4_title);
        console.log('Author: '+book4_author);
        console.log('Price: '+book4_price);
        console.log('Kind:'+book4_kind);
        break;
    
    case(book5_kind):
        console.log('Title: '+book5_title);
        console.log('Author: '+book5_author);
        console.log('Price: '+book5_price);
        console.log('Kind:'+book5_kind);
        break;

}