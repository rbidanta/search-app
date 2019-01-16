export interface RobotStatus {
  status: string;
  timeUsed: number;
  timeRemaining: number;
  currentPageIndex: number;
  currentTermIndex: number;
  currentTerm: string;
  currentTermDefinition: string;
  hasNextPage: boolean;
  hasNextTerm: boolean;
  hasPreviousPage: boolean;
  hasPreviousTerm: boolean;
}
