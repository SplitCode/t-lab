const createRipple = (event) => {
  const element = event.currentTarget;

  const circle = document.createElement('span');
  const diameter = Math.max(element.clientWidth, element.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - element.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - element.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = element.getElementsByClassName('ripple')[0];

  if (ripple) {
    ripple.remove();
  }

  element.appendChild(circle);
};

const buttons = document.getElementsByTagName('button');
for (const button of buttons) {
  button.addEventListener('click', createRipple);
}

const editableElements = document.querySelectorAll('[contenteditable="true"]');
for (const elem of editableElements) {
  elem.addEventListener('click', createRipple);
}