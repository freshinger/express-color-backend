export class RNG {
  private _randomNumber: number = 0;
  constructor() {
    this.shuffle();
  }

  shuffle(): void {
    const bytes = new Uint8Array(1); // 1 bytes 0-255
    crypto.getRandomValues(bytes);
    this._randomNumber = this.bytesToInteger(bytes);
  }

  private bytesToInteger(bytes: Uint8Array): number {
    const binary = Array.from(bytes)
      .map((byte) => byte.toString(2).padStart(8, "0"))
      .join();
    return parseInt(binary, 2);
  }

  get randomNumber(): number {
    return this.randomNumber;
  }

  generate(): number {
    this.shuffle();
    return this._randomNumber;
  }
}
