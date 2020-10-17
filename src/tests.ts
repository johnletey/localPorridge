import localPorridge from ".";
import { assert } from "chai";

let localStorage: localPorridge;

describe("E2E Tests", function () {
  it("Create localPorridge instance", (done) => {
    localStorage = new localPorridge("./test.json");
    assert(localStorage);
    done();
  });
});
