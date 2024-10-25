class Counter {
  constructor(initialCount = 0) {
    this.previousEntriesDisplay = document.getElementById("displayed-entries");
    this.mainCounterDisplay = document.getElementById("main-counter");
    this.count = initialCount;
    this.countArray = [];
    this.displayCounters(); // Initialize displays on construction
  }

  incrementCounter() {
    this.count++;
    this.displayCounters();
  }

  saveCounter() {
    this.countArray.push(this.count);
    this.count = 0;
    this.displayCounters();
  }

  clearCounter() {
    this.count = 0;
    this.countArray = [];
    this.displayCounters();
  }

  displayCounters() {
    this.displayMainCounter();
    this.displayCounterEntries();
  }

  displayMainCounter() {
    if (this.mainCounterDisplay) {
      this.mainCounterDisplay.innerText = this.count.toString();
    }
  }

  displayCounterEntries() {
    if (!this.previousEntriesDisplay) return;

    if (!this.countArray.length) {
      this.previousEntriesDisplay.innerText = '';
      return;
    }

    const label = this.countArray.length === 1 ? 'Previous Entry:' : 'Previous Entries:';
    this.previousEntriesDisplay.innerText = `${label} ${this.countArray.join(' - ')}`;
  }
}

// Instantiation and event handler bindings
const counter = new Counter(0);

const incrementCounter = () => counter.incrementCounter();
const saveCounter = () => counter.saveCounter();
const clearCounter = () => counter.clearCounter();
