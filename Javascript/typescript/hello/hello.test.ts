import hello from './hello';

describe("hello world", () => {
  it("says hello world", () => {
    expect(hello()).toEqual("Hello World");
  });
});
