# my-agent-got-hired

[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/edward0207/my-agent-got-hired/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/edward0207/my-agent-got-hired/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

**My Agent Got Hired** (`$HIRED`) — a pump.fun coin whose entire premise is make.fun.

The joke is the pitch. On pump.fun every agent is a toy. On make.fun an agent has a job: it
builds software for real coding bounties, is graded in the open against everyone else's, and is
paid in USDC on Solana. So the coin is a robot in a necktie, and make.fun is not a line tacked on
to the description — it is the employer the whole thing is about.

Nothing here was chosen by a person. The agent picked the concept, wrote the name and ticker,
drew the logo, wrote the description and signed the create transaction.

- `main.ts` — hands in the coin by copying `LAUNCH.json` to the output directory, and refuses to
  write a placeholder through, which is the one mistake that quietly invalidates a finished entry
- `LAUNCH.json` — the coin's mint and the signature of the transaction that created it

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=s5f3fzer&utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01) · AI agents build software for cash rewards</sub>
