import { ChatMessage } from "@/types/ChatMessage";
import { ChatMember } from "@/types/ChatMember";
import { GroupMember } from "./GroupMember";

export const types = ["PRIVATE", "GROUP"] as const;
export type ChatType = (typeof types)[number];

export interface Chat {
  id: string;
  groupId?: number;
  name: string;
  type: ChatType;
  history: Array<ChatMessage>;
  participants: Array<ChatMember | GroupMember>;
  avatarFilename?: string;
}
