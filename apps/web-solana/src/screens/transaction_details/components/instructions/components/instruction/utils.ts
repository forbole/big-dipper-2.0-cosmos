// referenced from
// https://github.com/solana-labs/solana/blob/c1bf85b109a74005d816af192e7220090f7be296/explorer/src/utils/tx.ts#L108
import {
  SystemProgram,
  StakeProgram,
  VOTE_PROGRAM_ID,
  Secp256k1Program,
  Ed25519Program,
} from '@solana/web3.js';
import * as R from 'ramda';
import * as MODELS from '@models';
import { InstructionType } from '../../../../types';
import {
  ProgramInfoType,
  ProgramInfoModelType,
  FormattedInstructionType,
} from './types';
import * as COMPONENTS from './components';

export enum PROGRAM_NAMES {
  // native built-ins
  ADDRESS_MAP = 'Address Map Program',
  CONFIG = 'Config Program',
  STAKE = 'Stake Program',
  SYSTEM = 'System Program',
  VOTE = 'Vote Program',

  // native precompiles
  SECP256K1 = 'Secp256k1 SigVerify Precompile',
  ED25519 = 'Ed25519 SigVerify Precompile',

  // spl
  ASSOCIATED_TOKEN = 'Associated Token Program',
  FEATURE_PROPOSAL = 'Feature Proposal Program',
  LENDING = 'Lending Program',
  MEMO = 'Memo Program',
  MEMO_2 = 'Memo Program v2',
  NAME = 'Name Service Program',
  STAKE_POOL = 'Stake Pool Program',
  SWAP = 'Swap Program',
  TOKEN = 'Token Program',
  TOKEN_METADATA = 'Token Metadata Program',
  TOKEN_VAULT = 'Token Vault Program',

  // other
  // ACUMEN = 'Acumen Program',
  // BONFIDA_POOL = 'Bonfida Pool Program',
  // BREAK_SOLANA = 'Break Solana Program',
  // MANGO_GOVERNANCE = 'Mango Governance Program',
  // MANGO_ICO = 'Mango ICO Program',
  // MANGO_1 = 'Mango Program v1',
  // MANGO_2 = 'Mango Program v2',
  // MANGO_3 = 'Mango Program v3',
  // MARINADE = 'Marinade Staking Program',
  // MERCURIAL = 'Mercurial Stable Swap Program',
  // METAPLEX = 'Metaplex Program',
  // NFT_AUCTION = 'NFT Auction Program',
  // NFT_CANDY_MACHINE = 'NFT Candy Machine Program',
  // ORCA_SWAP_1 = 'Orca Swap Program v1',
  // ORCA_SWAP_2 = 'Orca Swap Program v2',
  // ORCA_AQUAFARM = 'Orca Aquafarm Program',
  // PORT = 'Port Finance Program',
  // PYTH_DEVNET = 'Pyth Oracle Program',
  // PYTH_TESTNET = 'Pyth Oracle Program',
  // PYTH_MAINNET = 'Pyth Oracle Program',
  // QUARRY_MERGE_MINE = 'Quarry Merge Mine',
  // QUARRY_MINE = 'Quarry Mine',
  // QUARRY_MINT_WRAPPER = 'Quarry Mint Wrapper',
  // QUARRY_REDEEMER = 'Quarry Redeemer',
  // QUARRY_REGISTRY = 'Quarry Registry',
  // RAYDIUM_AMM = 'Raydium AMM Program',
  // RAYDIUM_IDO = 'Raydium IDO Program',
  // RAYDIUM_LP_1 = 'Raydium Liquidity Pool Program v1',
  // RAYDIUM_LP_2 = 'Raydium Liquidity Pool Program v2',
  // RAYDIUM_STAKING = 'Raydium Staking Program',
  // SABER_ROUTER = 'Saber Router Program',
  // SABER_SWAP = 'Saber Stable Swap Program',
  // SERUM_1 = 'Serum Dex Program v1',
  // SERUM_2 = 'Serum Dex Program v2',
  // SERUM_3 = 'Serum Dex Program v3',
  // SERUM_SWAP = 'Serum Swap Program',
  // SOLEND = 'Solend Program',
  // SOLIDO = 'Lido for Solana Program',
  // STEP_SWAP = 'Step Finance Swap Program',
  // SWIM_SWAP = 'Swim Swap Program',
  // SWITCHBOARD = 'Switchboard Oracle Program',
  // WORMHOLE = 'Wormhole',
}

export const PROGRAM_INFO_BY_ID: ProgramInfoType = {
  // native built-ins
  AddressMap111111111111111111111111111111111: {
    name: PROGRAM_NAMES.ADDRESS_MAP,
    types: [],
  },
  Config1111111111111111111111111111111111111: {
    name: PROGRAM_NAMES.CONFIG,
    types: [],
  },
  [StakeProgram.programId.toBase58()]: {
    name: PROGRAM_NAMES.STAKE,
    types: [],
  },
  [SystemProgram.programId.toBase58()]: {
    name: PROGRAM_NAMES.SYSTEM,
    types: [
      {
        type: 'createAccount',
        model: MODELS.InstructionCreateAccount,
        component: COMPONENTS.CreateAccount,
      },
      {
        type: 'transfer',
        model: MODELS.InstructionTransfer,
        component: COMPONENTS.Transfer,
      },
    ],
  },
  [VOTE_PROGRAM_ID.toBase58()]: {
    name: PROGRAM_NAMES.VOTE,
    types: [
      {
        type: 'vote',
        model: MODELS.VoteProgramVote,
        component: COMPONENTS.Vote,
      },
    ],
  },

  // native precompiles
  [Secp256k1Program.programId.toBase58()]: {
    name: PROGRAM_NAMES.SECP256K1,
    types: [],
  },
  [Ed25519Program.programId.toBase58()]: {
    name: PROGRAM_NAMES.ED25519,
    types: [],
  },

  // spl
  ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL: {
    name: PROGRAM_NAMES.ASSOCIATED_TOKEN,
    types: [],
  },
  Feat1YXHhH6t1juaWF74WLcfv4XoNocjXA6sPWHNgAse: {
    name: PROGRAM_NAMES.FEATURE_PROPOSAL,
    types: [],
  },
  LendZqTs7gn5CTSJU1jWKhKuVpjJGom45nnwPb2AMTi: {
    name: PROGRAM_NAMES.LENDING,
    types: [],
  },
  Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo: {
    name: PROGRAM_NAMES.MEMO,
    types: [],
  },
  MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr: {
    name: PROGRAM_NAMES.MEMO_2,
    types: [],
  },
  namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX: {
    name: PROGRAM_NAMES.NAME,
    types: [],
  },
  SPoo1Ku8WFXoNDMHPsrGSTSG1Y47rzgn41SLUNakuHy: {
    name: PROGRAM_NAMES.STAKE_POOL,
    types: [],
  },
  SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8: {
    name: PROGRAM_NAMES.SWAP,
    types: [],
  },
  TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA: {
    name: PROGRAM_NAMES.TOKEN,
    types: [
      {
        type: 'approve',
        model: MODELS.TokenProgramApprove,
        component: COMPONENTS.Approve,
      },
      {
        type: 'revoke',
        model: MODELS.TokenProgramRevoke,
        component: COMPONENTS.Revoke,
      },
      {
        type: 'initializeMint',
        model: MODELS.TokenProgramInitializeMint,
        component: COMPONENTS.InitializeMint,
      },
      {
        type: 'initializeAccount',
        model: MODELS.TokenProgramInitializeAccount,
        component: COMPONENTS.InitializeAccount,
      },
      {
        type: 'transfer',
        model: MODELS.TokenProgramTransfer,
        component: COMPONENTS.TokenProgramTransfer,
      },
    ],
  },
  metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s: {
    name: PROGRAM_NAMES.TOKEN_METADATA,
    types: [],
  },
  vau1zxA2LbssAUEF7Gpw91zMM1LvXrvpzJtmZ58rPsn: {
    name: PROGRAM_NAMES.TOKEN_VAULT,
    types: [],
  },

  // other
  // C64kTdg1Hzv5KoQmZrQRcm2Qz7PkxtFBgw7EpFhvYn8W: {
  //   name: PROGRAM_NAMES.ACUMEN,
  //   types: [],
  // },
  // WvmTNLpGMVbwJVYztYL4Hnsy82cJhQorxjnnXcRm3b6: {
  //   name: PROGRAM_NAMES.BONFIDA_POOL,
  //   types: [],
  // },
  // BrEAK7zGZ6dM71zUDACDqJnekihmwF15noTddWTsknjC: {
  //   name: PROGRAM_NAMES.BREAK_SOLANA,
  //   types: [],
  // },
  // GqTPL6qRf5aUuqscLh8Rg2HTxPUXfhhAXDptTLhp1t2J: {
  //   name: PROGRAM_NAMES.MANGO_GOVERNANCE,
  //   types: [],
  // },
  // '7sPptkymzvayoSbLXzBsXEF8TSf3typNnAWkrKrDizNb': {
  //   name: PROGRAM_NAMES.MANGO_ICO,
  //   types: [],
  // },
  // JD3bq9hGdy38PuWQ4h2YJpELmHVGPPfFSuFkpzAd9zfu: {
  //   name: PROGRAM_NAMES.MANGO_1,
  //   types: [],
  // },
  // '5fNfvyp5czQVX77yoACa3JJVEhdRaWjPuazuWgjhTqEH': {
  //   name: PROGRAM_NAMES.MANGO_2,
  //   types: [],
  // },
  // mv3ekLzLbnVPNxjSKvqBpU3ZeZXPQdEC3bp5MDEBG68: {
  //   name: PROGRAM_NAMES.MANGO_3,
  //   types: [],
  // },
  // MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD: {
  //   name: PROGRAM_NAMES.MARINADE,
  //   types: [],
  // },
  // MERLuDFBMmsHnsBPZw2sDQZHvXFMwp8EdjudcU2HKky: {
  //   name: PROGRAM_NAMES.MERCURIAL,
  //   types: [],
  // },
  // p1exdMJcjVao65QdewkaZRUnU6VPSXhus9n2GzWfh98: {
  //   name: PROGRAM_NAMES.METAPLEX,
  //   types: [],
  // },
  // auctxRXPeJoc4817jDhf4HbjnhEcr1cCXenosMhK5R8: {
  //   name: PROGRAM_NAMES.NFT_AUCTION,
  //   types: [],
  // },
  // cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ: {
  //   name: PROGRAM_NAMES.NFT_CANDY_MACHINE,
  //   types: [],
  // },
  // DjVE6JNiYqPL2QXyCUUh8rNjHrbz9hXHNYt99MQ59qw1: {
  //   name: PROGRAM_NAMES.ORCA_SWAP_1,
  //   types: [],
  // },
  // '9W959DqEETiGZocYWCQPaJ6sBmUzgfxXfqGeTEdp3aQP': {
  //   name: PROGRAM_NAMES.ORCA_SWAP_2,
  //   types: [],
  // },
  // '82yxjeMsvaURa4MbZZ7WZZHfobirZYkH1zF8fmeGtyaQ': {
  //   name: PROGRAM_NAMES.ORCA_AQUAFARM,
  //   types: [],
  // },
  // Port7uDYB3wk6GJAw4KT1WpTeMtSu9bTcChBHkX2LfR: {
  //   name: PROGRAM_NAMES.PORT,
  //   types: [],
  // },
  // gSbePebfvPy7tRqimPoVecS2UsBvYv46ynrzWocc92s: {
  //   name: PROGRAM_NAMES.PYTH_DEVNET,
  //   types: [],
  // },
  // '8tfDNiaEyrV6Q1U4DEXrEigs9DoDtkugzFbybENEbCDz': {
  //   name: PROGRAM_NAMES.PYTH_TESTNET,
  //   types: [],
  // },
  // FsJ3A3u2vn5cTVofAjvy6y5kwABJAqYWpe4975bi2epH: {
  //   name: PROGRAM_NAMES.PYTH_MAINNET,
  //   types: [],
  // },
  // QMMD16kjauP5knBwxNUJRZ1Z5o3deBuFrqVjBVmmqto: {
  //   name: PROGRAM_NAMES.QUARRY_MERGE_MINE,
  //   types: [],
  // },
  // QMNeHCGYnLVDn1icRAfQZpjPLBNkfGbSKRB83G5d8KB: {
  //   name: PROGRAM_NAMES.QUARRY_MINE,
  //   types: [],
  // },
  // QMWoBmAyJLAsA1Lh9ugMTw2gciTihncciphzdNzdZYV: {
  //   name: PROGRAM_NAMES.QUARRY_MINT_WRAPPER,
  //   types: [],
  // },
  // QRDxhMw1P2NEfiw5mYXG79bwfgHTdasY2xNP76XSea9: {
  //   name: PROGRAM_NAMES.QUARRY_REDEEMER,
  //   types: [],
  // },
  // QREGBnEj9Sa5uR91AV8u3FxThgP5ZCvdZUW2bHAkfNc: {
  //   name: PROGRAM_NAMES.QUARRY_REGISTRY,
  //   types: [],
  // },
  // '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8': {
  //   name: PROGRAM_NAMES.RAYDIUM_AMM,
  //   types: [],
  // },
  // '9HzJyW1qZsEiSfMUf6L2jo3CcTKAyBmSyKdwQeYisHrC': {
  //   name: PROGRAM_NAMES.RAYDIUM_IDO,
  //   types: [],
  // },
  // RVKd61ztZW9GUwhRbbLoYVRE5Xf1B2tVscKqwZqXgEr: {
  //   name: PROGRAM_NAMES.RAYDIUM_LP_1,
  //   types: [],
  // },
  // '27haf8L6oxUeXrHrgEgsexjSY5hbVUWEmvv9Nyxg8vQv': {
  //   name: PROGRAM_NAMES.RAYDIUM_LP_2,
  //   types: [],
  // },
  // EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q: {
  //   name: PROGRAM_NAMES.RAYDIUM_STAKING,
  //   types: [],
  // },
  // Crt7UoUR6QgrFrN7j8rmSQpUTNWNSitSwWvsWGf1qZ5t: {
  //   name: PROGRAM_NAMES.SABER_ROUTER,
  //   types: [],
  // },
  // SSwpkEEcbUqx4vtoEByFjSkhKdCT862DNVb52nZg1UZ: {
  //   name: PROGRAM_NAMES.SABER_SWAP,
  //   types: [],
  // },
  // BJ3jrUzddfuSrZHXSCxMUUQsjKEyLmuuyZebkcaFp2fg: {
  //   name: PROGRAM_NAMES.SERUM_1,
  //   types: [],
  // },
  // EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o: {
  //   name: PROGRAM_NAMES.SERUM_2,
  //   types: [],
  // },
  // '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin': {
  //   name: PROGRAM_NAMES.SERUM_3,
  //   types: [],
  // },
  // '22Y43yTVxuUkoRKdm9thyRhQ3SdgQS7c7kB6UNCiaczD': {
  //   name: PROGRAM_NAMES.SERUM_SWAP,
  //   types: [],
  // },
  // So1endDq2YkqhipRh3WViPa8hdiSpxWy6z3Z6tMCpAo: {
  //   name: PROGRAM_NAMES.SOLEND,
  //   types: [],
  // },
  // CrX7kMhLC3cSsXJdT7JDgqrRVWGnUpX3gfEfxxU2NVLi: {
  //   name: PROGRAM_NAMES.SOLIDO,
  //   types: [],
  // },
  // SSwpMgqNDsyV7mAgN9ady4bDVu5ySjmmXejXvy2vLt1: {
  //   name: PROGRAM_NAMES.STEP_SWAP,
  //   types: [],
  // },
  // SWiMDJYFUGj6cPrQ6QYYYWZtvXQdRChSVAygDZDsCHC: {
  //   name: PROGRAM_NAMES.SWIM_SWAP,
  //   types: [],
  // },
  // DtmE9D2CSB4L5D6A15mraeEjrGMm6auWVzgaD8hK2tZM: {
  //   name: PROGRAM_NAMES.SWITCHBOARD,
  //   types: [],
  // },
  // WormT3McKhFJ2RkiGpdw9GKvNCrB2aB54gb2uV9MfQC: {
  //   name: PROGRAM_NAMES.WORMHOLE,
  //   types: [],
  // },
};

// ================================================================
// HELPERS
// ================================================================

/**
 * Takes an array of instructions and converts them in to the
 * correct classes, labels, and components
 * @param instructions
 * @returns
 */
export const formatInstructions = async (
  instructions: InstructionType[],
): Promise<FormattedInstructionType[]> => {
  const promises = await Promise.allSettled(instructions.map(async (x) => {
    const models = getModelsByProgram(x.program);
    const modelInfo = getModelInfoByType(models)(x.type);
    const data = await modelInfo.model.fromJson(x);
    return {
      data,
      label: getProgramLabel(x.program),
      component: modelInfo.component,
    };
  }));
  const results = [];
  promises.forEach((x) => {
    if (x.status === 'fulfilled') {
      results.push(x.value);
    }
  });
  return results;
};

/**
 * Returns a list of possible types by program address
 * @param address
 * @returns
 */
export const getModelsByProgram = (address: string): ProgramInfoModelType[] => {
  return R.pathOr([], [address, 'types'], PROGRAM_INFO_BY_ID);
};

/**
 * Returns the appropriate model and component based on instruction
 * type. Defaults to JSON and UNKNOWN model if it has not been parsed by the
 * ui
 * @param models
 * @returns
 */
export const getModelInfoByType = (
  models: ProgramInfoModelType[],
) => (type: string) => {
  const [selectedModel] = models.filter((x) => x.type.toLowerCase() === type.toLowerCase());
  const model = selectedModel ? selectedModel.model : MODELS.InstructionUnknown;
  const component = selectedModel ? selectedModel.component : COMPONENTS.Json;
  return {
    model,
    component,
  };
};

/**
 * Returns the program label
 * @param address
 * @returns
 */
export const getProgramLabel = (address: string, fallback = 'Unknown Program') => {
  return R.pathOr(fallback, [address, 'name'], PROGRAM_INFO_BY_ID);
};
