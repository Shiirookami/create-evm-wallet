const { ethers } = require('ethers');
const fs = require('fs').promises;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

function createWallet() {
    const wallet = ethers.Wallet.createRandom();
    return wallet;
}

async function main() {
    const numAccounts = parseInt(await askQuestion('Masukkan jumlah akun yang ingin dibuat: '), 10);
    rl.close();

    const privateKeys = [];
    const seedPhrases = [];
    const addresses = [];

    for (let i = 0; i < numAccounts; i++) {
        console.log(`\nMembuat akun ${i + 1}/${numAccounts}...`);
        const wallet = createWallet();

        privateKeys.push(wallet.privateKey);
        seedPhrases.push(wallet.mnemonic.phrase);
        addresses.push(wallet.address);

        console.log(`Address: ${wallet.address}`);
        console.log(`Private Key: ${wallet.privateKey}`);
        console.log(`Seed Phrase: ${wallet.mnemonic.phrase}`);

        await new Promise(resolve => setTimeout(resolve, 500)); // delay opsional
    }

    const fileContent = [
        'PrivateKey:',
        ...privateKeys,
        '',
        'SeedPhrase:',
        ...seedPhrases,
        '',
        'Address:',
        ...addresses,
        ''
    ].join('\n');

    await fs.writeFile('accounts.txt', fileContent);
    console.log('\nSemua akun berhasil dibuat dan disimpan ke accounts.txt');
}

main().catch(console.error);
