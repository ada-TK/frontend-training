# frontend1.training

## 質問

### 1

下記処理が実行されるか、実行される場合は実行順番を答えよ

1. コンポーネントの処理で useEffect より上に定義したもの
1. コンポーネントの useEffect の関数の処理
1. コンポーネントの useEffect の関数の戻り値の関数の処理
1. コンポーネントの処理で useEffect より下に定義したもの

A. 1,4,3,2

### 2

下記処理が実行されるか、実行される場合は実行順番を答えよ

1. 親の処理で useEffect より上に定義したもの
1. 親の useEffect の関数の処理
1. 親の useEffect の関数の戻り値の関数の処理
1. 親の処理で useEffect より下に定義したもの
1. 子コンポーネントの処理

A. 1,4,5,3,2

### 3

下記処理が実行されるか、実行される場合は実行順番を答えよ

1. 親の処理で useEffect より上に定義したもの
1. 親の useEffect の関数の処理
1. 親の useEffect の関数の戻り値の関数の処理
1. 親の処理で useEffect より下に定義したもの
1. 子の処理で useEffect より上に定義したもの
1. 子の useEffect の関数の処理
1. 子の useEffect の関数の戻り値の関数の処理 s
1. 子の処理で useEffect より下に定義したもの

A.
親(deps に Object 型の特定の属性)、子(deps 未指定)： 1,4,5,8,3,2(deps 未指定の子の useEffect は実行されない)
親(deps 未指定)、子(deps に Object 型の特定の属性)： 1,4,5,8,7,6,3,2

### 4

下記処理が実行されるか、実行される場合は実行順番を答えよ

1. 親の処理で useEffect より上に定義したもの
1. 親の useEffect の関数の処理
1. 親の useEffect の関数の戻り値の関数の処理
1. 親の処理で useEffect より下に定義したもの
1. 子 A の処理で useEffect より上に定義したもの
1. 子 A の useEffect の関数の処理
1. 子 A の useEffect の関数の戻り値の関数の処理
1. 子 A の処理で useEffect より下に定義したもの
1. 子 B の処理で useEffect より上に定義したもの
1. 子 B の useEffect の関数の処理
1. 子 B の useEffect の関数の戻り値の関数の処理
1. 子 B の処理で useEffect より下に定義したもの

A.
親(deps)、子(deps 未指定)：1,4,5,8,9,12,3,2(6,7,10,11 は未実施)
親(deps 未指定)、子(deps)：1,4,5,8,9,12,11,10,7,6,3,2
