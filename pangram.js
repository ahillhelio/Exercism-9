//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { Stream } from "stream";
import { stringify } from "querystring";

export const isPangram = (str) => {
  let result = true; 
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lc = str.toLowerCase()

  for (let i = 0; i < alphabet.length; i++){
    
    if (lc.indexOf(alphabet[i]) == -1) {
      result = false;
    }
  }

  return result; 
};
