import Benchmark from "benchmark";

// `node-json-db`
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

// `localPorridge`
import LocalPorridge from "../src";

var suite = new Benchmark.Suite;
 
// add suite for `node-json-db`
suite.add('node-json-db', function() {
    var db = new JsonDB(new Config("benchmark_db", true, false, '/'));
    db.push("/bench1", "bench");
    db.save();
});

suite.add('localPorridge', function() {
    var db = new LocalPorridge("benchmark_db.json");
    db.setItem("bench1", "bench");
});

suite.on('cycle', function(event: Event) {
    console.log(String(event.target));
});

suite.run();