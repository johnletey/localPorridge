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
  it("Test getItem(<NAME>)", (done) => {
    const value = localStorage.getItem("test");
    assert(value);
    done();
  });
});
