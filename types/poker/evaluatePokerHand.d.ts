import type { PokerCard } from './PokerCard';
import type { PokerHand } from './PokerHand';
interface Result {
    hand: PokerHand;
    strength: number[];
    cards: [PokerCard, PokerCard, PokerCard, PokerCard, PokerCard];
}
export declare function evaluatePokerHand(cards: PokerCard[]): Result;
export {};
