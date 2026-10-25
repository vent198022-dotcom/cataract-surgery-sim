import { baseStep } from './common.js';
import { SKIPS } from '../core/skips.js';
import { createIncisionStep } from './incision.js';
import { createCapsulorhexisStep } from './capsulorhexis.js';
import { createChopStep } from './chop.js';
import { createPhacoStep } from './phaco.js';
import { createCortexStep } from './cortex.js';
import { createIolStep } from './iol.js';
import { createLaserStep } from './laser.js';
import { createCapsuleRemovalStep } from './capsuleRemoval.js';

const orbitStep = id => baseStep({ id, view: 'orbit', isComplete: () => true, skip: SKIPS[id] });

export function createSteps(deps) {
  return {
    intro: orbitStep('intro'),
    incision: createIncisionStep(deps),
    capsulorhexis: createCapsulorhexisStep(deps),
    chop: createChopStep(deps),
    laser: createLaserStep(deps),
    capsuleRemoval: createCapsuleRemovalStep(deps),
    phaco: createPhacoStep(deps),
    cortex: createCortexStep(deps),
    iol: createIolStep(deps),
    done: orbitStep('done'),
  };
}
