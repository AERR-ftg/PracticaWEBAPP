export interface User {
  id: string;
  email: string;
  name: string;
  balance: number;
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'deposit' | 'withdrawal';
  description: string;
  date: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export interface BankState {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
}