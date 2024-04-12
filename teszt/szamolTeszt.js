QUnit.module("szamolas", function () {
  QUnit.test("Létezik-e?", (assert) => {
    assert.ok(szamolas);
  });

  QUnit.test("Függvény0-e?", (assert) => {
    assert.ok(typeof (szamolas === "function"));
  });

  // alapeset
  QUnit.test("Pozitív egész számokat adunk össze", (assert) => {
    kapott = szamolas(3, 5);
    vart = 8;
    assert.equal(kapott, vart);
  });

  QUnit.test("Negatív egész számokat adunk össze", (assert) => {
    assert.equal(szamolas(-2, -4), -6);
  });

  QUnit.test("Tört számokat adunk össze", (assert) => {
    assert.equal(szamolas(3.2, 4.1), 7.3);
  });

  //speciális esetek
  QUnit.test("Egész szám szövegként megadva", (assert) => {
    assert.equal(szamolas(3, "2"), 5);
  });

  QUnit.test("Szöveg az egyik paraméter", (assert) => {
    assert.equal(szamolas(3, "cica"), "Mindkét paraméter szám legyen!");
  });

  QUnit.test("Logikai az egyik paraméter", (assert) => {
    assert.equal(szamolas(3, false), 3);
  });

  QUnit.test("Speciális karakter az egyik paraméter", (assert) => {
    assert.equal(szamolas("!", false), "Mindkét paraméter szám legyen!");
  });

  QUnit.test("PI az egyik paraméter", (assert) => {
    assert.equal(szamolas(Math.PI, 2), Math.PI + 2);
  });

  QUnit.test("Egy paraméter van megadva", (assert) => {
    assert.equal(szamolas(2), "Két paraméter szükséges!");
  });
  
  QUnit.test("0 paraméter van megadva", (assert) => {
    assert.equal(szamolas(), "Két paraméter szükséges!");
  });

  QUnit.test("Több, mint 2 paraméter van megadva", (assert) => {
    assert.equal(szamolas(2, 3, 6), "Két paraméter szükséges!");
  });

});
