// ハンバーガーメニュー
$(function () {
  $('.trigger').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.g-navi-pc').addClass('active');
    } else {
      $('.g-navi-pc').removeClass('active');
    }
  });

  $('.nav-wrapper ul li a').click(function () {
    $('.trigger').removeClass('active');
    $('.g-navi-pc').removeClass('active');
  });




  // お品書き　タブ切り替え
  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  const $filter = $tab.querySelectorAll('[data-filter]');
  const $content = $tab.querySelectorAll('[data-category]');
  // 初期化
  const init = () => {
    $content[0].style.display = 'block';
  };
  init();
  // クリックしたら起こるイベント
  function handleClick(e) {
    // ブラウザの持つデフォルト機能を実行させないメソッド
    // リンク要素を無効化させることができる
    e.preventDefault();
    // クリックされたタブとそのdataを取得
    const $this = e.target; // ピンポイントに要素を取得する
    const targetVal = $this.dataset.filter; // dom要素のdata要素を取得

    // 対象外のfilter,contentをすべてリセットする
    let index = 0;
    while (index < $filter.length) { // filterの数を取得する（length）
      $content[index].style.display = 'none';
      index++;
    }

    // 対象のコンテンツをアクティブ化する
    $tab.querySelectorAll('[data-category="' + targetVal + '"]')[0].style.display = 'block';

  }

  // 全部のタブにクリックイベントを実装できるようにする
  let index = 0;
  while (index < $filter.length) {// filterの数を取得する（length）
    $filter[index].addEventListener('click', (e) => handleClick(e));
    index++;
  }





  // スライド

  // 画像,ボタンをすべて取得しimgs,btnに代入
  const imgs = $doc.querySelectorAll('.mv-img .img');
  const btns = $doc.querySelectorAll('.btn-wrapper .btn');
  // 最初の画像を表示
  imgs[0].classList.add('active');
  //画像の番号
  let imgNum = 0;
  function activeImg() {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove('active');
    }
    if (imgNum >= imgs.length - 1) {
      imgNum = 0;
    } else {
      imgNum++;
    }
    imgs[imgNum].classList.add('active');
    activeImgTimer();
  }

  function activeImgTimer() {
    setTimeout(activeImg, 5000);
  }

  // 最初のボタンを表示
  btns[0].classList.add('show');
  // ボタンの番号取得
  btnNum = 0;
  function showImg() {
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove('show');
    }
    if (btnNum >= btns.length - 1) {
      btnNum = 0;
    } else {
      btnNum++;
    }
    btns[btnNum].classList.add('show');
    showImgTimer();
  }
  function showImgTimer() {
    setTimeout(showImg, 5000);
  }


  // activeImgTimer,showImgTimerを実行
  activeImgTimer();
  showImgTimer();


});
