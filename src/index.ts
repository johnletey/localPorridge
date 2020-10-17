import * as fs from "fs";

export default class localPorridge {
  public location!: string;

  constructor(location: string) {
    this.location = location;
  }

  getItem(name: string): string | undefined {
    let content: string;

    try {
      content = fs.readFileSync(this.location, {
        encoding: "utf-8",
      });
    } catch (err) {
      return undefined;
    }

    const storage: Record<string, string> = JSON.parse(content);

    return storage[name];
  }

  setItem(name: string, value: string): void {
    let content: string;

    try {
      content = fs.readFileSync(this.location, {
        encoding: "utf-8",
      });
    } catch (err) {
      content = "{}";
    }

    const storage: Record<string, string> = JSON.parse(content);

    storage[name] = value;

    fs.writeFileSync(this.location, JSON.stringify(storage));
  }
}
