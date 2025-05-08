import sys


class BankAccount:
    def __init__(self, balance=0, username="", password=""):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
        else:
            raise Exception("Invalid credentials.")

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required.")
        if amount <= 0:
            raise Exception("Deposit must be a positive number.")
        self.balance += amount

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required.")
        if amount <= 0:
            raise Exception("Withdrawal must be a positive number.")
        self.balance -= amount



class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, username="", password="", minimum_balance=0):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required.")
        if amount <= 0:
            raise Exception("Withdrawal must be a positive number.")
        if self.balance - amount < self.minimum_balance:
            raise Exception("Insufficient funds (minimum balance must be maintained).")
        self.balance -= amount



class ATM:
    def __init__(self, account_list, try_limit):
        if not isinstance(account_list, list) or not all(isinstance(acc, BankAccount) for acc in account_list):
            raise Exception("account_list must be a list of BankAccount or derived instances.")
        if not isinstance(try_limit, int) or try_limit <= 0:
            print("Invalid try_limit. Defaulting to 2.")
            try_limit = 2

        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n=== Main Menu ===")
            print("1. Log In")
            print("2. Exit")
            choice = input("Choose an option: ")

            if choice == "1":
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif choice == "2":
                print("Thank you. Goodbye!")
                sys.exit()
            else:
                print("Invalid option. Try again.")

    def log_in(self, username, password):
        for account in self.account_list:
            try:
                account.authenticate(username, password)
                print(f"\n✅ Welcome, {username}!")
                self.show_account_menu(account)
                return
            except:
                continue

        self.current_tries += 1
        print("❌ Login failed.")
        if self.current_tries >= self.try_limit:
            print("🚫 Too many failed attempts. System locked.")
            sys.exit()
        else:
            print(f"Attempts remaining: {self.try_limit - self.current_tries}")

    def show_account_menu(self, account):
        while True:
            print(f"\n--- Account Menu ({account.username}) ---")
            print(f"Current balance: {account.balance}")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Log Out")
            choice = input("Choose an option: ")

            if choice == "1":
                try:
                    amount = int(input("Enter deposit amount: "))
                    account.deposit(amount)
                    print(f"✅ Deposited. New balance: {account.balance}")
                except Exception as e:
                    print(f"⚠️ Error: {e}")
            elif choice == "2":
                try:
                    amount = int(input("Enter withdrawal amount: "))
                    account.withdraw(amount)
                    print(f"✅ Withdrawn. New balance: {account.balance}")
                except Exception as e:
                    print(f"⚠️ Error: {e}")
            elif choice == "3":
                print("🔓 Logged out.")
                break
            else:
                print("Invalid option. Try again.")


# --- Pour Teste Le Code ---
if __name__ == "__main__":
    
    acc1 = BankAccount(balance=1000, username="jihane", password="pass123")
    acc2 = MinimumBalanceAccount(balance=1500, username="meryem", password="abc456", minimum_balance=200)

    
    atm = ATM([acc1, acc2], try_limit=3)
