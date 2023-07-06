class A {
  aaa() {}
}
class B {
  bbb() {}
}

function aOrB(params: A | B) {
  if (params instanceof A) {
    params.aaa();
  }
}

aOrB(new A());
