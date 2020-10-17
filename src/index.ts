import * as fs from "fs";

export default class localPorridge {
  private location!: string;
  public length: number;

  constructor(location: string) {
    this.location = location;

    try {
      const storage = this.getStorage();
      this.length = Object.keys(storage).length;
    } catch (err) {
      this.length = 0;
    }
  }

  key(index: number): string {
    const storage = this.getStorage();
    const keys = Object.keys(storage);
    return storage[keys[index]];
  }

  getItem(name: string): string | undefined {
    try {
      const storage = this.getStorage();
      return storage[name];
    } catch (err) {
      return undefined;
    }
  }

  setItem(name: string, value: string): void {
    let storage: Record<string, string>;
    try {
      storage = this.getStorage();
    } catch (err) {
      storage = {};
    }

    if (!(name in storage)) {
      this.length++;
    }
    storage[name] = value;

    fs.writeFileSync(this.location, JSON.stringify(storage));
  }

  removeItem(name: string): void {
    let storage: Record<string, string>;
    try {
      storage = this.getStorage();
    } catch (err) {
      storage = {};
    }

    if (name in storage) {
      this.length--;
    }
    delete storage[name];

    fs.writeFileSync(this.location, JSON.stringify(storage));
  }

  clear(): void {
    fs.unlinkSync(this.location);
  }

  //

  private getStorage(): Record<string, string> {
    const content = fs.readFileSync(this.location, {
      encoding: "utf-8",
    });

    return JSON.parse(content);
  }
}
