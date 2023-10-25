import Coffee01 from '../globalImages/Coffee01.png';
import Coffee02 from '../globalImages/Coffee02.png';
import Coffee03 from '../globalImages/Coffee03.png';
import Coffee04 from '../globalImages/Coffee04.png';
import Coffee05 from '../globalImages/Coffee05.png';
import Coffee06 from '../globalImages/Coffee06.png';
import Coffee07 from '../globalImages/Coffee07.png';
import Coffee08 from '../globalImages/Coffee08.png';
import Coffee09 from '../globalImages/Coffee09.png';
import Coffee10 from '../globalImages/Coffee10.png';
import Coffee11 from '../globalImages/Coffee11.png';
import Coffee12 from '../globalImages/Coffee12.png';
import {CoffeeItem} from '../globalTypes';

export const productData: CoffeeItem[] = [
  {
    id: '1',
    isFirst: true as true,
    imageSource: Coffee01,
    type: 'Tradicional',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 'R$ 9,90',
  },
  {
    id: '2',
    imageSource: Coffee02,
    type: 'Tradicional',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 'R$ 9,90',
  },
  {
    id: '3',
    imageSource: Coffee03,
    type: 'Tradicional',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 'R$ 9,90',
  },
  {
    id: '4',
    imageSource: Coffee04,
    type: 'Tradicional',
    title: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    price: 'R$ 9,90',
  },
  {
    id: '5',
    imageSource: Coffee05,
    type: 'Tradicional',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 'R$ 9,90',
  },
  {
    id: '6',
    imageSource: Coffee06,
    type: 'Doces',
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses de café, leite e espuma',
    price: 'R$ 9,90',
  },
  {
    id: '7',
    imageSource: Coffee07,
    type: 'Doces',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 'R$ 9,90',
  },
  {
    id: '8',
    imageSource: Coffee08,
    type: 'Doces',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 'R$ 9,90',
  },
  {
    id: '9',
    imageSource: Coffee09,
    type: 'Especiais',
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 'R$ 9,90',
  },
  {
    id: '10',
    imageSource: Coffee10,
    type: 'Especiais',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 'R$ 9,90',
  },
  {
    id: '11',
    imageSource: Coffee11,
    type: 'Especiais',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 'R$ 9,90',
  },
  {
    id: '12',
    imageSource: Coffee12,
    type: 'Especiais',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 'R$ 9,90',
  },
];
