import Bulk from '../assets/bulk.png';
import Creatine from '../assets/creatine.jpg'
import Gainer from '../assets/weight gainer.png'
import Pre from '../assets/preworkout.png'
import Pure from '../assets/pure isolate.jpg';
import Mass from '../assets/mass gainer.jpg';
import Glutamine from '../assets/l glutamine.jpg';
import Advanceshilajit from '../assets/combo whey advanced & shilajit.jpg';
import Wheybottle from '../assets/combo whey & bottle.jpg';
import Weightcreatine from '../assets/combo weight and creatine.jpg';
import Combocrea from '../assets/combo creatine.jpg';
import Creatinebottle from '../assets/combo creatine & bottle.jpg';
import Fishoil from '../assets/combo creatine fishoil.jpg';
import Bag from '../assets/combo bag isolate & creatine.jpg';
 
  

const products = [
    { id: 1, name:"BULK", price: 1800, description:"This bulking supplement helps to gain you muscle mass", category:"Hot deal", image: Bulk },
     { id: 4, name:"PRE WORKOUT", price: 780, description:"Pre workout give you energy and strength for your ultimate workout", category:"Hot deal", image: Pre},
      { id: 6, name: "MASS GAINER", price: 2600, description:"Mass gainer gain your muscle mass and weight", category:"Hot deal", image: Mass},
        { id: 12, name:"CREATINE & SHAKER COMBO", price: 1000, description:"creatine and shaker best combo", category:"Combos", image: Creatinebottle},
     { id: 5, name:"PURE ISOLATE", price: 1900, description:"ure whey protein isolate offers several benefits, primarily due to its high protein content and purity. It's easily digestible, supports muscle growth and repair, aids in weight management, and is often lactose-free, ", category:"Proteins", image: Pure},
     { id: 9, name:"WHEY & SHAKER", price: 2200, description:"Whey protein lean your muscle and fill your daily intake of protein", category:"Combos", image: Wheybottle},
        { id: 7, name:"L-GLUTAMINE", price: 600, description:"L-glutamine offers a range of potential health benefits, particularly for muscle recovery, gut health, and immune function. It's also being explored for its potential role in managing stress, regulating blood sugar, and supporting brain function. ", category:"Hot deal", image: Glutamine},
    { id: 3, name:"WEIGHT GAINER", price: 2350, description:"Weight gainers offer several benefits, primarily aiding in gaining weight, particularly muscle mass, for those who struggle to consume enough calories through regular food intake. ", category:"Hot deal", image: Gainer },
    
    { id: 8, name:"COMBO WHEY ADVANCED & SHILAJIT", price: 2999, description:"Whey advanced is whey protein advanced & shilajit ", category:"Combos", image: Advanceshilajit},
  { id: 2, name:"CREATINE MONOHYDRATE", price: 500, description:"Creatine monohydrate help to give you strength and build your muscles", category:"Creatines", image: Creatine },
    { id: 10, name:"WEIGHT GAINER & CREATINE", price: 2600, description:"Weight gainer & creatine monohydrate best combo price", category:"Combos", image: Weightcreatine},
  
    { id: 13, name:"CREATINE & FISHOIL COMBO", price:1250, description:"Studies suggest fish oil supplements might help reduce pain, improve morning stiffness and relieve joint tenderness in people with rheumatoid arthritis. ", category:"Combos", image: Fishoil},
    
    { id: 11, name:"CREATINE MONOHYDRATE COMBO", price:850, description:"Creatine monohydrate best combo", category:"Combos", image: Combocrea},
    { id: 14, name:"PURE ISOLATE, CREATINE & BAG COMBO", description:"Bestest combo offer in this price", price:2499, category:"Combos", image: Bag}
]

export default products;