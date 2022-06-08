import { CodeType } from '../../types';

export type ItemType = Override<CodeType, { creator: AvatarName }>
