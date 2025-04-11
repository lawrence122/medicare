export interface ReviewItem {
    id: number;
    username: string | null,
    createdOn: Date,
    dosage: string,
    frequency: string,
    routeAdmin: string[],
    duration: number | undefined,
    sideEffect: string[],
    severity: string,
    onset: string,
    lasted: number | undefined,
    impact: string,
    helpSought: string,
    improved: string,
    medStopped: string,
}