// ================================
// Transaction Message Types
// ================================
export * from 'ui/models';
export type { default as MsgBlockUser } from './desmos/msg/profiles/msg_block_user';
export type { default as MsgCreateRelationship } from './desmos/msg/profiles/msg_create_relationship';
export type { default as MsgDeleteProfile } from './desmos/msg/profiles/msg_delete_profile';
export type { default as MsgDeleteRelationship } from './desmos/msg/profiles/msg_delete_relationship';
export type { default as MsgDtagAcceptTransfer } from './desmos/msg/profiles/msg_dtag_accept_transfer';
export type { default as MsgDtagCancelTransfer } from './desmos/msg/profiles/msg_dtag_cancel_transfer';
export type { default as MsgDtagRefuseTransfer } from './desmos/msg/profiles/msg_dtag_refuse_transfer';
export type { default as MsgDtagTransferRequest } from './desmos/msg/profiles/msg_dtag_transfer_request';
export type { default as MsgLinkApplication } from './desmos/msg/profiles/msg_link_application';
export type { default as MsgLinkChainAccount } from './desmos/msg/profiles/msg_link_chain_account';
export type { default as MsgSaveProfile } from './desmos/msg/profiles/msg_save_profile';
export type { default as MsgUnblockUser } from './desmos/msg/profiles/msg_unblock_user';
export type { default as MsgUnlinkApplication } from './desmos/msg/profiles/msg_unlink_application';
export type { default as MsgUnlinkChainAccount } from './desmos/msg/profiles/msg_unlink_chain_account';
