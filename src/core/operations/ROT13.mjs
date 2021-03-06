/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

import Operation from "../Operation";


/**
 * ROT13 operation.
 */
class ROT13 extends Operation {

    /**
     * ROT13 constructor
     */
    constructor() {
        super();

        this.name = "ROT13";
        this.module = "Default";
        this.description = "A simple caesar substitution cipher which rotates alphabet characters by the specified amount (default 13).";
        this.inputType = "byteArray";
        this.outputType = "byteArray";
        this.args = [
            {
                name: "Rotate lower case chars",
                type: "boolean",
                value: true
            },
            {
                name: "Rotate upper case chars",
                type: "boolean",
                value: true
            },
            {
                name: "Amount",
                type: "number",
                value: 13
            },
        ];
    }

    /**
     * @param {byteArray} input
     * @param {Object[]} args
     * @returns {byteArray}
     */
    run(input, args) {
        const output = input,
            rot13Lowercase = args[0],
            rot13Upperacse = args[1];
        let amount = args[2],
            chr;

        if (amount) {
            if (amount < 0) {
                amount = 26 - (Math.abs(amount) % 26);
            }

            for (let i = 0; i < input.length; i++) {
                chr = input[i];
                if (rot13Upperacse && chr >= 65 && chr <= 90) { // Upper case
                    chr = (chr - 65 + amount) % 26;
                    output[i] = chr + 65;
                } else if (rot13Lowercase && chr >= 97 && chr <= 122) { // Lower case
                    chr = (chr - 97 + amount) % 26;
                    output[i] = chr + 97;
                }
            }
        }
        return output;
    }

    /**
     * Highlight ROT13
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlight(pos, args) {
        return pos;
    }

    /**
     * Highlight ROT13 in reverse
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlightReverse(pos, args) {
        return pos;
    }
}

export default ROT13;
