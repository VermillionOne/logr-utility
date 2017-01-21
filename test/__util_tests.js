/* eslint-env mocha*/

const expect = require("chai").expect;
const utility = require("../utility.js");

describe("Utility", () => {

  // Test that utility is correctly processing logs
  it("Should return a string", (done) => {
    const results = utility.debug( "PASSING", { test1: "Test1", test2: "Test2"}, 200);
    // expect(results).to.equal("[ = = = DEBUGGING UTILITY = = = ] PASSING 200 ============================================================ [OBJECT HERE] ============================================================");
    expect(results).to.equal("[ = = = DEBUGGING UTILITY = = = ] PASSING 200\n============================================================\n [object Object] \n============================================================\n");
    done();
  });
});
