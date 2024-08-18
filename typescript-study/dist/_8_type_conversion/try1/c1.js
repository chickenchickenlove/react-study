/**
 * keyOf 연산자
 *
 */
function twoSum(nums, target) {
    for (let i = 0; i++; i < nums.length - 1) {
        for (let j = i + 1; j++; j < nums.length) {
            console.log(`${i} / ${j}`);
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [0, 0];
}
;
twoSum([2, 7, 11, 15], 9);
export {};
