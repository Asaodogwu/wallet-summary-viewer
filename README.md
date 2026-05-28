# Wallet Summary Viewer

A Pharos Agent Skill that shows a complete summary of any wallet on the Pharos Pacific Mainnet.

## What It Does
- Fetches live PHRS balance
- Shows total transactions sent
- Shows latest block number
- Returns health status: Healthy, Low, or Empty
- Gives simple advice based on the balance

## How To Use

1. Install dependencies
npm install

2. Run the skill
node scripts/history.js <wallet-address>

3. Example
node scripts/history.js 0x000000000000000000000000000000000000dEaD

## Output
Wallet Summary for: 0x000000000000000000000000000000000000dEaD

Balance          : 1.3584 PHRS
Total Txns Sent  : 42
Latest Block     : 8562370
Health Status    : Healthy
Advice           : Wallet has sufficient balance.

## Health Status Levels
Healthy - Balance above 0.01 PHRS - Sufficient balance
Low - Balance below 0.01 PHRS - May not cover gas fees
Empty - Balance is 0 - No funds

## Dependencies
- Node.js v18+

## Network
- Pharos Pacific Mainnet (Chain ID: 688688)

## Notes
- No private key required
- Works with any valid Pharos wallet address
