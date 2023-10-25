class Shoe {
  constructor(attrs) {
    this._attrs = attrs || {};
  }
  getName() {
    return this._attrs?.name;
  }
  getSize() {
    return this._attrs?.size;
  }
  getBrand() {
    return this.constructor.name;
  }
}

class Nike extends Shoe {}
class Puma extends Shoe {}
class Adidas extends Shoe {}

const data = [
  { type: "Nike", attrs: { name: "SB", size: 300 } },
  { type: "Nike", attrs: { name: "Airforce", size: 240 } },
  { type: "Puma", attrs: { name: "Jada", size: 270 } },
  { type: "Nike", attrs: { name: "Cortez", size: 265 } },
  { type: "Adidas", attrs: { name: "Super Star", size: 290 } },
];

class ShoeFactory {
  typeMap = {
    nike: Nike,
    puma: Puma,
    adidas: Adidas,
  };
  create(props) {
    try {
      const Brand = this.typeMap[props?.type?.toLowerCase()];
      return new Brand(props.attrs);
    } catch (e) {
      console.error(e);
    }
  }
}

const factory = new ShoeFactory();
const nike1 = factory.create({
  type: "Nike",
  attrs: { name: "Cortez", size: 265 },
});

console.log(nike1);
console.log(nike1.getBrand());
console.log(nike1.getSize());

const items = data.map((el) => factory.create(el));

console.log(items);
