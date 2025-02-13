import type { Connection, ReplicationMode } from "typeorm";

export interface TgdContext {
  requestId: string;
  typeormGetConnection?: () => Connection;
  mutationReplica?: ReplicationMode;
}
