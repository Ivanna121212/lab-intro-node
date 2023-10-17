class SortedList {
  constructor() {
    this.items = []; // Initialize items as an empty array.
    this.length = 0; // Initialize length as 0.
  }

  add(item) {
    this.items.push(item); // Add the new item to the end of the array.
    this.items.sort((a, b) => a - b); // Sort the array in ascending order.
    this.length = this.items.length; // Update the length property.
  }

  get(pos) {
    if (pos >= 0 && pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    if (this.length === 0) {
      return 0; // Return 0 for an empty list.
    }
    return this.items.reduce((acc, val) => acc + val, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
