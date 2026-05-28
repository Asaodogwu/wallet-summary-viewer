---
name: wallet-summary-viewer
description: >
  Shows a complete summary of any Pharos wallet address on the Pacific Mainnet.
  Triggers on phrases like check my wallet, wallet summary, how many transactions.
version: 1.0.0
author: Asaodogwu
tags: [wallet, balance, transactions, pharos, mainnet, health]
---

# Wallet Summary Viewer

## What This Skill Does
Takes any Pharos wallet address and returns a complete wallet summary including:
- Current PHRS balance
- Total transactions sent
- Latest block number on Pharos mainnet
- Health status (Healthy / Low / Empty)
- Simple advice based on the balance

## How To Use
node scripts/history.js <wallet-address>

## Example
node scripts/history.js 0x000000000000000000000000000000000000dEaD

## Output Example
Wallet Summary for: 0x000000000000000000000000000000000000dEaD
Balance          : 1.3584 PHRS
Total Txns Sent  : 42
Latest Block     : 8562370
Health Status    : Healthy
Advice           : Wallet has sufficient balance.

## Dependencies
- Node.js v18+

## Network
- Pharos Pacific Mainnet (Chain ID: 688688)

## Notes
- No private key required
- Works with any valid Pharos wallet address
