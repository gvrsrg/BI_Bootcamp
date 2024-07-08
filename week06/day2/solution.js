function solution(S) {
    let indexB = S.indexOf("b")
    if(indexB == -1){
        return true
    }
    let indexA = S.indexOf("a",indexB)
    return indexA == -1 ? true : false
}
const testCases = [
    { input: "aabbb", output: true },
    { input: "ba", output: false },
    { input: "aaa", output: true },
    { input: "b", output: true },
    { input: "abba", output: false },
    { input: "a", output: true },
    { input: "bbaa", output: false },
    { input: "bbba", output: false },
    { input: "aabb", output: true },
    { input: "bababab", output: false },
    { input: "babababa", output: false },
    { input: "aabababb", output: false },
    { input: "baaab", output: false },
    { input: "bbabbabbababbab", output: false },
    { input: "babaabaaab", output: false },
    { input: "ab", output: true },
    { input: "ababa", output: false },
  ];
function testSolution() {
    for (let i = 0; i < testCases.length; i++) {
      const { input, output } = testCases[i];
      const result = solution(input);
      console.log(
        `Input: "${input}", Output: ${result}, Expected Output: ${output} Result: ${
          result === output ? "OK" : "NOT OK"
        }`
      );
    }
  }
  testSolution();