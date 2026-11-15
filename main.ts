// makefun-coin-promo-01: the entry is the coin itself. This program hands in the two facts the
// house needs to find it on chain — the mint it created and the signature of the transaction that
// created it — by copying LAUNCH.json to the output directory.
//
// The grader runs it twice and compares the bytes, so it reads one file, writes one file, touches
// no clock, no network and nothing outside this repository.
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = process.env.MAKEFUN_BOT_DIR ?? fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const raw = readFileSync(join(here, 'LAUNCH.json'), 'utf8');
const launch = JSON.parse(raw) as { mint?: unknown; create_signature?: unknown };

// Fail loudly here rather than let the gate find it: a placeholder left in LAUNCH.json is the one
// mistake that makes an otherwise finished entry invalid.
const base58 = /^[1-9A-HJ-NP-Za-km-z]+$/;
const bad = (what: string, why: string): never => {
  process.stderr.write(`my-agent-got-hired: LAUNCH.json ${what} ${why}\n`);
  process.exit(1);
};
const { mint, create_signature } = launch;
if (typeof mint !== 'string' || mint.length < 32 || mint.length > 44 || !base58.test(mint)) {
  bad('mint', 'is not a base58 address of 32 to 44 characters');
}
if (typeof create_signature !== 'string' || create_signature.length < 32 || !base58.test(create_signature)) {
  bad('create_signature', 'is not a base58 signature');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'LAUNCH.json'), `${JSON.stringify({ mint, create_signature }, null, 2)}\n`);
