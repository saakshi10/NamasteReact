// javascript test file
import { sum } from "../components/sum";

test("check sum of two positive numbers", () => {
    expect(sum(2, 4)).toBe(6);
});
