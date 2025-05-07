class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        call_record = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_record)
        self.call_history.append(call_record)

    def show_call_history(self):
        print("Call History:")
        for call in self.call_history:
            print(call)

    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)
        other_phone.messages.append(message)  

    def show_outgoing_messages(self):
        print("Outgoing Messages:")
        for message in self.messages:
            if message["from"] == self.phone_number:
                print(message)

    def show_incoming_messages(self):
        print("Incoming Messages:")
        for message in self.messages:
            if message["to"] == self.phone_number and message["from"] != self.phone_number:
                print(message)

    def show_messages_from(self, phone_number):
        print(f"Messages from {phone_number}:")
        for message in self.messages:
            if message["from"] == phone_number and message["to"] == self.phone_number:
                print(message)


# --- TESTS ---
phone1 = Phone("123-456")
phone2 = Phone("789-012")

# Simulate calls
phone1.call(phone2)
phone2.call(phone1)

# Simulate messages
phone1.send_message(phone2, "Hello!")
phone2.send_message(phone1, "Hi there!")
phone1.send_message(phone2, "How are you?")

# Show call histories
phone1.show_call_history()
phone2.show_call_history()

# Show messages
phone1.show_outgoing_messages()
phone1.show_incoming_messages()
phone1.show_messages_from("789-012")
