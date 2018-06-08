export const round = amount => Math.round(amount * 100) / 100

// calculates the monthly interest given principle and annual rate
export const calcInterest = (p, r) => round(p * (r / 100 / 12))
