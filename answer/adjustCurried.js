// 原始分數
const originalScores = [60, 70, 75, 70, 80, 80];

// 將調分方式以柯里化包裝
let adjustWithCurry = method => arr => arr.map(method);

// 全體加十分
let adjustAddTen = adjustWithCurry(x => x + 10);
console.log(adjustAddTen(originalScores));

// 全體加一成
let adjustTenPercent = adjustWithCurry(x => x * 1.1);
console.log(adjustTenPercent(originalScores));

/*
    結論：柯里化以更細小的顆粒切割行為，方便組合新函式或大量重複使用
*/