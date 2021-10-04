// TODOを入力し、追加ボタンを押したときの動作
const onClickAdd = () => {
  // 入力されたテキストを取得して初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 未完了リストに入力したTODOを追加
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteUl = (target) => {
  document.getElementById("incomplete-ul").removeChild(target);
};

// 未完了リストに指定の要素を追加
const createIncompleteList = (text) => {
  // コンポーネントをぶら下げるliタグを生成
  const li = document.createElement("li");
  li.className = "list-class";

  // タスク名のpタグを生成
  const p = document.createElement("p");
  p.className = "comment-class";
  p.innerText = text;

  // 完了ボタンタグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteUl(deleteButton.parentNode);
    createCompleteList(text);
  });

  // 削除ボタンタグを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteUl(deleteButton.parentNode);
  });

  // liタグに各要素をぶら下げる
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-ul").appendChild(li);
};

// 未完了リストに指定の要素を追加
const createCompleteList = (text) => {
  // コンポーネントをぶら下げるliタグを生成
  const li = document.createElement("li");
  li.className = "list-class";

  // タスク名のpタグを生成
  const p = document.createElement("p");
  p.className = "comment-class";
  p.innerText = text;

  // 戻すボタンタグを生成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    const deleteTarget = backButton.parentNode;
    document.getElementById("complete-ul").removeChild(deleteTarget);
    createIncompleteList(text);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(backButton);

  // 完了リストに追加
  document.getElementById("complete-ul").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
