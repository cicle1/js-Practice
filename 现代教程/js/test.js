/* describe("pow", function () {
  it("raises to n-th power", function () {
    assert.equal(pow(2, 3), 8);
  });
}); */
describe("pow", function () {
  describe("raises x to power 3", function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
    it("for negative n the result is NaN", function () {
      assert.isNaN(pow(2, -1));
    });

    it("for non-integer n the result is NaN", function () {
      assert.isNaN(pow(2, 1.5));
    });
  });

  // ……可以在这里写更多的测试代码，describe 和 it 都可以添加在这。
});
/* 开发 “pow”：规范
我们想要创建一个函数 pow(x, n) 来计算 x 的 n 次幂（n 为整数）。我们假设 n≥0。

这个任务只是一个例子：JavaScript 中有一个 ** 运算符可以用于幂运算。但是在这里我们专注于可以应用于更复杂任务的开发流程上。

在创建函数 pow 的代码之前，我们可以想象函数应该做什么并且描述出来。

这样的描述被称作 规范（specification, spec），包含用例的描述以及针对它们的测试，如下所示：

describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

});
正如你所看到的，一个规范包含三个主要的模块：

describe("title", function() { ... })
表示我们正在描述的功能是什么。在我们的例子中我们正在描述函数 pow。用于组织“工人（workers）” —— it 代码块。

it("use case description", function() { ... })
it 里面的描述部分，我们以一种 易于理解 的方式描述特定的用例，第二个参数是用于对其进行测试的函数。

assert.equal(value1, value2)
it 块中的代码，如果实现是正确的，它应该在执行的时候不产生任何错误。

assert.* 函数用于检查 pow 函数是否按照预期工作。在这里我们使用了其中之一 —— assert.equal，它会对参数进行比较，如果它们不相等则会抛出一个错误。这里它检查了 pow(2, 3) 的值是否等于 8。还有其他类型的比较和检查，我们将在后面介绍到。

规范可以被执行，它将运行在 it 块中指定的测试。我们稍后会看到。 */
