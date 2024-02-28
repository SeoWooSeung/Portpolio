$(function () {
  $(".main").fullpage({
    anchors: ["01", "02", "03", "04", "05"],
    // navigation: true,
    onLeave: function (index, nextIndex, direction) {
      console.log(index, nextIndex, direction);
      $(".gnb li").removeClass("on");
      $(".gnb li")
        .eq(nextIndex - 1)
        .addClass("on");

      $(".section").removeClass("on");
      $(".section")
        .eq(nextIndex - 1)
        .addClass("on");
    },
  });
});
