import cfg from "./rollup.config";

cfg.input = "benchmarks/bench.ts";
cfg.output = [
  {
    file: "./build/index.bench.js",
    format: "cjs",
  },
];

export default cfg;
