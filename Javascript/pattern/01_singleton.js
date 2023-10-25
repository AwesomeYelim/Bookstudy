// 01. Singleton Pattern

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return console.warn("aleady instantiated");
    }
    Singleton.instance = this;
    this.version = Date.now();
    this.config = "test";
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }

    return this.instance;
  }
}

// 1. 하나의 객체 인스턴스만 존재
// 2. static 함수로 객체 접근

// const s1 = new Singleton();
// const s2 = new Singleton();

// console.log(s1, s2);

// aleady instantiated
// Singleton { version: 1698050065522, config: 'test' } Singleton {}

const s3 = Singleton.getInstance();
const s4 = Singleton.getInstance();

console.log(s3, s4, s3 === s4);

// Singleton { version: 1698050238263, config: 'test' } Singleton { version: 1698050238263, config: 'test' } true
