import { ContractType } from '../../types';

export type ItemType = Override<ContractType, { creator: AvatarName }>
