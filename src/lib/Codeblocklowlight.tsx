import { createLowlight} from 'lowlight';
const lowlight = createLowlight()

import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

const js = javascript;
const ts = typescript

lowlight.register('js', js);
lowlight.register('ts', ts);

export { lowlight };