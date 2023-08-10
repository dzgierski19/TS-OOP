export const EXTRADISCOUNTS = {
  FIRST_SHOPPING: "FIRST_SHOPPING",
  SUBSCRIBING_TO_NEWSLETTER: "SUBSCRIBING_TO_NEWSLETTER",
  ROLLING_LOUD_TICKET: "ROLLING_LOUD_TICKET",
} as const;

export type ExtraDiscounts =
  (typeof EXTRADISCOUNTS)[keyof typeof EXTRADISCOUNTS];