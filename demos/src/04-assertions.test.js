// matchers
test("test obj", () => {
  const data = {name: "Carlos"};
  data.lastname = "Gomez";
  expect(data).toEqual({ name: "Carlos", lastname: "Gomez" });
});

test("null", () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test("booleans", () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
});

test("string", () => {
  expect("Cristoph").toMatch(/stop/);
});

test("list / arrays", () =>{
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
})
