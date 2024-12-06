import { create } from 'zustand';
import { BankState, Transaction } from '../types';
import { generateTransactionId } from '../lib/utils';

export const useBankStore = create<BankState>((set) => ({
  transactions: [],
  addTransaction: (transaction) => {
    set((state) => ({
      transactions: [
        {
          ...transaction,
          id: generateTransactionId(),
          date: new Date().toISOString(),
        },
        ...state.transactions,
      ],
    }));
  },
}));