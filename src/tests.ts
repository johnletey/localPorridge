import localPorridge from ".";
import { assert } from "chai";

let localStorage: localPorridge;

describe("E2E Tests", function () {
  it("Create localPorridge instance", (done) => {
    localStorage = new localPorridge("./test.json");
    assert(localStorage);
    done();
  });
  it("Test setItem(<NAME>, <VALUE>)", (done) => {
    localStorage.setItem("test", "1234");
    done();
  });
  it("Test .length", (done) => {
    const length = localStorage.length;
    done();
  });
  it("Test getItem(<NAME>)", (done) => {
    const value = localStorage.getItem("test");
    assert(value);
    done();
  });
  it("Test key(<INDEX>)", (done) => {
    const value = localStorage.key(0);
    assert(value);
    done();
  });
  it("Test removeItem(<NAME>)", (done) => {
    localStorage.removeItem("test");
    done();
  });
  it("Test clear()", (done) => {
    localStorage.clear();
    done();
  });
});
