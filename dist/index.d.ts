declare class ClickPassword {
    rangeWidth: number;
    rangeHeight: number;
    triggerSequence: string;
    triggerCallback: () => void;
    printDebug: boolean;
    clickSequenceArray: Array<string>;
    eventName: string;
    eventHandler: () => void;
    /**
     * ClickPassword constructor
     * @param {string} triggerSequence the sequence string for trigger callback function.
     * @param {function} triggerCallback the callback function.
     * @param {boolean} printDebug whether print debug logs.
     */
    constructor(triggerSequence: string, triggerCallback: () => void, printDebug?: boolean);
    getEventName(): void;
    init(): void;
    eventProcess(e: PointerEvent | MouseEvent | TouchEvent): void;
    getQuadrant(onePoint: {
        x: number;
        y: number;
    }): "D" | "B" | "C" | "A";
    checkClick(oneClickChar: string): void;
}
export default ClickPassword;
