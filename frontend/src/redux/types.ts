// types.ts (optional: create a separate file for shared types)
export interface BudgetCard {
  title: string
  budget_price: number
}

export interface Wallet {
  bank_name: string
  budget_cards: BudgetCard[]
  bank_balance: number
}
