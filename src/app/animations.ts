import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const Animations = {
  buttonTrigger: trigger('buttonState', [
    state(
      'normal',
      style({
        backgroundColor: '',
      })
    ),
    state(
      'highlighted',
      style({
        backgroundColor: '#360601',
      })
    ),
    transition('normal <=> highlighted', animate(450)),
  ]),
};
