import moment from 'moment';

/**
 * The countdown begins. The time is set in the graphic window in minutes
 *
 * @param {*} parent The element in which we place the timer
 */
function timer(parent) {
  /* The default timeout value */
  const defoultTimer = 1;
  /* Time limits with which the timer works */
  const min = 1;
  const max = 60;
  /* Input for entering data */
  let input;
  /* Text for the user */
  let inscription;
  /* Message at the end */
  const messageEnd = 'З новим Роком!';

  const display = createElem('div', '', 'display');
  parent.append(display);
  display.classList.add('hidden');

  toDrawTimer(parent);

  parent.addEventListener('click', (e) => {
    switch (e.target.className) {
      case 'plus': input.value = Math.min(max, +input.value + 1); break;
      case 'minus': input.value = Math.max(min, input.value - 1); break;
      case 'start': checkAndStartTimer(); break;
    }
  });

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAndStartTimer();
  });

  /**
       * Check the data and start the timer if the data is within the limits
       */
  function checkAndStartTimer() {
    const val = input.value;
    /* Verification of entered data */
    if (val < min || val > max || !val) {
      alert(`Введіть число від ${min} до ${max}`);
      return;
    }

    panelVisibilityToggle();
    const end = moment().add(moment.duration(input.value, 'minutes'));
    startTimer(end);
  }

  /**
       * Accepts the end time and starts the countdown
       *
       * @param {*} end The time corresponding to the end of the timer
       */
  function startTimer(end) {
    /* Sets the start of time */
    let now;
    /* The time remaining before the timer expires in milliseconds */
    let dif;
    inscription.innerHTML = 'Залишилося';

    const interval = setInterval(() => {
      now = moment();
      dif = end.diff(now);
      /* The end of the countdown */
      if (dif <= 0) {
        clearInterval(interval);
        alert(messageEnd);
        panelVisibilityToggle();
        return;
      }
      /* Contains the remaining time (moment) */
      const time = moment(dif);
      /* Output of information about time in the html element */
      display.innerHTML = `${time.minutes() > 0 ? `${time.minutes()} :` : ''} ${time.seconds()}`;
    }, 100);
  }

  /**
       * Graphical display of timer elements in the parent element
       *
       * @param {*} parentElem Parent element
       */
  function toDrawTimer(parentElem) {
    inscription = createElem('h2', 'Вкажіть час в минутах', 'inscription');
    const wrap = createElem('div', '', 'wrap');
    input = createElem('input', '0', 'input');
    input.type = 'number';
    input.value = defoultTimer;
    input.min = min;
    input.max = max;
    const plus = createElem('button', '+', 'plus');
    const minus = createElem('button', '-', 'minus');
    const start = createElem('button', 'start', 'start');

    parentElem.prepend(inscription);
    wrap.append(minus, input, plus);
    parentElem.append(wrap, start);
  }

  /**
       * Create an element with a description and a class
       *
       * @param {*} teg Element teg
       * @param {*} text Element text
       * @param {*} clasName Element class
       * @return {*} Returns the created element
       */
  function createElem(teg, text, clasName) {
    const elem = document.createElement(teg);
    elem.innerHTML = text;
    elem.classList.add(clasName);
    return elem;
  }

  /**
       * Panel Visibility Toggle
       */
  function panelVisibilityToggle() {
    const listVisibility = ['display', 'start', 'wrap'];
    listVisibility.map((clasName) => parent.querySelector(`.${clasName}`).classList.toggle('hidden'));
  }
}

export default timer;
