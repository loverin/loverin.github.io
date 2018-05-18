function getHiddenProp() {
  let prefixes = ['webkit', 'moz', 'ms', 'o'];

  if ('hidden' in document) return 'hidden';

  for (let i = 0; i < prefixes.length; i++) {
    if ((prefixes[i] + 'Hidden') in document)
      return prefixes[i] + 'Hidden';
  }

  return null;
}


function getVisibilityState() {
  let prefixes = ['webkit', 'moz', 'ms', 'o'];

  if ('visibilityState' in document) return 'visibilityState';

  for (let i = 0; i < prefixes.length; i++) {
    if ((prefixes[i] + 'VisibilityState') in document)
      return prefixes[i] + 'VisibilityState';
  }

  return null;
}


let visProp = getHiddenProp();

if (visProp) {
  let evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';

  document.addEventListener(evtname, function () {
    let state = document[getVisibilityState()];
    if ('hidden' === state) {
      document.title = 'ヾ(*>∀＜*)';
    } else {
      document.title = '(*/ω＼*) L o v e r i n'
      setTimeout(() => {
        document.title = 'L o v e r i n'
      }, 3000);
    }

  }, false);
}


function getDuration() {
  /* 28 and 47 are my lucky numbers */
  let metTime = new Date(Date.parse('Mon Nov 21 2016 08:28:47 GMT+0800'));
  let currentTime = new Date();

  let diff = currentTime.getTime() - metTime.getTime();

  let days, hs, ms, ss;
  days = Math.floor(diff / (24 * 3600 * 1000));
  hs = Math.floor(diff % (24 * 3600 * 1000) / (3600 * 1000))
  ms = Math.floor(diff % (24 * 3600 * 1000) % (3600 * 1000) / (60 * 1000))
  ss = Math.round(diff % (24 * 3600 * 1000) % (3600 * 1000) % (60 * 1000) / 1000)

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hs;
  document.getElementById("minutes").innerText = ms;
  document.getElementById("seconds").innerText = ss;

  window.setTimeout(getDuration, 1000);
}