import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';

const orbitStep = id => baseStep({ id, view: 'orbit', isComplete: () => true, skip: SKIPS[id] });
// Task 7–12 會逐一把 pendingStep 換成真正的步驟
const pendingStep = id => baseStep({ id, isComplete: () => true, skip: SKIPS[id] });

export function createSteps(deps) {
  return {
    intro: orbitStep('intro'),
    incision: pendingStep('incision'),
    capsulorhexis: pendingStep('capsulorhexis'),
    chop: pendingStep('chop'),
    laser: pendingStep('laser'),
    capsuleRemoval: pendingStep('capsuleRemoval'),
    phaco: pendingStep('phaco'),
    cortex: pendingStep('cortex'),
    iol: pendingStep('iol'),
    done: orbitStep('done'),
  };
}
