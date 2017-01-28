class GuessingGame {
    constructor() {
		this._min = Number.MIN_VALUE;
		this._max = Number.MAX_VALUE;
        this._cur = 0;
	}

    setRange(min, max) {
		this._min = min;
        this._max = max;
    }

    guess() {
        return this._cur = Math.ceil((this._max+this._min) / 2);
    }

    lower() {
        this._max = this._cur;
    }

    greater() {
        this._min = this._cur;
    }
}

module.exports = GuessingGame;
