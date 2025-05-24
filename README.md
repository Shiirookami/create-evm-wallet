# EVM Wallet Generator

This script automatically generates multiple Ethereum wallets using `ethers.js` and saves them in a structured format to a file named `accounts.txt`.

---

## 📦 Features

- Generates Ethereum wallets including:
  - **Private Key**
  - **Seed Phrase (Mnemonic)**
  - **Wallet Address**
- Saves all generated data into `accounts.txt` in the following order:
  - Private Keys
  - Seed Phrases
  - Addresses

---

## 🛠️ Setup

### 1. Create the script file

Save the script or using git fiture`git clone`
```bash
git clone https://github.com/Shiirookami/create-evm-wallet.git
```

### 2. Initialize and install dependencies

Run the following commands in your terminal:

```bash
npm init -y
npm install ethers
node main.js
