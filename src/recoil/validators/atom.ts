import { atomFamily } from 'recoil';
import { AtomState } from './types';

const initialState: AtomState = null;

export const atomFamilyState = atomFamily<AtomState, string>({
  key: 'validator',
  default: initialState,
});

// // atomFamily
// const mealsAtom = atomFamily<IMeal, number>({
//   key: "meals",
//   default: {}
// });

// const mealIds = atom<number[]>({
//   key: "mealsIds",
//   default: []
// });

// // abstraction
// const meals = selectorFamily<IMeal, number>({
//   key: "meals-access",
//   get:  (id) => ({ get }) => {
//       const atom = get(mealsAtom(id));
//       return atom;
//   },
//   set: (id) => ({set, reset}, meal) => {
//       if (guardRecoilDefaultValue(meal)) {
//         // DefaultValue means reset context
//         reset(mealsAtom(id));
//         reset(mealIds (id));
//         return;
//       }
//       // from this line you got IMeal (not IMeal | DefaultValue)
//       set(mealsAtom(id), meal);
//       set(mealIds (id), prev => [...prev, meal.id)]);
//   }
// });
